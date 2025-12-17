import { FC, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = {};

export const CardSkeletonLoader: FC<Props> = () => {
  const theme = useTheme();
  const opacity = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  const backgroundColor = theme.colors.onBackground;
  const borderRadius = 4;
  const height = 18;
  const titleHeight = 22;

  return (
    <View
      style={{
        gap: 6,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 6,
        }}
      >
        <Animated.View
          style={[
            {
              width: titleHeight,
              height: titleHeight,
              borderRadius: titleHeight,
              backgroundColor,
              opacity,
            },
          ]}
        />

        <Animated.View
          style={[
            {
              width: '50%',
              height: titleHeight,
              borderRadius,
              backgroundColor,
              opacity,
            },
          ]}
        />
      </View>

      <Animated.View
        style={[
          {
            width: '72%',
            height,
            borderRadius,
            backgroundColor,
            opacity,
          },
        ]}
      />

      <Animated.View
        style={[
          {
            width: '85%',
            height,
            borderRadius,
            backgroundColor,
            opacity,
          },
        ]}
      />
      <Animated.View
        style={[
          {
            width: '74%',
            height,
            borderRadius,
            backgroundColor,
            opacity,
          },
        ]}
      />
      <Animated.View
        style={[
          {
            width: '70%',
            height,
            borderRadius,
            backgroundColor,
            opacity,
          },
        ]}
      />
    </View>
  );
};
