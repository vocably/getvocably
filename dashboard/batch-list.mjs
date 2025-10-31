import { inspect } from '@vocably/node-sulna';
import { config } from 'dotenv-flow';
import 'zx/globals';

config();

const BASE = 'https://api.openai.com/v1';

const getBatchListRes = await fetch(`${BASE}/batches`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getBatchListRes.ok) throw new Error(await getBatchListRes.text());
const batchList = await getBatchListRes.json();

console.log(inspect(batchList));
