import { Card } from '@vocably/model';
import { explode, extractTranslation } from '@vocably/sulna';
import React, { FC, useContext } from 'react';
import { Pressable, StyleProp } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { maskTheWord } from './maskTheWord';
import { TranslationModalContext } from './TranslationModalContainer';

type Props = {
  card: Card;
  textStyle?: StyleProp<Text>;
  maskSource?: boolean;
};

export const CardDefinition: FC<Props> = ({
  card,
  textStyle,
  maskSource = false,
}) => {
  const theme = useTheme();

  const { showTranslation } = useContext(TranslationModalContext);

  let definitions = explode(card.definition)
    .map(extractTranslation)
    .map(([text, translation]) => ({
      text,
      translation,
      style: {},
    }));

  if (maskSource) {
    definitions = definitions
      .filter(
        (definition) =>
          !(definition.text.includes('[') && definition.text.includes(']'))
      )
      .map((definition) => {
        return {
          ...definition,
          text: maskTheWord(card.source, card.language)(definition.text).value,
        };
      });
  }

  if (card.translation) {
    definitions.unshift({
      text: card.translation,
      translation: '',
      style: {
        color: theme.colors.secondary,
      },
    });
  }

  return (
    <>
      {definitions.map((item, index) => (
        <Text key={index} style={textStyle}>
          <Text style={item.style}>{`\u2022 ${item.text}`}</Text>
          {item.translation && (
            <>
              {' '}
              <Pressable
                hitSlop={4}
                onPress={() => showTranslation(item.text, item.translation)}
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
