import { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../Header';
import { HowToEditCardsScreen } from './HowToEditCardsScreen';
import { HowToGroupCardsScreen } from './HowToGroupCardsScreen';
import { HowToImportAndExportScreen } from './HowToImportAndExportScreen';
import { HowToViewStudyStatisticsScreen } from './HowToViewStudyStatisticsScreen';
import { TipsScreen } from './TipsScreen';

const Stack = createStackNavigator();

export const TipsStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        header: Header,
      }}
    >
      <Stack.Screen
        name="MainMenu"
        options={{
          headerShown: false,
        }}
        component={TipsScreen}
      />

      <Stack.Screen
        name="HowToEditCards"
        options={{ title: `Tips` }}
        component={HowToEditCardsScreen}
      />
      <Stack.Screen
        name="HowToGroupCards"
        options={{ title: `Tips` }}
        component={HowToGroupCardsScreen}
      />
      <Stack.Screen
        name="HowToImportAndExport"
        options={{ title: `Tips` }}
        component={HowToImportAndExportScreen}
      />
      <Stack.Screen
        name="HowToViewStudyStatistics"
        options={{ title: `Tips` }}
        component={HowToViewStudyStatisticsScreen}
      />
    </Stack.Navigator>
  );
};
