import { CardItem } from '@vocably/model';
import { FC, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { presentPaywall } from '../presentPaywall';
import { mainPadding } from '../styles';

type Props = {
  leftInset: number;
  rightInset: number;
  cards: CardItem[];
  maxCards: number | 'unlimited';
};

export const AddLimitationMessage: FC<Props> = ({
  cards,
  maxCards,
  leftInset,
  rightInset,
}) => {
  const maxHeight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(maxHeight, {
      toValue: 300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  if (maxCards === 'unlimited') {
    return <></>;
  }

  return (
    <Animated.View
      style={{
        overflow: 'hidden',
        maxHeight,
      }}
    >
      <View
        style={{
          paddingLeft: leftInset + mainPadding,
          // Align ⊕ button with the 🔎
          paddingRight: rightInset + 16,
          paddingTop: 24,
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Text>
          Your collection has
          {cards.length > maxCards ? ' more  than' : ''} {maxCards} cards. You
          can save one card per day.
        </Text>
        <Button mode="contained" onPress={() => presentPaywall()}>
          Upgrade for unlimited cards
        </Button>
      </View>
    </Animated.View>
  );
};
