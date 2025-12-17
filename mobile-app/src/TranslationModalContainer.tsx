import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import { Text } from 'react-native';
import { Divider, Modal, Portal, useTheme } from 'react-native-paper';

type Props = {};

export const TranslationModalContext = createContext<{
  showTranslation: (source: string, target: string) => void;
}>({
  showTranslation: () => {},
});

export const TranslationModalContainer: FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [source, setSource] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const theme = useTheme();

  const showTranslation = (source: string, target: string) => {
    setSource(source);
    setTarget(target);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <TranslationModalContext.Provider value={{ showTranslation }}>
      {children}
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 16,
            maxWidth: '80%',
            alignSelf: 'center',
          }}
        >
          <Text>{source}</Text>
          <Divider style={{ marginVertical: 8 }} />
          <Text>{target}</Text>
        </Modal>
      </Portal>
    </TranslationModalContext.Provider>
  );
};
