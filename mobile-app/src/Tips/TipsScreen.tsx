import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Linking, Platform, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslationPreset } from '../TranslationPreset/useTranslationPreset';
import { CustomScrollView } from '../ui/CustomScrollView';
import { CustomSurface } from '../ui/CustomSurface';
import { ListItem } from '../ui/ListItem';

type Props = {};

export const TipsScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const translationPreset = useTranslationPreset();

  if (translationPreset.status !== 'known') {
    return <></>;
  }

  let languagePreset = '';

  if (
    translationPreset.preset.sourceLanguage &&
    translationPreset.preset.translationLanguage
  ) {
    languagePreset =
      translationPreset.preset.sourceLanguage +
      '/' +
      translationPreset.preset.translationLanguage;
  } else if (translationPreset.preset.sourceLanguage) {
    languagePreset = translationPreset.preset.sourceLanguage;
  }

  return (
    <CustomScrollView
      contentContainerStyle={{
        paddingTop: insets.top + 32,
      }}
    >
      <CustomSurface style={{ marginBottom: 32 }}>
        <ListItem
          order="first"
          title="How to edit cards"
          onPress={() => navigation.navigate('HowToEditCards')}
          leftIcon="pencil-outline"
          rightIcon="menu-right"
        ></ListItem>
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="middle"
          title="How to group cards"
          onPress={() => navigation.navigate('HowToGroupCards')}
          leftIcon="group"
          rightIcon="menu-right"
        ></ListItem>
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="last"
          title="How to import and export"
          onPress={() => navigation.navigate('HowToImportAndExport')}
          leftIcon="swap-vertical"
          rightIcon="menu-right"
        ></ListItem>
      </CustomSurface>

      {Platform.OS === 'android' && (
        <CustomSurface style={{ marginBottom: 32 }}>
          <ListItem
            title="See a new word in any app? Select and translate it with Vocably"
            onPress={() =>
              Linking.openURL(
                `https://app.vocably.pro/page/android-translate/${languagePreset}`
              )
            }
            leftIcon="android"
            rightIcon="menu-right"
          ></ListItem>
        </CustomSurface>
      )}

      {Platform.OS === 'ios' && (
        <CustomSurface style={{ marginBottom: 32 }}>
          <ListItem
            title="See a new word on any website? Translate it with iOS Safari Extension"
            onPress={() =>
              Linking.openURL(
                `https://app.vocably.pro/page/ios-extension/${languagePreset}`
              )
            }
            leftIcon="apple-safari"
            rightIcon="menu-right"
          ></ListItem>
        </CustomSurface>
      )}

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
