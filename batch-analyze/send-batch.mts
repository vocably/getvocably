#!/usr/bin/env -S npx ts-node --esm

import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv-flow';
import { renameSync } from 'node:fs';
// @ts-ignore
import { addJob, listFiles } from './utils.ts';

config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const batchFilesToSend = await listFiles('./data/batches');

for (let fileName of batchFilesToSend) {
  const uploadedFile = await ai.files.upload({
    file: fileName,
    config: {
      mimeType: 'jsonl',
    },
  });

  console.log(uploadedFile);

  if (!uploadedFile.name) {
    console.error('File upload failed', uploadedFile);
    continue;
  }

  const batchJob = await ai.batches.create({
    model: 'gemini-2.5-flash',
    src: uploadedFile.name,
  });

  addJob(batchJob);

  const nameOfFile = fileName.split('/').pop();

  renameSync(fileName, `./data/sent-batches/${nameOfFile}`);
}
