import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { mkdirSync, writeFileSync } from 'fs';
import { last } from 'lodash-es';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const users = JSON.parse((await execute(listUsers)).stdout);

const sub = users.Users[0].Attributes.find((attr) => attr.Name === 'sub').Value;

let s3CardCollections = [];

try {
  s3CardCollections = JSON.parse(
    (
      await execute(
        `aws s3api list-objects --bucket ${process.env.DECKS_BUCKET} --prefix "${sub}/"`
      )
    ).stdout
  ).Contents;
} catch (error) {
  console.error(error);
}

mkdirSync(`user-state/${sub}/cards`, { recursive: true });

for (const s3CardCollection of s3CardCollections) {
  const data =
    (
      await execute(
        `aws s3 cp s3://${process.env.DECKS_BUCKET}/${s3CardCollection.Key} -`,
        { maxBuffer: 10 * 1024 * 1024 }
      )
    ).stdout || '""';

  const language = last(s3CardCollection.Key.split('/'));

  writeFileSync(`user-state/${sub}/cards/${language}`, data);
}

mkdirSync(`user-state/${sub}/files`, { recursive: true });

let s3Files = [];
try {
  s3Files = JSON.parse(
    (
      await execute(
        `aws s3api list-objects --bucket ${process.env.USER_FILES_BUCKET} --prefix "${sub}/"`
      )
    ).stdout
  ).Contents;
} catch (error) {
  console.error(error);
}

for (const s3File of s3Files) {
  const data =
    (
      await execute(
        `aws s3 cp s3://${process.env.USER_FILES_BUCKET}/${s3File.Key} -`,
        { maxBuffer: 10 * 1024 * 1024 }
      )
    ).stdout || '""';

  const fileName = last(s3File.Key.split('/'));

  writeFileSync(`user-state/${sub}/files/${fileName}`, data);
}
