import { GoogleLanguages } from '@vocably/model';
import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

for (let language of GoogleLanguages) {
  console.log(`Regrouping units of speech for ${language}`);

  await execute(
    `aws s3 cp "s3://${process.env.UNITS_OF_SPEECH_BUCKET}/analyze/${language}" "s3://${process.env.UNITS_OF_SPEECH_BUCKET}/${language}/units-of-speech" --recursive`,
    { maxBuffer: 10 * 1024 * 10240 }
  );

  await execute(
    `aws s3 cp "s3://${process.env.UNITS_OF_SPEECH_BUCKET}/translations/${language}" "s3://${process.env.UNITS_OF_SPEECH_BUCKET}/${language}/translations" --recursive`,
    { maxBuffer: 10 * 1024 * 10240 }
  );
}
