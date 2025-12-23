#!/usr/bin/env -S npx ts-node --esm

import { getGeminiBatchItem, isVerb } from '@vocably/analyze';
import { config } from 'dotenv-flow';
import { writeFileSync } from 'fs';
import 'zx/globals';
import { listFiles } from './utils.ts';

config();

const language = 'nl';

const langDir = `../../vocably-languages/${language}`;

const unitsOfSpeechFiles = await listFiles(langDir + '/units-of-speech');

let filesCount = 0;

console.log(`Found ${unitsOfSpeechFiles.length} files`);

let rows = [];

for (const file of unitsOfSpeechFiles) {
  const [source, partOfSpeechWithExtension] = file.split('/').slice(-2);
  const partOfSpeech = partOfSpeechWithExtension.replace('.json', '');

  if (!isVerb(partOfSpeech)) {
    continue;
  }

  filesCount++;

  console.log(`Processed ${filesCount} files`);

  rows.push(
    getGeminiBatchItem({
      source,
      partOfSpeech,
      sourceLanguage: language,
    })
  );

  if (filesCount === 10) {
    break;
  }
}

writeFileSync(
  `./data/batches/${language}-verbs-jobs.jsonl`,
  rows.map((r) => JSON.stringify(r)).join('\n')
);
