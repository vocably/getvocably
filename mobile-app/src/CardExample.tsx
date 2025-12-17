import { explode, extractTranslation } from '@vocably/sulna';
import React, { FC, useContext } from 'react';
import { Pressable, StyleProp } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { maskTheWord } from './maskTheWord';
import { TranslationModalContext } from './TranslationModalContainer';

type Props = {
  example: string;
  textStyle?: StyleProp<Text>;
  mask?: {
    text: string;
    language: string;
  };
};

export const CardExample: FC<Props> = ({ example, textStyle, mask }) => {
  const theme = useTheme();
  const { showTranslation } = useContext(TranslationModalContext);
  let examples = explode(example).map(extractTranslation);

  if (mask) {
    examples = examples.map(([example, translation]) => [
      maskTheWord(mask.text, mask.language)(example).value,
      translation,
    ]);
  }

  const bul = examples.length === 1 ? '' : '\u2022 ';

  return (
    <>
      {examples.map(([example, translation], index) => (
        <Text key={index} style={textStyle}>
          {`${bul}${example}`}
          {translation && (
            <>
              {' '}
              <Pressable
                hitSlop={4}
                onPress={() => showTranslation(example, translation)}
                style={{
                  transform: [{ translateY: 2 }],
                }}
              >
                <Icon
                  name="translate"
                  color={theme.colors.tertiary}
                  style={{
                    fontSize: 14,
                  }}
                />
              </Pressable>
            </>
          )}
        </Text>
      ))}
    </>
  );
};
