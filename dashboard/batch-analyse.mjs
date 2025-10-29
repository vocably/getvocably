import {
  getGptAnalyseChatGptBody,
  parsePartsOfSpeechGptResult,
} from '@vocably/analyze';
import { parseJson } from '@vocably/api';
import { isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import { chunk, isString } from 'lodash-es';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const language = process.argv[2];

if (!isGoogleLanguage(language)) {
  throw new Error(`Language ${language} is not supported`);
}

const partsOfSpeechFileId = process.argv[3];

if (!partsOfSpeechFileId) {
  throw new Error('Please provide a parts of speech file id');
}

const getFileRes = await fetch(`${BASE}/files/${partsOfSpeechFileId}/content`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getFileRes.ok) throw new Error(await getFileRes.text());
const fileContents = await getFileRes.text();

const analyseBatchLines = fileContents
  .split('\n')
  .flatMap((batchPartsOfSpeechLine) => {
    if (batchPartsOfSpeechLine.trim() === '') {
      return [];
    }

    const parseResult = parseJson(batchPartsOfSpeechLine);

    if (parseResult.success === false) {
      console.error(
        `Unable to parse line`,
        batchPartsOfSpeechLine,
        parseResult
      );
      return [];
    }

    const { custom_id: word, response } = parseResult.value;

    if (response.status_code !== 200) {
      console.error(
        `Unable to analyse word ${word} due to erroneous response`,
        response
      );
      return [];
    }
    const responseContent = response.body.choices[0]?.message?.content;

    if (!isString(responseContent)) {
      console.error(`Response content is not a string`, responseContent);
      return [];
    }

    const partsOfSpeech = parsePartsOfSpeechGptResult(responseContent);

    return partsOfSpeech.map((partOfSpeech) => ({
      word,
      partOfSpeech,
    }));
  })
  .map(({ word, partOfSpeech }) => {
    return {
      custom_id: `${word}|${partOfSpeech}`,
      method: 'POST',
      url: '/v1/chat/completions',
      body: {
        ...getGptAnalyseChatGptBody({
          source: word,
          sourceLanguage: language,
          partOfSpeech,
        }),
      },
    };
  });

const lines = analyseBatchLines.map((obj) => JSON.stringify(obj));

const chunks = chunk(lines, 7500);

chunks.forEach((chunk, index) => {
  const analyseBatchFilename = `./cache-batch-analyse/${language}-analyse-${index}.jsonl`;
  const lines = chunk.map((obj) => JSON.stringify(obj)).join('\n');
  writeFileSync(analyseBatchFilename, lines, 'utf8');
});
