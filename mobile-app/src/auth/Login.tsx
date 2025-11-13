import { signInWithRedirect } from 'aws-amplify/auth';
import React, { FC, ReactNode, useContext } from 'react';
import {
  Linking,
  Platform,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { Loader } from '../loaders/Loader';
import { AuthContext } from './AuthContainer';
import { getCards } from './getCards';

const signIn = () => signInWithRedirect();

const signInWithAnIdioticCognitoFlow = async () => {
  await signInWithRedirect({
    provider: 'Google',
    options: {
      preferPrivateSession: true,
    },
  });
};

export const Login: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const authStatus = useContext(AuthContext);
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  if (authStatus.status === 'undefined') {
    return <Loader>Authenticating...</Loader>;
  }

  if (authStatus.status === 'logged-in') {
    return <>{children}</>;
  }

  const sliderHeight = 260;

  const paddingLeft = 24 + insets.left;
  const paddingRight = 24 + insets.right;

  const cards = getCards();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <View style={{ height: sliderHeight }}>
        <Swiper
          loop={false}
          showsPagination={true}
          paginationStyle={{
            bottom: 12,
          }}
        >
          {cards.map((card, index) => (
            <View
              style={{
                backgroundColor: theme.colors.elevation.level3,
                borderRadius: 24,
                flex: 1,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: paddingLeft,
                marginRight: paddingRight,
              }}
              key={index}
            >
              <Markdown
                style={{
                  body: { color: theme.colors.onSurface, fontSize: 18 },
                  hr: {
                    backgroundColor: theme.colors.onSurface,
                  },
                }}
              >
                {card}
              </Markdown>
            </View>
          ))}
        </Swiper>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          paddingLeft: paddingLeft + 12,
          paddingRight: paddingRight + 12,
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          Vocably keeps your cards in the cloud. You need an account for that.
        </Text>
        <Button
          mode="contained"
          onPress={signIn}
          style={{ alignSelf: 'stretch' }}
        >
          Sign in or Create an account
        </Button>
        <Text style={{ textAlign: 'center' }}>
          By signing in, you agree to our{' '}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() =>
              Linking.openURL('https://vocably.pro/terms-and-conditions.html')
            }
          >
            Terms and Conditions
          </Text>{' '}
          and{' '}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() =>
              Linking.openURL('https://vocably.pro/privacy-policy.html')
            }
          >
            Privacy Policy
          </Text>
          .
        </Text>
        {Platform.OS === 'ios' && (
          <Text
            onPress={() => signInWithAnIdioticCognitoFlow()}
            style={{
              color: theme.colors.primary,
            }}
          >
            I want to sign in with another Google Account.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
