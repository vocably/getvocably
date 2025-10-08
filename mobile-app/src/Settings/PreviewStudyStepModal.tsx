import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ArrangeByLetters } from '../study/ArrangeByLetters';
import { Card } from '../study/Card';
import { ImmediateStep } from '../study/craftTheStrategy';
import { MultiChoice } from '../study/MultiChoice';
import { SwipeGrade } from '../study/SwipeGrade';
import { ScreenLayout } from '../ui/ScreenLayout';

type PreviewParams = {
  card: CardItem;
  step: ImmediateStep;
};

type Props = {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
};

export const PreviewStudyStepModal: FC<Props> = ({ route, navigation }) => {
  const { card, step } = route.params as PreviewParams;
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const onGrade = () => {
    setTimeout(
      () => navigation.goBack(),
      ['ab', 'mf', 'mb'].includes(step.step) ? 100 : 0
    );
  };

  return (
    <ScreenLayout
      header={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: insets.left + 8,
            paddingRight: insets.right + 8,
            paddingVertical: 16,
          }}
        >
          <View
            style={{
              paddingLeft: 8,
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <Icon
              name="eye-outline"
              color={theme.colors.onBackground}
              size={16}
            />
            <Text style={{ fontSize: 16 }}>Preview mode</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Button
              textColor={theme.colors.onBackground}
              onPress={() => navigation.goBack()}
              buttonColor={theme.colors.background}
            >
              Done
            </Button>
          </View>
        </View>
      }
      content={
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {step.step === 'sf' && (
            <SwipeGrade onGrade={onGrade}>
              <Card autoPlay={false} card={card} direction="front" />
            </SwipeGrade>
          )}
          {step.step === 'sb' && (
            <SwipeGrade onGrade={onGrade}>
              <Card autoPlay={false} card={card} direction="back" />
            </SwipeGrade>
          )}
          {step.step === 'ab' && (
            <ArrangeByLetters card={card} onGrade={onGrade} />
          )}
          {step.step === 'mf' && (
            <MultiChoice
              autoPlay={false}
              card={card}
              onGrade={onGrade}
              alternatives={step.multiChoice}
              direction="front"
            />
          )}
          {step.step === 'mb' && (
            <MultiChoice
              autoPlay={false}
              card={card}
              onGrade={onGrade}
              alternatives={step.multiChoice}
              direction="back"
            />
          )}
        </View>
      }
      footer={
        <View
          style={{
            paddingBottom: insets.bottom + 16,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              padding: 8,
              backgroundColor: theme.colors.background,
              borderRadius: 16,
            }}
          >
            <Text>
              <Text style={{ color: theme.colors.secondary }}>1</Text>
              {' / '}1
            </Text>
          </View>
        </View>
      }
    />
  );
};
