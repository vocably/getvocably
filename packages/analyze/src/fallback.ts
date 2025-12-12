import { Result, ResultError, ResultSuccess } from '@vocably/model';

type FallbackSuccess<T> = ResultSuccess<T> & {
  fallenBack: boolean;
};

export type FallbackResult<T> = FallbackSuccess<T> | ResultError;

export const fallback = async <T>(
  promise: Promise<Result<T>>,
  fallback: () => Promise<Result<T>>
): Promise<FallbackResult<T>> => {
  const result = await promise;

  if (result.success === true) {
    return {
      ...result,
      fallenBack: false,
    };
  } else {
    console.error('Fallback error', result);
  }

  const fallbackResult = await fallback();

  if (fallbackResult.success === true) {
    return {
      ...fallbackResult,
      fallenBack: true,
    };
  }

  return fallbackResult;
};
