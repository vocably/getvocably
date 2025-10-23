import { configureAnalyzer, explainSentence } from '@vocably/analyze';
import { trimArticle } from '@vocably/sulna';
import {
  type APIGatewayProxyEvent,
  type APIGatewayProxyResult,
} from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { extractPayload } from './extractPayload';

configureAnalyzer({
  lexicalaHost: process.env.LEXICALA_HOST as string,
  lexicalaKey: process.env.LEXICALA_KEY as string,
  googleProjectId: process.env.GOOGLE_PROJECT_ID as string,
  nlpTranslationKey: process.env.NLP_TRANSLATION_KEY as string,
  nlpTranslationHost: process.env.NLP_TRANSLATION_HOST as string,
  openaiApiKey: process.env.OPENAI_API_KEY as string,
  awsRegion: process.env.AWS_REGION as string,
  unitsOfSpeechBucket: process.env.UNITS_OF_SPEECH_BUCKET as string,
});

export const explain = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractPayload),
      mergeMap((payload) => {
        const source = trimArticle(
          payload.sourceLanguage,
          payload.source.trim()
        ).source;

        if (source.length === 0 || source.split(' ').length === 1) {
          return Promise.resolve({
            success: true,
            value: {
              sourceLanguage: payload.sourceLanguage,
              targetLanguage: payload.targetLanguage,
              explanation: '',
            },
          });
        }

        return explainSentence(payload);
      }),
      map((result) => {
        if (result.success === false) {
          throw result;
        }

        return buildResponse({
          body: JSON.stringify(result.value),
        });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.bulkAnalize = explain;
