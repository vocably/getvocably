import { config } from 'dotenv-flow';
import { readFileSync } from 'fs';
import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import 'zx/globals';
import { listFiles } from './utils.js';

config();

const langDir = '../../vocably-languages/en';

const translationsDir = langDir + '/translations';

const translationsFiles = await listFiles(langDir + '/translations');

let count = 0;

process.stdout.write(`Files: ${count}`);
for (const file of translationsFiles) {
  const filePath = join(translationsDir, file);

  const contents = readFileSync(filePath, 'utf-8');

  if (contents.includes('[object Object]')) {
    await unlink(join(translationsDir, file));
  }

  count++;
  process.stdout.write(`\rFiles: ${count}`);
}
