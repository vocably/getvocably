import { GoogleTTSLanguage, Result } from '@vocably/model';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  ColorValue,
  PixelRatio,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Sentry } from './BetterSentry';
import { iconButtonOpacity, pressedIconButtonOpacity } from './stupidConstants';

export type PlaySoundRef = {
  play: () => Promise<Result<unknown>>;
  stop: () => void;
};

type Props = {
  text: string;
  language: GoogleTTSLanguage;
  size?: number;
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
};

export const PlaySound = forwardRef<PlaySoundRef, Props>(
  ({ text, language, size = 16, style = {}, color }, ref) => {
    const theme = useTheme();

    const [isPlaying, setIsPlaying] = useState(false);
    const loadedAudioRef = useRef<Sound>();
    const loadedAudioResolverRef = useRef<(value: Result<unknown>) => void>();

    const loadAudio = (): Promise<Result<Sound>> => {
      if (loadedAudioRef.current) {
        return Promise.resolve({
          success: true,
          value: loadedAudioRef.current,
        });
      }

      return new Promise((resolve) => {
        const soundUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
          text
        )}&tl=${language}&client=tw-ob`;
        Sound.setCategory('Playback', true);
        const audio = new Sound(soundUrl, '', (error) => {
          if (error === null) {
            loadedAudioRef.current = audio;

            resolve({
              success: true,
              value: audio,
            });

            return;
          }
          if (error) {
            resolve({
              success: false,
              errorCode: 'FUCKING_ERROR',
              reason: 'Unable to load sound resource',
            });
            Sentry.captureException(new Error(`Play sound error`), {
              extra: {
                soundUrl,
                error: JSON.stringify(error),
              },
            });
          }
        });
      });
    };

    const play = async (): Promise<Result<unknown>> => {
      setIsPlaying(true);

      const loadedAudioResult = await loadAudio();

      if (!loadedAudioResult.success) {
        setIsPlaying(false);
        Alert.alert(
          'Error: The pronunciation could not be played',
          `Something went wrong during the pronunciation playback.\n\nCould you please try again?`
        );
        return loadedAudioResult;
      }

      return new Promise((resolve) => {
        loadedAudioResolverRef.current = resolve;
        loadedAudioResult.value.play((success) => {
          setIsPlaying(false);

          if (success) {
            resolve({
              success: true,
              value: null,
            });
          } else {
            resolve({
              success: false,
              errorCode: 'FUCKING_ERROR',
              reason: 'Play sound ended up with error.',
            });
          }
        });
      });
    };

    const stop = () => {
      if (loadedAudioRef.current) {
        loadedAudioRef.current.stop();
      }

      if (loadedAudioResolverRef.current) {
        loadedAudioResolverRef.current({
          success: true,
          value: null,
        });

        loadedAudioResolverRef.current = undefined;
      }

      setIsPlaying(false);
    };

    useImperativeHandle(ref, () => ({
      play,
      stop,
    }));

    const fontScale = PixelRatio.getFontScale();

    return (
      <Pressable
        hitSlop={20}
        style={({ pressed }) => [
          {
            opacity: pressed ? pressedIconButtonOpacity : iconButtonOpacity,
            // Make play sound stand out and hitSlop working
            zIndex: 1,
          },
          style,
        ]}
        onPress={() => {
          isPlaying ? stop() : play();
        }}
      >
        <Icon
          name={isPlaying ? 'volume-medium' : 'play-circle'}
          style={{
            color: color ?? theme.colors.onBackground,
          }}
          size={size * fontScale}
        />
      </Pressable>
    );
  }
);
