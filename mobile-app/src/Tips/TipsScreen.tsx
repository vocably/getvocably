import { useNavigation } from '@react-navigation/native';
import { isGoogleLanguage } from '@vocably/model';
import { languageToLexicalaLanguage } from '@vocably/model-operations';
import { usePostHog } from 'posthog-react-native';
import { FC, useContext } from 'react';
import { Linking, Platform, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { useTranslationPreset } from '../TranslationPreset/useTranslationPreset';
import { CustomScrollView } from '../ui/CustomScrollView';
import { CustomSurface } from '../ui/CustomSurface';
import { ListItem } from '../ui/ListItem';

type Props = {};

export const TipsScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const posthog = usePostHog();

  const translationPreset = useTranslationPreset();

  const { languages } = useContext(LanguagesContext);

  const isExportAvailable = languages.some(
    (lng) => isGoogleLanguage(lng) && languageToLexicalaLanguage(lng) === null
  );

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
          title="Edit cards"
          onPress={() => {
            navigation.navigate('HowToEditCards');
            posthog.capture('tip-edit-card-clicked');
          }}
          leftIcon="pencil-outline"
          rightIcon="menu-right"
        ></ListItem>
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="middle"
          title="Group cards (in folders)"
          onPress={() => {
            navigation.navigate('HowToGroupCards');
            posthog.capture('tip-group-cards-clicked');
          }}
          leftIcon="folder-outline"
          rightIcon="menu-right"
        ></ListItem>
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="middle"
          title={isExportAvailable ? 'Import and export' : 'Import from CSV'}
          onPress={() => {
            navigation.navigate('HowToImportAndExport');
            posthog.capture('tip-import-export-clicked');
          }}
          leftIcon={
            isExportAvailable ? 'swap-vertical' : 'file-delimited-outline'
          }
          rightIcon="menu-right"
        ></ListItem>
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="last"
          title="Study plan"
          onPress={() => {
            navigation.navigate('HowToViewStudyStatistics');
            posthog.capture('tip-view-stats-clicked');
          }}
          leftIcon="chart-box-outline"
          rightIcon="menu-right"
        ></ListItem>
      </CustomSurface>

      <CustomSurface style={{ marginBottom: 32 }}>
        {Platform.OS === 'android' && (
          <ListItem
            order="first"
            title="How to translate any selected text in any app on your mobile."
            onPress={() => {
              posthog.capture('tip-android-translate-clicked');
              Linking.openURL(
                `https://app.vocably.pro/page/android-translate/${languagePreset}`
              );
            }}
            leftIcon="android"
            rightIcon="menu-right"
          ></ListItem>
        )}
        {Platform.OS === 'ios' && (
          <ListItem
            order="first"
            title="Translate any word on any website with Vocably iOS Safari Extension."
            onPress={() => {
              {
                posthog.capture('tip-ios-translate-clicked');
                Linking.openURL(
                  `https://app.vocably.pro/page/ios-extension/${languagePreset}`
                );
              }
            }}
            leftIcon="apple-safari"
            rightIcon="menu-right"
          ></ListItem>
        )}
        <Divider style={{ alignSelf: 'stretch' }} />
        <ListItem
          order="last"
          leftIcon="laptop"
          title="Are you using Chrome or Safari on your computer? Try the Vocably extension."
          onPress={() => {
            posthog.capture('tip-desktop-extension-clicked');
            Linking.openURL(`https://vocably.pro`);
          }}
        ></ListItem>
      </CustomSurface>

      <CustomSurface style={{ marginBottom: 8 }}>
        <ListItem
          leftIcon="message-text-outline"
          title="Provide feedback"
          onPress={() => {
            posthog.capture('tip-feedback-clicked');
            navigation.navigate('Feedback');
          }}
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
