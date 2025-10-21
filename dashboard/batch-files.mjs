import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const BASE = 'https://api.openai.com/v1';

const getFilesRes = await fetch(`${BASE}/files`, {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
});
if (!getFilesRes.ok) throw new Error(await getFilesRes.text());
const files = await getFilesRes.json();

console.log(files);
