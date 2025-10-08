import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { ChatWithCardModal } from './ChatWithCard/ChatWithCardModal';
import { EditCardScreen } from './EditCardScreen';
import { FeedbackModal } from './FeedbackModal';
import { LanguageSelectorModal } from './LanguageSelectorModal';
import { PaymentSuccessModal } from './PaymentSuccessModal';
import { PreviewStudyStepModal } from './Settings/PreviewStudyStepModal';
import { StudyScreen } from './study/StudyScreen';
import { TabsNavigator } from './TabsNavigator';
import { WelcomeScreen } from './Welcome/WelcomeScreen';

const Stack = createStackNavigator();

export const RootModalStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            presentation: 'transparentModal',
            headerShown: false,
            gestureEnabled: false,
            cardStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
        <Stack.Screen name="Study" component={StudyScreen} />
        <Stack.Screen name="EditCardModal" component={EditCardScreen} />
        <Stack.Screen name="ChatWithCardModal" component={ChatWithCardModal} />
        <Stack.Screen
          name="PaymentSuccessModal"
          component={PaymentSuccessModal}
        />
        <Stack.Screen
          name="LanguageSelector"
          component={LanguageSelectorModal}
        />
        <Stack.Screen
          name={'Feedback'}
          component={FeedbackModal}
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
          name="PreviewStudyStepModal"
          component={PreviewStudyStepModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
