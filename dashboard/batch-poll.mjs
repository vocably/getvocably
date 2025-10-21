import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { readFileSync } from 'fs';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const BASE = 'https://api.openai.com/v1';

const fileName = 'words-pos-en-10k';

const batchInfo = JSON.parse(readFileSync(`${fileName}-batch.json`, 'utf-8'));

const getBatchRes = await fetch(`${BASE}/batches/${batchInfo.id}`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getBatchRes.ok) throw new Error(await getBatchRes.text());
const batchPollInfo = await getBatchRes.json();

console.log(batchPollInfo);
