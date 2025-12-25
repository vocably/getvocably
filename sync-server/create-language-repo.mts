#!/usr/bin/env -S npx ts-node --esm

import { isGoogleLanguage, languageList } from '@vocably/model';
import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { readFileSync } from 'fs';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { dirname, join, normalize } from 'path';
import 'zx/globals';

config();
const execute = promisify(exec);

const language = process.argv.at(-1) ?? '';

if (!isGoogleLanguage(language)) {
  throw new Error(`Invalid language ${language}`);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const languageName = languageList[language];
const repoName = `vocably/${language}`;

const repoPath = normalize(`${__dirname}/../../vocably-languages/${language}`);

mkdirSync(repoPath, { recursive: true });

const repoFiles = await listFiles(__dirname + '/repo');

for (let repoFile of repoFiles) {
  const fileName = repoFile.split('/').pop();
  copyFileSync(repoFile, `${repoPath}/${fileName}`);
}

const readme = readFileSync(`${repoPath}/README.md`).toString();
writeFileSync(
  `${repoPath}/README.md`,
  readme.replace(/\{LANGUAGE\}/gm, languageName)
);

await createGhRepo();
await initRepo();
await pushRepo();

async function listFiles(dir: string): Promise<string[]> {
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
        filePaths.push(fullPath); // Push the path relative to the start folder
      }
    }

    return filePaths;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return [];
  }
}

async function initRepo() {
  console.log(
    (
      await execute(`git init`, {
        cwd: repoPath,
      })
    ).stdout.trim()
  );

  console.log(
    (
      await execute(`git add .`, {
        cwd: repoPath,
      })
    ).stdout.trim()
  );

  console.log(
    (
      await execute(`git commit -m "Initial commit"`, {
        cwd: repoPath,
      })
    ).stdout.trim()
  );
}

async function pushRepo() {
  console.log(
    (
      await execute(`git branch -M main`, {
        cwd: repoPath,
      })
    ).stdout.trim()
  );

  console.log(
    (
      await execute(`git push -u origin main`, {
        cwd: repoPath,
      })
    ).stdout.trim()
  );
}

async function createGhRepo() {
  return (
    await execute(
      `gh repo create ${repoName} --public --description "Vocably ${languageName} words and translations" --homepage https://getvocably.com --source .`,
      {
        cwd: repoPath,
      }
    )
  ).stdout;
}
