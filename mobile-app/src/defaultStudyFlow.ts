import { StudyFlowType } from '@vocably/model';

type FlowStepParam = {
  name: string;
};

const defaultFlowMap: Record<string | 'default', FlowStepParam> = {
  mf: {
    name: 'Choose the correct translation (multichoice question)',
  },
  sf: {
    name: 'Recall the correct translation',
  },
  mb: {
    name: 'Choose the correct word or phrase (multichoice question)',
  },
  ab: {
    name: 'Arrange the correct word or phrase by letters',
  },
  sb: {
    name: 'Recall the correct word or phrase',
  },
  default: {
    name: 'New step',
  },
};

export const getDefaultValues = (id: string) => {
  return defaultFlowMap[id] ?? defaultFlowMap.default;
};

export const defaultStudyFlow: StudyFlowType[] = [
  {
    id: 'mf',
    enabled: true,
    type: 'multichoice',
  },
  {
    id: 'sf',
    enabled: true,
    type: 'card',
  },
  {
    id: 'mb',
    enabled: true,
    type: 'multichoice',
  },
  {
    id: 'ab',
    enabled: true,
    type: 'arrange',
  },
  {
    id: 'sb',
    enabled: true,
    type: 'card',
  },
];
