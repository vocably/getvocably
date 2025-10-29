import { isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import FormData from 'form-data';
import { createReadStream, writeFileSync } from 'node:fs';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const language = process.argv[2];

if (!isGoogleLanguage(language)) {
  throw new Error(`Language ${language} is not supported`);
}

const analyseBatchFilename = process.argv[3];

if (!analyseBatchFilename) {
  throw new Error('Please provide a file name');
}

// Upload batch file
const fd = new FormData();
fd.append('purpose', 'batch');
fd.append('file', createReadStream(analyseBatchFilename));

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
  `./cache-batch-analyse/${language}-analyse-info.json`,
  JSON.stringify(batchInfo, null, '\t'),
  'utf8'
);
