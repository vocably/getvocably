import { useNavigation } from '@react-navigation/native';
import { CardItem, StudyFlowType } from '@vocably/model';
import { shuffle } from 'lodash-es';
import { usePostHog } from 'posthog-react-native';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Button, Switch, Text, useTheme } from 'react-native-paper';
import Sortable, {
  SortableGridDragEndCallback,
  SortableGridRenderItem,
} from 'react-native-sortables';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { defaultStudyFlow, getDefaultValues } from '../defaultStudyFlow';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { isSuitableForArrangingByLetters } from '../study/isSuitableForArrangingByLetters';
import { usePremium } from '../usePremium';
import { usePresentPaywall } from '../usePresentPaywall';
import { UserMetadataContext } from '../UserMetadataContainer';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const StudySteps: FC<Props> = ({ style }) => {
  const isPremium = usePremium();
  const presentPaywall = usePresentPaywall();
  const theme = useTheme();
  const { userMetadata, updateUserMetadata } = useContext(UserMetadataContext);
  const [changeIsEnabled, setChangeIsEnabled] = useState(true);
  const navigation = useNavigation();
  const posthog = usePostHog();

  const studyFlow = userMetadata.studyFlow ?? defaultStudyFlow;

  const {
    deck: { cards },
  } = useSelectedDeck({
    autoReload: false,
  });

  const [arrangePreviewCard, setArrangePreviewCard] = useState<CardItem>();

  useEffect(() => {
    const selectedCard = shuffle(cards).find(isSuitableForArrangingByLetters);
    if (selectedCard) {
      setArrangePreviewCard(selectedCard);
    }
  }, [cards]);

  useEffect(() => {
    posthog.capture('studyStepsShown');
  }, []);

  const toggleStep = (id: string) => (isEnabled: boolean) => {
    if (!changeIsEnabled) {
      return;
    }

    const item = studyFlow.find((item) => item.id === id);

    if (!item) {
      return;
    }

    setChangeIsEnabled(false);

    item.enabled = isEnabled;

    updateUserMetadata({
      studyFlow: studyFlow,
    }).finally(() => {
      setChangeIsEnabled(true);
    });
  };

  const renderItem = useCallback<SortableGridRenderItem<StudyFlowType>>(
    ({ item }) => {
      const needsPremium = item.type === 'arrange';
      const defaultValues = getDefaultValues(item.id);

      const isEnabled = item.enabled && (!needsPremium || isPremium);

      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            backgroundColor: theme.colors.elevation.level4,
            paddingHorizontal: 8,
            paddingVertical: 12,
            borderRadius: 8,
          }}
        >
          <Sortable.Handle
            style={{
              alignSelf: 'stretch',
              justifyContent: 'center',
            }}
          >
            <Icon name="drag-vertical" size={24} />
          </Sortable.Handle>
          <View
            style={{
              gap: 8,
              flex: 1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <Switch
                value={isEnabled}
                disabled={needsPremium && !isPremium}
                onValueChange={toggleStep(item.id)}
              />
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  flex: 1,
                  flexShrink: 1,
                }}
              >
                <Text>{defaultValues.name}</Text>
              </View>
            </View>
            {needsPremium && !isPremium && (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    paddingLeft: 12,
                    marginBottom: 4,
                  }}
                >
                  <Icon
                    name="lock"
                    size={16}
                    color={theme.colors.onBackground}
                  />
                  <Text style={{ fontSize: 16 }}>
                    Available to premium users
                  </Text>
                </View>
                {arrangePreviewCard && (
                  <Button
                    style={{ alignSelf: 'flex-start' }}
                    icon={'eye-outline'}
                    onPress={() => {
                      posthog.capture('arrangePreviewClicked');
                      navigation.navigate('PreviewArrange', {
                        card: arrangePreviewCard,
                      });
                    }}
                  >
                    See how it works
                  </Button>
                )}
                <Button
                  style={{ alignSelf: 'flex-start' }}
                  icon={'crown'}
                  onPress={() => presentPaywall()}
                >
                  Upgrade to premium
                </Button>
              </View>
            )}
          </View>
        </View>
      );
    },
    [isPremium, presentPaywall]
  );

  const onDragEnd: SortableGridDragEndCallback<StudyFlowType> = ({ data }) => {
    setChangeIsEnabled(false);
    updateUserMetadata({
      studyFlow: data,
    }).finally(() => setChangeIsEnabled(true));
  };

  return (
    <View
      style={[
        {
          gap: 16,
        },
        style,
      ]}
    >
      <View style={{ paddingHorizontal: 8, gap: 8 }}>
        <Text style={{ fontSize: 24 }}>Study steps per card</Text>
        <Text>
          Use <Icon name="drag-vertical" /> to rearrange the steps.
        </Text>
      </View>
      <Sortable.Grid
        columns={1}
        data={studyFlow}
        renderItem={renderItem}
        rowGap={8}
        customHandle={true}
        onDragEnd={onDragEnd}
        sortEnabled={changeIsEnabled}
      />
    </View>
  );
};
