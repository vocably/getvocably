#!/usr/bin/env -S npx vite-node

import { isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import 'zx/globals';
import { listFiles } from './utils.js';

config();

const language = process.argv.at(-1) ?? '';

if (!isGoogleLanguage(language)) {
  throw new Error(`Invalid language ${language}`);
}

const langDir = `../../vocably-languages/${language}`;

const unitsOfSpeechFiles = await listFiles(langDir + '/units-of-speech');

for (const file of unitsOfSpeechFiles) {
  const [_, partOfSpeechWithExtension] = file.split('/').slice(-2);
  const partOfSpeech = partOfSpeechWithExtension.replace('.json', '');

  if (!partOfSpeech.includes('verb')) {
    continue;
  }

  // unlinkSync(file);
}
