import { parseJson } from '@vocably/api';
import { config } from 'dotenv-flow';
import { readFileSync } from 'fs';
import { join } from 'node:path';
import 'zx/globals';
import { listFiles } from './utils.js';

config();

const langDir = '../../vocably-languages/en';

const unitsOfSpeechDir = langDir + '/units-of-speech';

const translationsFiles = await listFiles(unitsOfSpeechDir);

let totalCards = 0;
let totalSize = 0;
for (const file of translationsFiles) {
  const filePath = join(unitsOfSpeechDir, file);
  const parseResult = parseJson(readFileSync(filePath));
  if (!parseResult.success) {
    continue;
  }

  totalCards += 1;
  totalSize += [
    ...parseResult.value.definitions,
    ...parseResult.value.examples,
  ].reduce((acc, curr) => acc + curr.length, 0);
  console.log(totalCards);
}

console.log(`Total cards: ${totalCards}`);
console.log(`Total size in bytes: ${totalSize}`);
console.log(`Average size in bytes: ${totalSize / totalCards}`);
