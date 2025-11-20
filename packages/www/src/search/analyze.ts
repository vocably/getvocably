import { Analysis, AnalyzePayload, Result } from '@vocably/model';
import { request } from '@vocably/model-operations';

export const analyze = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  return request(`${window['publicApiBaseUrl']}/analyze`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};
