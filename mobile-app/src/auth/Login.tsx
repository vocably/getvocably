import { signInWithRedirect } from 'aws-amplify/auth';
import React, { FC, ReactNode, useContext } from 'react';
import { Linking, Platform, ScrollView, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader } from '../loaders/Loader';
import { AuthContext } from './AuthContext';

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

  if (authStatus.status === 'undefined') {
    return <Loader>Authenticating...</Loader>;
  }

  if (authStatus.status === 'logged-in') {
    return <>{children}</>;
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: insets.left + 24,
        paddingRight: insets.right + 24,
        gap: 12,
      }}
    >
      <Text variant="bodyLarge" style={{ textAlign: 'center' }}>
        Vocably helps to translate and save the translations as flashcards:
      </Text>
      <View style={{ gap: 4 }}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Text variant="bodyLarge">{'\u2022'}</Text>
          <Text variant="bodyLarge">
            On all your mobile devices (iOS and Android)
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Text variant="bodyLarge">{'\u2022'}</Text>
          <Text variant="bodyLarge">
            In desktop browsers (Chrome and Safari)
          </Text>
        </View>
      </View>
      <Text variant="bodyLarge" style={{ textAlign: 'center' }}>
        You need an account for that.
      </Text>
      <Button mode="contained" onPress={signIn}>
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
    </ScrollView>
  );
};
