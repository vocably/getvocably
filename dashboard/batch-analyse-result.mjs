import { getAnalyseCacheFileName, getGptAnalyseResult } from '@vocably/analyze';
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

const batchAnalyseFileId = process.argv[3];

if (!batchAnalyseFileId) {
  throw new Error('Please provide a parts of speech file id');
}

const getFileRes = await fetch(`${BASE}/files/${batchAnalyseFileId}/content`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getFileRes.ok) throw new Error(await getFileRes.text());
const fileContents = await getFileRes.text();

fileContents.split('\n').forEach((batchAnalyseLine) => {
  if (batchAnalyseLine.trim() === '') {
    return;
  }

  const parseResult = parseJson(batchAnalyseLine);

  if (parseResult.success === false) {
    console.error(`Unable to parse line`, batchAnalyseLine, parseResult);
    return;
  }

  const { custom_id: wordAndPos, response } = parseResult.value;

  if (response.status_code !== 200) {
    console.error(
      `Unable to analyse ${wordAndPos} due to erroneous response`,
      response
    );
    return;
  }
  const responseContent = response.body.choices[0]?.message?.content;

  if (!isString(responseContent)) {
    console.error(`Response content is not a string`, responseContent);
    return;
  }

  const contentResult = parseJson(responseContent);

  if (contentResult.success === false) {
    console.error(
      `Unable to parse response content`,
      responseContent,
      contentResult
    );
    return;
  }

  const [word, partOfSpeech] = wordAndPos.split('|');

  const analyseResult = getGptAnalyseResult({
    partOfSpeech,
    sourceLanguage: language,
    response: contentResult.value,
  });

  if (analyseResult.success === false) {
    console.error(`Unable to analyse ${wordAndPos}`, analyseResult);
    return;
  }

  const fileName = `./cache-batch-analyse/units-of-speech/${getAnalyseCacheFileName(
    language,
    word,
    partOfSpeech
  )}`;

  const dir = dirname(fileName);
  mkdirSync(dir, { recursive: true });
  writeFileSync(fileName, JSON.stringify(analyseResult.value), 'utf8');
});
