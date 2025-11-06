import { NavigationProp, Route } from '@react-navigation/native';
import { FC } from 'react';
import { View } from 'react-native';
import { Appbar, Text, useTheme } from 'react-native-paper';
import { CustomScrollView } from './ui/CustomScrollView';
import { ScreenLayout } from './ui/ScreenLayout';

type Props = {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
};

export const LoginModal: FC<Props> = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <ScreenLayout
      header={
        <Appbar.Header elevated={true} statusBarHeight={0}>
          <View>{/*This is needed to move title to the left*/}</View>
          <Appbar.Content
            style={{
              alignItems: 'flex-start',
              marginLeft: 18,
            }}
            title={'Your account'}
          />
          <Appbar.Action
            icon={'close'}
            onPress={navigation.goBack}
            style={{ backgroundColor: 'transparent' }}
          />
        </Appbar.Header>
      }
      content={
        <CustomScrollView automaticallyAdjustKeyboardInsets={true}>
          <View style={{ gap: 16, marginBottom: 16 }}>
            <Text>Login</Text>
          </View>
        </CustomScrollView>
      }
    />
  );
};
