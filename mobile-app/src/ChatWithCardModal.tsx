import { NavigationProp, Route } from '@react-navigation/native';
import { chatWithCard } from '@vocably/api';
import { CardItem, ChatWithCardMessage } from '@vocably/model';
import React, { FC, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Appbar, Surface } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatTextInput } from './ChatWithCards/ChatTextInput';
import { getInitialMessage } from './ChatWithCards/getInitialMessage';
import { Message } from './ChatWithCards/Message';
import { Thinking } from './ChatWithCards/Thinking';
import { mainPadding } from './styles';
import { ScreenLayout } from './ui/ScreenLayout';

export type ChatWithCardParams = {
  cardItem: CardItem;
};

type Props = {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
};

export const ChatWithCardModal: FC<Props> = ({ route, navigation }) => {
  const { cardItem } = route.params as ChatWithCardParams;
  const insets = useSafeAreaInsets();
  const scrollViewRef = useRef<ScrollView>(null);

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatWithCardMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [messages]);

  const send = async () => {
    const newMessages: ChatWithCardMessage[] = [
      ...messages,
      {
        timestamp: new Date().getTime(),
        role: 'user',
        message: inputValue,
      },
    ];
    setMessages(newMessages);
    setInputValue('');
    setIsThinking(true);
    const chatResult = await chatWithCard({
      card: cardItem.data,
      history: newMessages,
    });

    if (chatResult.success === true) {
      setMessages(chatResult.value.messages);
    }

    setIsThinking(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={30}
    >
      <ScreenLayout
        header={
          <Surface
            elevation={0}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: insets.left + mainPadding,
              paddingRight: insets.right + 8,
              paddingVertical: 6,
            }}
          >
            <Appbar.Content title="Chat with card" />
            <Appbar.Action
              icon={'close'}
              size={24}
              onPress={() => navigation.goBack()}
              style={{ backgroundColor: 'transparent' }}
            />
          </Surface>
        }
        content={
          <View
            style={{
              flex: 1,
              paddingLeft: insets.left + 16,
              paddingRight: insets.right + 16,
            }}
          >
            <ScrollView
              contentContainerStyle={{
                paddingTop: 16,
                flexGrow: 1,
                gap: 8,
              }}
              ref={scrollViewRef}
            >
              <Message
                direction="fromAi"
                message={getInitialMessage(cardItem.data)}
              />
              {messages.map((message) => (
                <Message
                  key={message.timestamp}
                  message={message.message}
                  direction={message.role === 'assistant' ? 'fromAi' : 'toAi'}
                />
              ))}
              {isThinking && <Thinking />}
            </ScrollView>
            <View
              style={{
                paddingVertical: 8,
              }}
            >
              <ChatTextInput
                disabled={isThinking}
                value={inputValue}
                placeholder={
                  isThinking
                    ? 'This input is disabled now'
                    : 'Type your message here...'
                }
                multiline={true}
                onChange={setInputValue}
                onSubmit={send}
              />
            </View>
          </View>
        }
      />
    </KeyboardAvoidingView>
  );
};
