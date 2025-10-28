import { inspect } from '@vocably/node-sulna';
import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const BASE = 'https://api.openai.com/v1';

const batchId = process.argv[2];

if (!batchId) {
  throw new Error('Batch ID is required');
}

const getBatchRes = await fetch(`${BASE}/batches/${batchId}`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getBatchRes.ok) throw new Error(await getBatchRes.text());
const batchPollInfo = await getBatchRes.json();

console.log(inspect(batchPollInfo));
