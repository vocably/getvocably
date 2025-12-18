import { explode } from '@vocably/sulna';
import React, { FC } from 'react';
import { StyleProp } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { maskTheWord } from './maskTheWord';

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
  let examples = explode(example);

  if (mask) {
    examples = examples.map(
      (text) => maskTheWord(mask.text, mask.language)(text).value
    );
  }

  const bul = examples.length === 1 ? '' : '\u2022 ';

  return (
    <>
      {examples.map((text, index) => (
        <Text key={index} style={textStyle}>
          {`${bul}${text}`}
        </Text>
      ))}
    </>
  );
};
