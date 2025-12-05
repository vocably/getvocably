import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const text = `2025/12/04 17:08:13 NOTICE: translations/absorb/uk.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/abundant/ru.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/acquaint/tr.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/ambitious/vi.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/archive/vi.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/arrested/az.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/chaos/ar.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:13 NOTICE: translations/children's perfume/pt.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:14 NOTICE: translations/despair/de.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:14 NOTICE: translations/fanatic belief/hi.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:14 NOTICE: translations/fed/ar.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:14 NOTICE: translations/generosity/vi.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:15 NOTICE: translations/hold on/fa.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:15 NOTICE: translations/i'm kind of sad/vi.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:15 NOTICE: translations/intended/ru.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:15 NOTICE: translations/iridescent/ru.txt: Duplicate object found in source - ignoring
2025/12/04 17:08:15 NOTICE: translations/it's rotten./fr.txt: Duplicate object found in source - ignoring`;

const files = text
  .split('\n')
  .map((line) =>
    line.replace(
      /.+?(translations.+?.txt).+/,
      's3://vocably-prod-units-of-speech/en/$1'
    )
  )
  .map((line) => line.replace(/(\/...txt)$/, '/$1'));

for (const s3FileLocation of files) {
  await execute(`aws s3 rm "${s3FileLocation}"`);
}
