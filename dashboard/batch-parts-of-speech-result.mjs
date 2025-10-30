import {
  getPartsOfSpeechCacheFileName,
  parsePartsOfSpeechGptResult,
} from '@vocably/analyze';
import { parseJson } from '@vocably/api';
import { isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import { mkdirSync } from 'fs';
import { isString } from 'lodash-es';
import { writeFileSync } from 'node:fs';
import { dirname } from 'path';
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

fileContents.split('\n').forEach((batchPartsOfSpeechLine) => {
  if (batchPartsOfSpeechLine.trim() === '') {
    return;
  }

  const parseResult = parseJson(batchPartsOfSpeechLine);

  if (parseResult.success === false) {
    console.error(`Unable to parse line`, batchPartsOfSpeechLine, parseResult);
    return;
  }

  const { custom_id: word, response } = parseResult.value;

  if (response.status_code !== 200) {
    console.error(
      `Unable to analyse word ${word} due to erroneous response`,
      response
    );
    return;
  }
  const responseContent = response.body.choices[0]?.message?.content;

  if (!isString(responseContent)) {
    console.error(`Response content is not a string`, responseContent);
    return [];
  }

  const partsOfSpeech = parsePartsOfSpeechGptResult(responseContent);

  const fileName = `./cache-batch-analyse/glossa/${getPartsOfSpeechCacheFileName(
    {
      source: word,
      language,
    }
  )}`;

  const dir = dirname(fileName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(fileName, partsOfSpeech.join('\n'), 'utf8');
});
