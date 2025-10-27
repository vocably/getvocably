import { config } from 'dotenv-flow';
import FormData from 'form-data';
import { readFileSync, writeFileSync } from 'fs';
import { createReadStream } from 'node:fs';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const fileName = 'words-pos-en-10k';
const language = 'English';

const instructions = JSON.parse(
  readFileSync(`./${fileName}.json`, 'utf8')
).flatMap((wordNContent) => {
  const word = wordNContent.customId;
  const partsOfSpeech = wordNContent.content
    .split('\n')
    .map((part) => part.trim());
  return partsOfSpeech.map((partOfSpeech) => {
    return {
      custom_id: `${word}-${partOfSpeech}`,
      method: 'POST',
      url: '/v1/chat/completions',
      body: {
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: [
              `You are a smart language dictionary.`,
              `User provides a word in ${language} and its part of speech.`,
              `Only respond in JSON format with an object containing the following properties:`,
              `transcript - IPA`,
              `definitions - list of short definitions in ${language}`,
              `examples - list of extremely concise examples`,
              `lemma - lemma or infinitive`,
              `synonyms - list of synonyms`,
            ].join('\n'),
          },
          { role: 'user', content: word },
          { role: 'user', content: partOfSpeech },
        ],
      },
    };
  });
});

const lines = instructions.map((obj) => JSON.stringify(obj)).join('\n');
writeFileSync(`${fileName}.jsonl`, lines, 'utf8');

// Upload batch file
const fd = new FormData();
fd.append('purpose', 'batch');
fd.append('file', createReadStream(`${fileName}.jsonl`));

const uploadBatchFileRes = await fetch(`${BASE}/files`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    ...fd.getHeaders(),
  },
  body: fd,
});
if (!uploadBatchFileRes.ok) throw new Error(await res.text());
const inputFileMetadata = await uploadBatchFileRes.json();

const inputFileId = inputFileMetadata.id;

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
