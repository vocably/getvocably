import { Analysis, AnalyzePayload, Result } from '@vocably/model';

export const analyze = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  try {
    const result = await fetch(
      'https://public-api.dev.env.vocably.pro/analyze',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );

    if (!result.ok) {
      return {
        success: false,
        errorCode: 'HTTP_REQUEST_NOT_OK',
        reason: `HTTP request not ok: ${result.statusText}`,
        extra: result,
      };
    }

    const jsonValues = await result.json();

    return { success: true, value: jsonValues };
  } catch (e) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: `Error while fetching analyze result: ${e.message}`,
      extra: e,
    };
  }
};
