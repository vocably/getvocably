import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomScrollView } from '../ui/CustomScrollView';

type Props = {};

export const HowToViewStudyStatisticsScreen: FC<Props> = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <CustomScrollView>
      <View style={{ gap: 8, marginBottom: 32, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18 }}>
          The <Text style={{ fontWeight: 'bold' }}>Study Plan</Text> provides an
          overview of the cards scheduled for today, upcoming days, and those
          that have expired and need review. This helps you stay on track, catch
          up on overdue cards, and approach your learning more strategically.
        </Text>

        <Text style={{ fontSize: 18 }}>
          To view your study plan, go to the{' '}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Icon name={'card-multiple-outline'} size={24} />
            {'\u00A0'}My{'\u00A0'}cards
          </Text>{' '}
          tab and tap the <Icon name={'chart-box-outline'} size={24} /> button
          in the top-left corner.
        </Text>

        <Text style={{ fontSize: 18 }}>
          <Text style={{ fontWeight: 'bold' }}>Important:</Text> the study plan
          is not available when cards for study are selected randomly. To
          disable the random card selection, go to{' '}
          <Text
            onPress={() => navigation.navigate('StudySettings')}
            style={{ color: theme.colors.primary }}
          >
            <Icon name={'school-outline'} size={24} />
            {'\u00A0'}Study{'\u00A0'}settings
          </Text>
          .
        </Text>
      </View>
    </CustomScrollView>
  );
};
