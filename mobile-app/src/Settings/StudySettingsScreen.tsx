import { Slider } from '@miblanchard/react-native-slider';
import { FC } from 'react';
import { Linking, PixelRatio, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getItem, setItem } from '../asyncAppStorage';
import { CustomScrollView } from '../ui/CustomScrollView';
import { CustomSurface } from '../ui/CustomSurface';
import { ListSwitch } from '../ui/ListSwitch';
import { useAsync } from '../useAsync';
import { usePremium } from '../usePremium';
import { usePresentPaywall } from '../usePresentPaywall';
import { StudySteps } from './StudySteps';

const RANDOMIZER_ENABLED_KEY = 'isRandomizerEnabled';
const MAXIMUM_CARDS_PER_SESSION_KEY = 'maximumCardsPerSession';

export const getRandomizerEnabled = () =>
  getItem(RANDOMIZER_ENABLED_KEY).then((res) => res === 'true');

const setRandomizerEnabled = (isEnabled: boolean) =>
  setItem(RANDOMIZER_ENABLED_KEY, isEnabled ? 'true' : 'false');

export const getMaximumCardsPerSession = () =>
  getItem(MAXIMUM_CARDS_PER_SESSION_KEY).then((res) => Number(res ?? 10));

export const setMaximumCardsPerSession = (cardsPerSession: number) =>
  setItem(MAXIMUM_CARDS_PER_SESSION_KEY, cardsPerSession.toString());

type Props = {};

export const StudySettingsScreen: FC<Props> = () => {
  const theme = useTheme();

  const isPremium = usePremium();
  const presentPaywall = usePresentPaywall();

  const [isRandomizerEnabled, mutateIsRandomizerEnabled] = useAsync(
    getRandomizerEnabled,
    setRandomizerEnabled
  );

  const [maximumCardsPerSession, mutateMaximumCardsPerSession] = useAsync(
    getMaximumCardsPerSession,
    setMaximumCardsPerSession
  );

  const onRandomizerEnabledChange = async () => {
    if (isRandomizerEnabled.status !== 'loaded') {
      return;
    }

    await mutateIsRandomizerEnabled(!isRandomizerEnabled.value);
  };

  const fontScale = Math.max(1, PixelRatio.getFontScale());
  return (
    <CustomScrollView>
      <StudySteps style={{ marginBottom: 32 }} />

      <CustomSurface
        style={{
          marginBottom: 32,
          gap: 16,
          padding: 16,
          paddingHorizontal: 32,
        }}
      >
        <View>
          <Text style={{ fontSize: 16 }}>Maximum cards per study session</Text>
        </View>
        {maximumCardsPerSession.status === 'loaded' && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <Text style={{ fontSize: 16, width: 24 * fontScale }}>
              {maximumCardsPerSession.value}
            </Text>
            <View style={{ flex: 1 }}>
              <Slider
                minimumValue={5}
                maximumValue={40}
                step={1}
                minimumTrackTintColor={theme.colors.primary}
                thumbTintColor={theme.colors.primary}
                value={maximumCardsPerSession.value}
                onValueChange={(value) => {
                  mutateMaximumCardsPerSession(value[0]);
                }}
              ></Slider>
            </View>
          </View>
        )}
      </CustomSurface>

      {isRandomizerEnabled.status === 'loaded' && (
        <CustomSurface style={{ marginBottom: 8 }}>
          <ListSwitch
            title="Randomly select cards to study"
            value={isRandomizerEnabled.value}
            onChange={onRandomizerEnabledChange}
          />
        </CustomSurface>
      )}
      <View
        style={{
          paddingHorizontal: 8,
        }}
      >
        <Text>
          <Icon name="alert-outline" size={16} /> Enabling this option is
          generally a <Text style={{ fontWeight: 'bold' }}>bad idea</Text>. This
          option disables the smart study algorithm. People who disable the
          smart study algorithm eventually get frustrated with their study
          progress.{' '}
          <Text onPress={() => Linking.openURL('https://vocably.pro/srs.html')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: theme.colors.primary,
              }}
            >
              Read how Vocably uses the smart study algorithm to help you learn
              more words in a shorter time.
            </Text>
            {''}
            <Text
              style={{
                color: theme.colors.primary,
                fontSize: 16,
              }}
            >
              {' '}
              <Icon name="open-in-new" />
            </Text>
          </Text>
        </Text>
      </View>
    </CustomScrollView>
  );
};
