#!/usr/bin/env -S npx ts-node --esm

import { GoogleGenAI, type BatchJob } from '@google/genai';
import { config } from 'dotenv-flow';
import { last } from 'lodash-es';
// @ts-ignore
import { readJobs, updateJob } from './utils.ts';

config();

const completedStates = [
  'JOB_STATE_SUCCEEDED',
  'JOB_STATE_FAILED',
  'JOB_STATE_CANCELLED',
  'JOB_STATE_EXPIRED',
];

const isCompletedJob = (job: BatchJob): boolean => {
  if (job.state === undefined) {
    return false;
  }

  return completedStates.includes(job.state);
};

const downloadDest = async (job: BatchJob) => {
  if (job.dest?.fileName === undefined) {
    console.error('Job is not completed or file name can be found.', job);
    return;
  }

  const downloadPath = `./data/results/${last(
    job.dest.fileName.split('/')
  )}.jsonl`;

  await ai.files.download({
    file: job.dest?.fileName,
    downloadPath,
  });
};

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

while (true) {
  const jobs = readJobs().filter((j: BatchJob) => !isCompletedJob(j));

  if (jobs.length === 0) {
    console.log('All jobs are completed.');
    break;
  }

  console.log(`Jobs to check: ${jobs.length}`);

  for (const currentJob of jobs) {
    if (currentJob.name === undefined) {
      console.error(`Job has no name`, currentJob);
      continue;
    }

    const job = await ai.batches.get({
      name: currentJob.name,
    });

    console.log(`Job ${job.name} is ${job.state}`, job);

    if (job.state === 'JOB_STATE_SUCCEEDED') {
      await downloadDest(job);
    }

    updateJob(job);
  }

  console.log('Waiting for 10 seconds...');
  await new Promise((resolve) => setTimeout(resolve, 10000));
}
