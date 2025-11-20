import { AudioPronunciationPayload, Result } from '@vocably/model';
import { request } from '@vocably/model-operations';

export const playAudioPronunciation = async (
  payload: AudioPronunciationPayload
): Promise<Result<true>> => {
  const result = await request(
    `${window['publicApiBaseUrl']}/audio?` + new URLSearchParams(payload),
    {
      method: 'GET',
    }
  );

  if (!result.success) {
    return result;
  }

  return new Promise((resolve) => {
    try {
      const audio = new Audio(result.value.url);
      audio.addEventListener('ended', () => {
        resolve({
          success: true,
          value: true,
        });
      });
      audio.play().catch((e) => {
        resolve({
          success: false,
          errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
          reason: 'An error occurred while playing the offscreen audio',
          extra: e,
        });
      });
    } catch (e) {
      resolve({
        success: false,
        errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
        reason: 'An error occurred while playing the offscreen audio',
        extra: e,
      });
    }
  });
};
