import { FC } from 'react';
import { View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { useTheme } from 'react-native-paper';
import { fixMarkdown } from '../fixMarkdown';

type Props = {
  message: string;
  direction: 'fromAi' | 'toAi';
};

export const Message: FC<Props> = ({ message, direction }) => {
  const theme = useTheme();
  const markdownStyles = {
    body: {
      color:
        direction === 'fromAi'
          ? theme.colors.onSurface
          : theme.colors.onPrimary,
      fontSize: 16,
    },
    hr: {
      backgroundColor: theme.colors.onSurface,
    },
  };

  return (
    <View
      style={{
        alignSelf: direction === 'fromAi' ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:
          direction === 'fromAi'
            ? theme.colors.elevation.level5
            : theme.colors.primary,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      <Markdown style={markdownStyles}>{fixMarkdown(message)}</Markdown>
    </View>
  );
};
