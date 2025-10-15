import { useNavigation } from '@react-navigation/native';
import { languageList } from '@vocably/model';
import { languageToLexicalaLanguage } from '@vocably/model-operations';
import { get } from 'lodash-es';
import { FC, useContext } from 'react';
import { Linking, View } from 'react-native';
import { Text } from 'react-native-paper';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { CustomScrollView } from '../ui/CustomScrollView';
import { CustomSurface } from '../ui/CustomSurface';
import { ListItem } from '../ui/ListItem';

type Props = {};

export const HowToImportAndExportScreen: FC<Props> = () => {
  const exportLanguages = useContext(LanguagesContext).languages.filter(
    (lng) => languageToLexicalaLanguage(lng) === null
  );

  const hasExportLanguages = exportLanguages.length > 0;

  const navigation = useNavigation();
  navigation.setOptions({
    title: hasExportLanguages ? 'Import and export' : 'Import from CSV',
  });

  return (
    <CustomScrollView>
      <View style={{ gap: 8, marginBottom: 32, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18 }}>
          Import{hasExportLanguages ? ' and Export' : ''} functionality is
          available in the Web App.
        </Text>
        <Text style={{ fontSize: 18 }}>
          Login with your account to proceed.
        </Text>
      </View>

      <CustomSurface style={{ marginBottom: 16 }}>
        <ListItem
          leftIcon="open-in-new"
          title="Import cards"
          onPress={() => Linking.openURL('https://app.vocably.pro/import')}
        />
      </CustomSurface>

      {exportLanguages.map((language) => (
        <CustomSurface>
          <ListItem
            key={language}
            leftIcon="open-in-new"
            title={`Export your ${get(languageList, language)} cards`}
            onPress={() =>
              Linking.openURL(
                `https://app.vocably.pro/deck/${language}/edit/export`
              )
            }
          />
        </CustomSurface>
      ))}
    </CustomScrollView>
  );
};
