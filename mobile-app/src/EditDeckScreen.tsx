import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeleteDeckButton } from './DeleteDeckButton';
import { useSelectedDeck } from './languageDeck/useSelectedDeck';
import { CustomScrollView } from './ui/CustomScrollView';
import { CustomSurface } from './ui/CustomSurface';
import { ListItem } from './ui/ListItem';
import { useCurrentLanguageName } from './useCurrentLanguageName';

type Props = {
  navigation: NavigationProp<any>;
};

export const EditDeckScreen: FC<Props> = ({ navigation }) => {
  const languageName = useCurrentLanguageName();
  const deck = useSelectedDeck({ autoReload: false });
  const theme = useTheme();

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
          name="card-multiple-outline"
          color={theme.colors.onBackground}
          size={24}
        />
        <Text style={{ fontSize: 16 }}>
          The deck contains {deck.deck.cards.length} card
          {deck.deck.cards.length === 1 ? '' : 's'}
        </Text>
      </View>

      <CustomSurface style={{ marginBottom: 8 }}>
        <ListItem
          title="Study reminders"
          onPress={() => navigation.navigate('Notifications')}
          leftIcon="bell-outline"
          rightIcon="menu-right"
        ></ListItem>
      </CustomSurface>
      <View style={{ paddingHorizontal: 16, marginBottom: 32, gap: 8 }}>
        <Text>
          Study reminders are sent once a day to remind you to review your{' '}
          <Text style={{ fontWeight: 'bold' }}>{languageName}</Text> cards.
        </Text>
      </View>

      <CustomSurface style={{ marginBottom: 32 }}>
        <DeleteDeckButton />
      </CustomSurface>

      <CustomSurface style={{ marginBottom: 8 }}>
        <ListItem
          leftIcon="message-text-outline"
          title="Provide feedback"
          onPress={() => navigation.navigate('Feedback')}
        />
      </CustomSurface>
      <View style={{ paddingHorizontal: 16 }}>
        <Text>
          Are you missing any crucial feature or simply want to share your
          opinion about Vocably with me? I would love to hear from you!
        </Text>
      </View>
    </CustomScrollView>
  );
};
