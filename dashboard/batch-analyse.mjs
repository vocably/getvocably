import {
  getGptAnalyseChatGptBody,
  getPartsOfSpeechCacheFileName,
  parsePartsOfSpeechGptResult,
} from '@vocably/analyze';
import { parseJson } from '@vocably/api';
import { isGoogleLanguage } from '@vocably/model';
import { inspect } from '@vocably/node-sulna';
import { config } from 'dotenv-flow';
import { mkdirSync, readFileSync } from 'fs';
import { chunk, isString } from 'lodash-es';
import { writeFileSync } from 'node:fs';
import { dirname } from 'path';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const language = process.argv[2];

if (!isGoogleLanguage(language)) {
  throw new Error(`Language ${language} is not supported`);
}

const batchPartsOfSpeechInitialInfo = JSON.parse(
  readFileSync(
    `./cache-batch-analyse/${language}-parts-of-speech-batch-info.json`,
    'utf8'
  )
);

const getBatchInfoRes = await fetch(
  `${BASE}/batches/${batchPartsOfSpeechInitialInfo.id}`,
  {
    method: 'GET',
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
  }
);
if (!getBatchInfoRes.ok) throw new Error(await getBatchInfoRes.text());
const batchInfo = await getBatchInfoRes.json();

console.log(`Batch info`, inspect(batchInfo));

if (batchInfo.status !== 'completed') {
  throw Error(`The batch is still in progress.`);
}

const partsOfSpeechFileId = batchInfo.output_file_id;

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

    // Save parts of speech
    const fileName = `./cache-batch-analyse/glossa/${getPartsOfSpeechCacheFileName(
      {
        source: word,
        language,
      }
    )}`;

    const dir = dirname(fileName);
    mkdirSync(dir, { recursive: true });
    writeFileSync(fileName, partsOfSpeech.join('\n'), 'utf8');
    // Eo saving of parts of speech

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

const chunks = chunk(lines, 14000);

chunks.forEach((lines, index) => {
  const analyseBatchFilename = `./cache-batch-analyse/${language}-analyse-${index}.jsonl`;
  writeFileSync(analyseBatchFilename, lines.join('\n'), 'utf8');
});
