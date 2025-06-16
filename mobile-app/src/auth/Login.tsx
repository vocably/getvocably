import { signInWithRedirect } from 'aws-amplify/auth';
import React, { FC, ReactNode, useContext } from 'react';
import { Linking, Platform, ScrollView } from 'react-native';
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
        paddingLeft: insets.left + 16,
        paddingRight: insets.right + 16,
        gap: 18,
      }}
    >
      <Text variant="headlineSmall" style={{ textAlign: 'center' }}>
        Vocably - a language-learning ecosystem available in desktop browsers
        and mobile devices.
      </Text>
      <Text variant="bodyLarge">Sign in to try the Vocably for free.</Text>
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
