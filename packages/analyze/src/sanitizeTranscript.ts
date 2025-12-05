export const sanitizeTranscript = (transcript: string) =>
  transcript.replace(/[\/\[\]]/gm, '');
