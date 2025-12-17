import { validateSource } from '@vocably/analyze';
import { config } from 'dotenv-flow';
import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import 'zx/globals';
import { listFiles } from './utils.js';

config();

const langDir = '../../vocably-languages/fr';

const unitsOfSpeechDir = langDir + '/units-of-speech';
const translationsDir = langDir + '/translations';

const unitsOfSpeechFiles = await listFiles(langDir + '/units-of-speech');
const translationsFiles = await listFiles(langDir + '/translations');

for (const file of translationsFiles) {
  const [source, partOfSpeech] = file.split('/');

  if (
    !validateSource({
      source,
      partOfSpeech,
    })
  ) {
    await unlink(join(translationsDir, file));
  }
}

for (const file of unitsOfSpeechFiles) {
  const [source, partOfSpeechWithExtension] = file.split('/');
  const partOfSpeech = partOfSpeechWithExtension.replace('.json', '');

  if (
    !validateSource({
      source,
      partOfSpeech,
    })
  ) {
    await unlink(join(unitsOfSpeechDir, file));
  }
}
