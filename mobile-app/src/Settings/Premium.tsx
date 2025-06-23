import { FC, useState } from 'react';
import { Linking, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { CustomerInfo } from 'react-native-purchases';

type Props = {
  customerInfo: CustomerInfo;
  isRefreshing?: boolean;
  onRefresh?: () => void;
};

export const Premium: FC<Props> = ({
  customerInfo,
  isRefreshing = false,
  onRefresh = () => null,
}) => {
  const theme = useTheme();

  const premium = customerInfo.entitlements.active['premium'];

  const [showRefresh, setShowRefresh] = useState(false);

  const expirationDate = new Date(
    premium.expirationDate ?? ''
  ).toLocaleDateString();

  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 16, color: theme.colors.secondary }}>
        Premium
      </Text>
      {premium.willRenew && <Text>Next payment: {expirationDate}</Text>}
      {!premium.willRenew && <Text>Valid until: {expirationDate}</Text>}
      {premium.willRenew && customerInfo.managementURL && (
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() => {
            Linking.openURL(customerInfo.managementURL ?? '');
            setTimeout(() => setShowRefresh(true), 200);
          }}
        >
          Manage your subscription
        </Text>
      )}

      {showRefresh && (
        <>
          <Text>
            It takes a couple of minutes for your changes to reflect in the app.
          </Text>

          <Button
            icon={'refresh'}
            mode="outlined"
            loading={isRefreshing}
            onPress={() => onRefresh()}
            style={{
              alignSelf: 'flex-start',
              marginTop: 8,
            }}
          >
            Refresh
          </Button>
        </>
      )}
    </View>
  );
};
