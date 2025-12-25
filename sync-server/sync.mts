#!/usr/bin/env -S npx ts-node --esm

import { isGoogleLanguage } from '@vocably/model';
import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { readFileSync } from 'fs';
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { dirname, normalize } from 'path';
import 'zx/globals';

config();
const execute = promisify(exec);

const language = process.argv.at(-1) ?? '';

if (!isGoogleLanguage(language)) {
  throw new Error(`Invalid language ${language}`);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const repoPath = normalize(`${__dirname}/../../vocably-languages/${language}`);

if (!existsSync(repoPath)) {
  throw new Error(`Repo path ${repoPath} does not exist`);
}
const statsFilePath = `${__dirname}/stats/${language}.json`;
const s3BucketPath = `vocably-prod-units-of-speech/${language.toLowerCase()}`;
const s3Path = `s3://${s3BucketPath}/`;

let stats = await getStats();

if (stats.isSyncing) {
  console.log('Already syncing');
  process.exit(0);
}

stats.isSyncing = true;
await saveStats(stats);

await gitPull();
const newHash = await getHash();

const deleteFiles = await getDeletedFiles(stats.lastSyncedHash, newHash);
const modifiedFiles = await getModifiedFile(stats.lastSyncedHash, newHash);

if (deleteFiles.length > 0) {
  console.log(`Deleting ${deleteFiles.length} files`);
}

for (const file of deleteFiles) {
  console.log(
    (await execute(`aws s3 rm ${quotePath(s3Path + file)}`)).stdout.trim()
  );
}

if (modifiedFiles.length > 0) {
  console.log(`Uploading ${modifiedFiles.length} files`);
}

for (const file of modifiedFiles) {
  console.log(
    (
      await execute(
        `aws s3 cp ${quotePath(file)} ${quotePath(s3Path + file)}`,
        {
          cwd: repoPath,
        }
      )
    ).stdout.trim()
  );
}

console.log('Downloading data from S3');

console.log(
  (
    await execute(
      `rclone copy prod:${s3BucketPath} . --size-only --fast-list --progress --ignore-existing`,
      {
        cwd: repoPath,
      }
    )
  ).stdout.trim()
);

const status = await gitStatus();
if (status.length > 0) {
  console.log('New objects received from S3. Committing changes.');
  console.log(await gitAdd());
  console.log(await gitCommit('Automated S3 synchronization of data files'));
  console.log(await gitPush());
}

stats.lastSynced = new Date();
stats.lastSyncedHash = await getHash();
stats.isSyncing = false;
await saveStats(stats);

type LanguageStats = {
  isSyncing: boolean;
  lastSynced: Date;
  lastSyncedHash: string;
};

async function getStats(): Promise<LanguageStats> {
  if (existsSync(statsFilePath)) {
    const statsObject = JSON.parse(readFileSync(statsFilePath).toString());
    return {
      isSyncing: statsObject.isSyncing,
      lastSynced: new Date(statsObject.lastSynced),
      lastSyncedHash: statsObject.lastSyncedHash,
    };
  }

  return {
    isSyncing: false,
    lastSynced: new Date(),
    lastSyncedHash: await getHash(),
  };
}

async function saveStats(stats: LanguageStats) {
  writeFileSync(statsFilePath, JSON.stringify(stats, null, 2));
}

async function getHash(): Promise<string> {
  return (
    await execute(`git rev-parse HEAD`, {
      cwd: repoPath,
    })
  ).stdout.trim();
}

async function gitPull() {
  return (
    await execute(`git pull`, {
      cwd: repoPath,
    })
  ).stdout.trim();
}

async function getDeletedFiles(
  oldHash: string,
  newHash: string
): Promise<string[]> {
  return (
    await execute(
      `git diff --name-only --diff-filter=D "${oldHash}" "${newHash}"`,
      {
        cwd: repoPath,
      }
    )
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean)
    .filter(
      (file) =>
        file.startsWith('units-of-speech/') || file.startsWith('translations/')
    );
}

async function getModifiedFile(
  oldHash: string,
  newHash: string
): Promise<string[]> {
  return (
    await execute(
      `git diff --name-only --diff-filter=ACMR "${oldHash}" "${newHash}"`,
      {
        cwd: repoPath,
      }
    )
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean);
}

function quotePath(path: string): string {
  return process.platform === 'win32'
    ? `"${path}"`
    : `'${path.replace(/'/g, "'\\''")}'`;
}

async function gitStatus(): Promise<string[]> {
  return (
    await execute(`git status --porcelain`, {
      cwd: repoPath,
    })
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean);
}

async function gitAdd() {
  return (
    await execute(`git add .`, {
      cwd: repoPath,
    })
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean);
}

async function gitCommit(message: string) {
  return (
    await execute(`git commit -m "${message}"`, {
      cwd: repoPath,
    })
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean);
}

async function gitPush() {
  return (
    await execute(`git push`, {
      cwd: repoPath,
    })
  ).stdout
    .trim()
    .split('\n')
    .filter(Boolean);
}
