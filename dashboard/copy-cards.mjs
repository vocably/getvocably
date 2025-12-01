import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { writeFileSync } from 'node:fs';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const sourceEmail = process.argv[2];
const targetEmail = process.argv[3];
const language = process.argv[4];

if (!sourceEmail || !targetEmail || !language) {
  throw new Error(
    'Usage: node copy-cards.mjs <source-email> <target-email> <language>'
  );
}

const listSourceUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${sourceEmail}\\""`;
const sourceUsers = JSON.parse((await execute(listSourceUsers)).stdout);
const sourceSub = sourceUsers.Users[0].Attributes.find(
  (attr) => attr.Name === 'sub'
).Value;

const listTargetUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${targetEmail}\\""`;
const targetUsers = JSON.parse((await execute(listTargetUsers)).stdout);
const targetSub = targetUsers.Users[0].Attributes.find(
  (attr) => attr.Name === 'sub'
).Value;

const sourceData = JSON.parse(
  (
    await execute(
      `aws s3 cp s3://${process.env.DECKS_BUCKET}/${sourceSub}/languages/${language} -`,
      { maxBuffer: 10 * 1024 * 1024 }
    )
  ).stdout || '""'
);

let targetData = {
  language,
  cards: [],
  tags: [],
};

const targetS3Path = `s3://${process.env.DECKS_BUCKET}/${targetSub}/languages/${language}`;

try {
  targetData = JSON.parse(
    (
      await execute(`aws s3 cp ${targetS3Path} -`, {
        maxBuffer: 10 * 1024 * 1024,
      })
    ).stdout || '{}'
  );
} catch (e) {
  if (!e.stderr.includes('404')) {
    throw e;
  }
}

for (let card of sourceData.cards) {
  if (targetData.cards.some((c) => c.id === card.id)) {
    continue;
  }

  targetData.cards.push(card);
}

writeFileSync(`deck-synchronized.json`, JSON.stringify(targetData));

await execute(
  `aws s3 cp deck-synchronized.json ${targetS3Path} --content-type "application/json"`
);
