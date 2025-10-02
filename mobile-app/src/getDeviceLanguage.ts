import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import * as RNLocalize from 'react-native-localize';

export const getDeviceLanguage = (): GoogleLanguage | undefined => {
  const [first] = RNLocalize.getLocales();
  const deviceLocale = first?.languageTag ?? 'en-US';

  const deviceLanguage = deviceLocale.substring(0, 2);

  if (isGoogleLanguage(deviceLanguage)) {
    return deviceLanguage;
  }

  return undefined;
};
