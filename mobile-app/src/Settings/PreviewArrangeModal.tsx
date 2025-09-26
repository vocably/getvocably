import { NavigationProp, Route } from '@react-navigation/native';
import { CardItem } from '@vocably/model';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrangeByLetters } from '../study/ArrangeByLetters';
import { ScreenLayout } from '../ui/ScreenLayout';

type PreviewParams = {
  card: CardItem;
};

type Props = {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
};

export const PreviewArrangeModal: FC<Props> = ({ route, navigation }) => {
  const { card } = route.params as PreviewParams;
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const onGrade = () => {
    navigation.goBack();
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
          <View style={{ paddingLeft: 8 }}>
            <Text style={{ fontSize: 20 }}>This is a preview</Text>
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
          <ArrangeByLetters card={card} onGrade={onGrade} />
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
