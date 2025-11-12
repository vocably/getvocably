import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, IconButton, Text, useTheme } from 'react-native-paper';
import { clearAll } from '../asyncAppStorage';
import { loadTransformationsFromStorage } from '../languages/useLanguageTransformations';
import { CustomSurface } from '../ui/CustomSurface';

type Props = {};

export const DebugMenu: FC<Props> = () => {
  const [transformations, setTransformations] = useState<any>(false);

  useEffect(() => {
    loadTransformationsFromStorage().then(setTransformations);
  }, []);

  const theme = useTheme();
  return (
    <CustomSurface
      style={{
        justifyContent: 'center',
        gap: 12,
        width: '100%',
        padding: 24,
        marginTop: 32,
      }}
    >
      <Text style={{ fontSize: 24 }}>Debug Menu</Text>
      {transformations && (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontSize: 18 }}>Language Transformations</Text>
            <IconButton
              size={14}
              icon={'reload'}
              onPress={() =>
                loadTransformationsFromStorage().then(setTransformations)
              }
            />
          </View>
          <Text selectable={true}>
            {JSON.stringify(transformations, null, 4)}
          </Text>
        </>
      )}
      <Button
        mode="outlined"
        textColor={theme.colors.error}
        style={{ borderColor: theme.colors.error }}
        onPress={() => clearAll()}
      >
        Clear storage data
      </Button>
    </CustomSurface>
  );
};
