import { StudyFlowType } from '@vocably/model';
import { useContext } from 'react';
import { defaultStudyFlow } from './defaultStudyFlow';
import { usePremium } from './usePremium';
import { UserMetadataContext } from './UserMetadataContainer';

export const useStudySteps = (): StudyFlowType[] => {
  const isPremium = usePremium();
  const {
    userMetadata: { studyFlow: studyFlowMetadata },
  } = useContext(UserMetadataContext);

  const studyFlow = studyFlowMetadata ?? defaultStudyFlow;

  const excludedPremium = studyFlow.filter((item) => {
    if (item.id === 'ab' && !isPremium) {
      return false;
    }

    return true;
  });

  const filteredFlow = excludedPremium.filter((item) => item.enabled);

  return filteredFlow.length === 0 ? excludedPremium : filteredFlow;
};
