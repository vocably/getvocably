import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen } from './DashboardScreen';
import { NotificationsScreen } from './DeckStack/NotificationsScreen';
import { EditDeckScreen } from './EditDeckScreen';
import { Header } from './Header';
import { useCurrentLanguageName } from './useCurrentLanguageName';

const Stack = createStackNavigator();

export const DeckStack = () => {
  const languageName = useCurrentLanguageName();
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        options={{ title: languageName, headerShown: false }}
        component={DashboardScreen}
      />
      <Stack.Screen
        name="EditDeck"
        options={{ title: `Edit ${languageName} deck` }}
        component={EditDeckScreen}
      />
      <Stack.Screen
        name="Notifications"
        options={{ title: `Study reminders for ${languageName}` }}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};
