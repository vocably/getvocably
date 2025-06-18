import { useNavigation } from '@react-navigation/native';
import { usePostHog } from 'posthog-react-native';
import { FC, useContext } from 'react';
import { Linking, View } from 'react-native';
import { Appbar, Button, Text, useTheme } from 'react-native-paper';
import {
  mobilePlatform,
  mobileStoreName,
  mobileStoreUrl,
} from './mobilePlatform';
import { CustomScrollView } from './ui/CustomScrollView';
import { UserMetadataContext } from './UserMetadataContainer';

type Props = {};

export const PaymentSuccessModal: FC<Props> = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const posthog = usePostHog();

  const { updateUserMetadata } = useContext(UserMetadataContext);

  const rateClick = () => {
    updateUserMetadata({
      rate: {
        [mobilePlatform]: {
          response: 'review',
          isoDate: new Date().toISOString(),
        },
      },
    });

    Linking.openURL(mobileStoreUrl).then();

    posthog.capture('mobilePaymentSuccessRate');
  };

  return (
    <>
      <Appbar.Header
        statusBarHeight={0}
        elevated={true}
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.Content title="" />
        <Appbar.Action
          icon={'close'}
          size={24}
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: 'transparent' }}
        />
      </Appbar.Header>
      <CustomScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <View>
          <Text variant="headlineMedium" style={{ textAlign: 'center' }}>
            Thank you for purchasing Vocably Premium.
          </Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>Do you like Vocably?</Text>
        </View>
        <View style={{ alignSelf: 'stretch' }}>
          <Button mode={'contained'} onPress={rateClick}>
            Rate it on {mobileStoreName}
          </Button>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            If you are missing or don't like something, you can always{' '}
            <Text
              style={{ color: theme.colors.primary }}
              onPress={() => navigation.navigate('Feedback')}
            >
              let me know
            </Text>
            . I take every feedback seriously.
          </Text>
        </View>
      </CustomScrollView>
    </>
  );
};
