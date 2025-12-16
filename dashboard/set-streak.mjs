import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { writeFileSync } from 'node:fs';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

const daysString = process.argv[3];
const longestStreakString = process.argv[4];

if (daysString === undefined) {
  throw new Error('Days must be provided');
}

const days = parseInt(daysString);

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const listUsersResult = JSON.parse((await execute(listUsers)).stdout);

console.log('User', inspect(listUsersResult, { depth: null }));

const sub = listUsersResult.Users[0].Attributes.find(
  (attr) => attr.Name === 'sub'
).Value;

const s3Path = `s3://${process.env.USER_FILES_BUCKET}/${sub}/files/study-streak.json`;

const streakAsIs = (await execute(`aws s3 cp ${s3Path} -`)).stdout || '""';

const streak = JSON.parse(streakAsIs);

streak.lastStudyDay = new Date().toISOString().split('T')[0];
streak.days = days;

if (longestStreakString) {
  streak.longestStreak = parseInt(longestStreakString);
}

console.log('To be saved', JSON.stringify(streak, null, 2));

writeFileSync(`user-file-streak.json`, JSON.stringify(streak));

await execute(
  `aws s3 cp user-file-streak.json ${s3Path} --content-type "application/json"`
);
