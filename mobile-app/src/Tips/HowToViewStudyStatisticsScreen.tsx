import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomScrollView } from '../ui/CustomScrollView';
import { ScreenTitle } from '../ui/ScreenTitle';

type Props = {};

export const HowToViewStudyStatisticsScreen: FC<Props> = () => {
  return (
    <CustomScrollView>
      <ScreenTitle
        icon="chart-box-outline"
        title="How to view study statistics"
      />

      <View style={{ gap: 8, marginBottom: 32, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18 }}>
          <Text style={{ fontWeight: 'bold' }}>Study Statistics</Text> (
          <Text style={{ fontWeight: 'bold' }}>Study Plan</Text>) gives you a
          detailed overview of your learning progress. You can see which cards
          are scheduled for today, which are planned for upcoming days, and
          which have expired and need review. This helps you stay on track,
          catch up on overdue cards, and approach your learning more
          strategically.
        </Text>

        <Text style={{ fontSize: 18 }}>
          To view your study statistics, go to the{' '}
          <Text style={{ fontWeight: 'bold' }}>My cards</Text> tab and tap the{' '}
          <Icon name={'chart-box-outline'} size={24} /> button in the top-left
          corner.
        </Text>
      </View>
    </CustomScrollView>
  );
};
