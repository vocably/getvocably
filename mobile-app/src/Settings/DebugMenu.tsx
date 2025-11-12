import { FC } from 'react';
import { Button, Text, useTheme } from 'react-native-paper';
import { clearAll } from '../asyncAppStorage';
import { loadTransformationsFromStorage } from '../languages/useLanguageTransformations';
import { CustomSurface } from '../ui/CustomSurface';
import { useAsync } from '../useAsync';

type Props = {};

export const DebugMenu: FC<Props> = () => {
  const [transformations] = useAsync(loadTransformationsFromStorage);
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
      {transformations.status === 'loaded' && (
        <>
          <Text style={{ fontSize: 18 }}>Language Transformations</Text>
          <Text selectable={true}>
            {JSON.stringify(transformations.value, null, 4)}
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
