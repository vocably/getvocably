import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import FormData from 'form-data';
import { readFileSync, writeFileSync } from 'fs';
import { createReadStream } from 'node:fs';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const BASE = 'https://api.openai.com/v1';

const fileName = 'words-en-10k';
const language = 'English';

const wordsJsonArray = readFileSync(`./${fileName}.txt`, 'utf8')
  .split('\n')
  .map((rawWord) => {
    const word = rawWord.trim();
    return {
      custom_id: word,
      method: 'POST',
      url: '/v1/chat/completions',
      body: {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: [
              `You are a smart ${language} dictionary`,
              `Return a list of possible parts of speech for the provided word`,
              `Only respond in text format with each part of speech on a separate line`,
            ].join('\n'),
          },
          { role: 'user', content: word },
        ],
      },
    };
  });

const lines = wordsJsonArray.map((obj) => JSON.stringify(obj)).join('\n');
writeFileSync(`${fileName}.jsonl`, lines, 'utf8');

// Upload batch file
const fd = new FormData();
fd.append('purpose', 'batch');
fd.append('file', createReadStream(`${fileName}.jsonl`));

// const uploadBatchFileRes = await fetch(`${BASE}/files`, {
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//     ...fd.getHeaders(),
//   },
//   body: fd,
// });
// if (!uploadBatchFileRes.ok) throw new Error(await res.text());
// const uploadedFile = await uploadBatchFileRes.json();

const inputFileId = 'file-8gxZikHab3Tu2RssSEZ1Ly';

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
  `${fileName}-batch.json`,
  JSON.stringify(batchInfo, null, '\t'),
  'utf8'
);
