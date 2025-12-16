import { GoogleLanguage, Result } from '@vocably/model';
import { googleTranslate } from './googleTranslate';

type Payload = {
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
  definitions: string[];
  examples: string[];
};

type TranslatedDefinitionsAndExamples = {
  definitions: string[];
  examples: string[];
};

export const translateDefinitionsAndExamples = async ({
  sourceLanguage,
  targetLanguage,
  definitions,
  examples,
}: Payload): Promise<Result<TranslatedDefinitionsAndExamples>> => {
  const googleTranslateSourcePayload = [...definitions, ...examples]
    .map((sentence) => `{${sentence}}`)
    .join('\n');

  if (googleTranslateSourcePayload.length === 0) {
    return {
      success: true,
      value: {
        definitions,
        examples,
      },
    };
  }

  const translationResult = await googleTranslate(
    googleTranslateSourcePayload,
    sourceLanguage,
    targetLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  const regex = /\{([\s\S]*?)\}/g;

  // @ts-ignore
  const translations = [...translationResult.value.target.matchAll(regex)].map(
    (match) => match[1]
  );

  let result: TranslatedDefinitionsAndExamples = {
    definitions: [],
    examples: [],
  };

  for (let i = 0; i < definitions.length; i++) {
    const translation = translations[i] ? ` (${translations[i]})` : '';
    result.definitions.push(`${definitions[i]}${translation}`);
  }

  for (let i = 0; i < examples.length; i++) {
    const translation = translations[i + definitions.length]
      ? ` (${translations[i + definitions.length]})`
      : '';
    result.examples.push(`${examples[i]}${translation}`);
  }

  return {
    success: true,
    value: result,
  };
};
