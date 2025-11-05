import { useColorScheme as useColorSchemeRn } from 'react-native';

export type ColorScheme = 'dark' | 'light';

export const useColorScheme = (): ColorScheme => {
  const colorScheme = useColorSchemeRn();
  return colorScheme === 'dark' ? 'dark' : 'light';
};
