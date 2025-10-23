import { setOpenAIConfig } from '@vocably/lambda-shared';

export const config = {
  lexicalaHost: 'must be provided',
  lexicalaKey: 'must be provided',
  googleProjectId: 'vocably-332109',
  nlpTranslationKey: 'must be provided',
  nlpTranslationHost: 'must be provided',
  openaiApiKey: 'must be provided',
  awsRegion: 'us-east-1',
  unitsOfSpeechBucket: 'vocably-prod-units-of-speech',
};

type AnalyzerConfig = typeof config;

export const configureAnalyzer = (newConfig: AnalyzerConfig) => {
  Object.assign(config, newConfig);
  setOpenAIConfig({
    apiKey: config.openaiApiKey,
  });
};
