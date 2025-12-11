import { validateSource } from '@vocably/analyze';
import { config } from 'dotenv-flow';
import { readdir, stat, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import 'zx/globals';

config();

const langDir = '../../vocably-languages';

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

async function listFiles(dir) {
  try {
    // Read recursively. Items are file names relative to 'dir'.
    const entries = await readdir(dir, { recursive: true });
    const filePaths = [];

    // Check each entry to ensure it's a file
    for (const entry of entries) {
      const fullPath = join(dir, entry);

      // Use stat() to get file type information
      const stats = await stat(fullPath);

      if (stats.isFile()) {
        filePaths.push(entry); // Push the path relative to the start folder
      }
    }

    return filePaths;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return [];
  }
}
