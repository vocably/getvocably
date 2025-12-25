#!/usr/bin/env -S npx vite-node

import { config } from 'dotenv-flow';
import { unlinkSync } from 'fs';
import 'zx/globals';
import { execute, listFiles } from './utils.js';

config();

const languages = ['pt-PT', 'af', 'da', 'no', 'sv', 'en-GB'];

for (const language of languages) {
  const langDir = `../../vocably-languages/${language}`;

  await execute('git pull', { cwd: langDir });

  const unitsOfSpeechFiles = await listFiles(langDir + '/units-of-speech');

  for (const file of unitsOfSpeechFiles) {
    const [_, partOfSpeechWithExtension] = file.split('/').slice(-2);
    const partOfSpeech = partOfSpeechWithExtension.replace('.json', '');

    if (!partOfSpeech.includes('verb')) {
      continue;
    }

    unlinkSync(file);
  }

  await execute('git add .', { cwd: langDir });
  const status = await execute('git status --porcelain', { cwd: langDir });
  if (status.split('\n').filter(Boolean).length > 0) {
    await execute('git commit -m "Remove verbs and adverbs"', { cwd: langDir });
    await execute('git push', { cwd: langDir });
  }
}
