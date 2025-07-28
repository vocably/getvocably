import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const listUsersResult = JSON.parse((await execute(listUsers)).stdout);

console.log('User', inspect(listUsersResult, { depth: null }));

const sub = listUsersResult.Users[0].Attributes.find(
  (attr) => attr.Name === 'sub'
).Value;

const s3FileLocation = `s3://${process.env.USER_FILES_BUCKET}/${sub}/files/study-streak.json`;

await execute(`aws s3 rm ${s3FileLocation}`);
