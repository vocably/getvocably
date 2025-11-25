import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { readdirSync } from 'node:fs';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];
const sourceSub = process.argv[3];

if (!userEmail) {
  throw new Error('User email is required');
}

if (!sourceSub) {
  throw new Error('Source sub is required');
}

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const users = JSON.parse((await execute(listUsers)).stdout);
const sub = users.Users[0].Attributes.find((attr) => attr.Name === 'sub').Value;

const languages = readdirSync(`user-state/${sourceSub}/cards`);

for (const language of languages) {
  await execute(
    `aws s3 cp user-state/${sourceSub}/cards/${language} s3://${process.env.DECKS_BUCKET}/${sub}/languages/${language} --content-type "application/json"`
  );
}

const userFiles = readdirSync(`user-state/${sourceSub}/files`);

for (const file of userFiles) {
  await execute(
    `aws s3 cp user-state/${sourceSub}/files/${file} s3://${process.env.USER_FILES_BUCKET}/${sub}/files/${file} --content-type "application/json"`
  );
}
