import { FC, PropsWithChildren, ReactElement } from 'react';
import {
  RefreshControlProps,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { mainPadding } from '../styles';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  automaticallyAdjustKeyboardInsets?: boolean;
  refreshControl?: ReactElement<RefreshControlProps> | undefined;
}>;

export const CustomScrollView: FC<Props> = ({
  style,
  contentContainerStyle,
  automaticallyAdjustKeyboardInsets,
  children,
  refreshControl,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={style}
      automaticallyAdjustKeyboardInsets={automaticallyAdjustKeyboardInsets}
      refreshControl={refreshControl}
      contentContainerStyle={[
        {
          paddingTop: mainPadding,
          paddingBottom: insets.bottom + mainPadding,
          paddingLeft: insets.left + mainPadding,
          paddingRight: insets.right + mainPadding,
        },
        contentContainerStyle,
      ]}
    >
      {children}
    </ScrollView>
  );
};
