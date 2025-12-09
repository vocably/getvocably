import { ReverseAnalyzePayload } from '@vocably/model';
import { buildReverseResultYes } from '../buildReverseResult';
import { InputAnalysis } from '../detectInputTypeAi';
import { reverseTranslate } from '../reverseTranslate';

type Payload = {
  payload: ReverseAnalyzePayload;
  inputAnalysis: InputAnalysis;
};
export const reverseAnalysis = async ({ payload, inputAnalysis }: Payload) => {
  const reverseTranslateResult = await reverseTranslate(payload);

  if (!reverseTranslateResult.success) {
    return reverseTranslateResult;
  }

  return buildReverseResultYes(
    payload,
    inputAnalysis,
    reverseTranslateResult.value
  );
};
