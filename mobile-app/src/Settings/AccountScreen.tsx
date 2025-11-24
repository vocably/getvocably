import { deleteUser, signOut } from '@aws-amplify/auth';
import { FC, useCallback, useContext } from 'react';
import { Alert, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUserEmail } from '../auth/useUserEmail';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { CustomScrollView } from '../ui/CustomScrollView';
import { CustomSurface } from '../ui/CustomSurface';
import { ListItem } from '../ui/ListItem';

type Props = {};

export const AccountScreen: FC<Props> = () => {
  const theme = useTheme();
  const userEmail = useUserEmail();
  const { syncDecks } = useContext(LanguagesContext);

  const onSignOut = async () => {
    await syncDecks();
    await signOut();
  };

  const onDelete = useCallback(() => {
    Alert.alert('Delete your account?', 'This operation cannot be undone.', [
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteUser();
          await signOut();
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  }, []);

  return (
    <CustomScrollView>
      <View
        style={{
          marginBottom: 32,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginLeft: 8,
        }}
      >
        <Icon
          name="account-circle-outline"
          color={theme.colors.onBackground}
          size={24}
        />
        <Text style={{ fontSize: 16 }}>{userEmail}</Text>
      </View>

      <CustomSurface style={{ marginBottom: 16 }}>
        <ListItem title="Sign out" onPress={onSignOut} leftIcon="logout" />
      </CustomSurface>

      <CustomSurface style={{ marginBottom: 16 }}>
        <ListItem
          title="Delete your account"
          onPress={onDelete}
          color={theme.colors.error}
          leftIcon="trash-can-outline"
        ></ListItem>
      </CustomSurface>
    </CustomScrollView>
  );
};
