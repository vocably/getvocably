import { getPartsOfSpeechGptBody } from '@vocably/analyze';
import { isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import FormData from 'form-data';
import { readFileSync, writeFileSync } from 'fs';
import { uniq } from 'lodash-es';
import { createReadStream } from 'node:fs';
import 'zx/globals';

config();

const language = process.argv[2];

if (!isGoogleLanguage(language)) {
  throw new Error(`Language ${language} is not supported`);
}

const BASE = 'https://api.openai.com/v1';

const wordsFileName = `./batch-analyse/${language}-words.txt`;

const wordsJsonArray = uniq(
  readFileSync(wordsFileName, 'utf8').split('\n')
).map((rawWord) => {
  const word = rawWord.trim();
  return {
    custom_id: word,
    method: 'POST',
    url: '/v1/chat/completions',
    body: {
      ...getPartsOfSpeechGptBody({
        source: word,
        language,
      }),
    },
  };
});

const partsOfSpeechBatchFilename = `./batch-analyse/${language}-parts-of-speech-batch.jsonl`;

const lines = wordsJsonArray.map((obj) => JSON.stringify(obj)).join('\n');
writeFileSync(partsOfSpeechBatchFilename, lines, 'utf8');

// Upload batch file
const fd = new FormData();
fd.append('purpose', 'batch');
fd.append('file', createReadStream(partsOfSpeechBatchFilename));

const uploadBatchFileRes = await fetch(`${BASE}/files`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    ...fd.getHeaders(),
  },
  body: fd,
});
if (!uploadBatchFileRes.ok) throw new Error(await res.text());
const uploadedFile = await uploadBatchFileRes.json();

const inputFileId = uploadedFile.id;

// Start job
const startJobBody = {
  input_file_id: inputFileId,
  endpoint: '/v1/chat/completions',
  completion_window: '24h',
  metadata: {},
};

const startTheJobRes = await fetch(`${BASE}/batches`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(startJobBody),
});

// If you’ve exceeded your batch rate limit ("enqueued input tokens"),
// OpenAI responds with 4xx and a JSON error; surface it verbatim.
if (!startTheJobRes.ok) {
  const err = await startTheJobRes
    .json()
    .catch(async () => ({ error: { message: await startTheJobRes.text() } }));
  throw new Error(err.error?.message || 'Batch create failed');
}
const batchInfo = await startTheJobRes.json();

console.log(batchInfo);

writeFileSync(
  `./batch-analyse/${language}-parts-of-speech-batch-info.json`,
  JSON.stringify(batchInfo, null, '\t'),
  'utf8'
);
