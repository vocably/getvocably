import {
  Analysis,
  AnalysisItem,
  AnalyzePayload,
  isDirectAnalyzePayload,
  Result,
} from '@vocably/model';
import { buildDirectResult } from './buildDirectResult';
import { buildReverseResult } from './buildReverseResult';

const buildInternalResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  if (isDirectAnalyzePayload(payload)) {
    return buildDirectResult(payload);
  } else {
    return buildReverseResult(payload);
  }
};

export const buildResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  const result = await buildInternalResult(payload);

  if (result.success === false) {
    return result;
  }

  if (payload.settings && payload.settings.translateDefinitionsAndExamples) {
    return result;
  }

  const items: AnalysisItem[] = result.value.items.map((item) => {
    return {
      ...item,
      definitions: item.definitions.map((d) => d.replace(/ \[.+\]$/, '')),
      examples: item.examples
        ? item.examples.map((d) => d.replace(/ \[.+\]$/, ''))
        : undefined,
    };
  });

  return {
    success: true,
    value: {
      ...result.value,
      // @ts-ignore
      items: items,
    },
  };
};
