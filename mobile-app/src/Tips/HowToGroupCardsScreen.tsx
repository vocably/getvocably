import { FC } from 'react';
import { View } from 'react-native';
import { HowToGroupCards } from '../HowToGroupCards';
import { CustomScrollView } from '../ui/CustomScrollView';

type Props = {};

export const HowToGroupCardsScreen: FC<Props> = () => {
  return (
    <CustomScrollView>
      <View style={{ paddingHorizontal: 16 }}>
        <HowToGroupCards />
      </View>
    </CustomScrollView>
  );
};
