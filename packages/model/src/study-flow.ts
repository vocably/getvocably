type StudyFlowItemCard = {
  id: string;
  enabled: boolean;
  type: 'card';
};

type StudyFlowItemMultichoice = {
  id: string;
  enabled: boolean;
  type: 'multichoice';
};

type StudyFlowItemArrange = {
  id: string;
  enabled: boolean;
  type: 'arrange';
};

export type StudyFlowType =
  | StudyFlowItemCard
  | StudyFlowItemMultichoice
  | StudyFlowItemArrange;
