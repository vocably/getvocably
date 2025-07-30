import { GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = (): GoogleLanguage | undefined => {
  const deviceLocale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLanguages[0] ||
        NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  const deviceLanguage = deviceLocale.substring(0, 2);

  if (isGoogleLanguage(deviceLanguage)) {
    return deviceLanguage;
  }

  return undefined;
};
