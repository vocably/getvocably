import { CardItem } from '@vocably/model';
import { FC, useState } from 'react';
import { Linking, View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { presentPaywall } from '../presentPaywall';
import { mainPadding } from '../styles';

type Props = {
  leftInset: number;
  rightInset: number;
  cards: CardItem[];
  maxCards: number | 'unlimited';
  isSharedLookup: boolean;
};

export const AddLimitationMessage: FC<Props> = ({
  cards,
  maxCards,
  leftInset,
  rightInset,
  isSharedLookup,
}) => {
  const [upgradeDialogVisible, setUpgradeDialogVisibility] = useState(false);

  if (maxCards === 'unlimited') {
    return <></>;
  }

  const upgradeClick = async () => {
    if (!isSharedLookup) {
      await presentPaywall();
      return;
    }

    if (await Linking.canOpenURL('vocably-pro://upgrade')) {
      await Linking.openURL('vocably-pro://upgrade');
      return;
    }

    setUpgradeDialogVisibility(true);
  };

  return (
    <>
      <Portal>
        <Dialog visible={upgradeDialogVisible}>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Open Vocably {'->'} Settings to upgrade.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setUpgradeDialogVisibility(false)}>
              Okay
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View
        style={{
          paddingLeft: leftInset + mainPadding,
          // Align ⊕ button with the 🔎
          paddingRight: rightInset + 16,
          paddingTop: 24,
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Text>
          Your collection has
          {cards.length > maxCards ? ' more  than' : ''} {maxCards} cards. You
          can save one card per day.
        </Text>
        <Button mode="contained" onPress={upgradeClick}>
          Upgrade for unlimited cards
        </Button>
      </View>
    </>
  );
};
