import { Result } from '@vocably/model';

export const parseJson = (text: string): Result<any> => {
  try {
    return {
      success: true,
      value: JSON.parse(text),
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'JSON_PARSE_ERROR',
      reason: 'Unable to parse the JSON string',
      extra: {
        error: e,
        text,
      },
    };
  }
};
