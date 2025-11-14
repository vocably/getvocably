import { defaultStudyStreak, Result, StudyStreak } from '@vocably/model';
import { request } from './restClient';

export const fetchStudyStreak = async (): Promise<Result<StudyStreak>> => {
  const response = await request('/files/study-streak.json', {
    method: 'GET',
  });

  if (response.success === false) {
    return response;
  }

  return {
    success: true,
    value: response.value || defaultStudyStreak,
  };
};

export const putStudyStreak = async (
  studyStreak: StudyStreak
): Promise<Result<unknown>> => {
  const saveResult = await request('/files/study-streak.json', {
    method: 'PUT',
    body: JSON.stringify(studyStreak),
  });

  if (!saveResult.success) {
    return saveResult;
  }

  return {
    success: true,
    value: null,
  };
};
