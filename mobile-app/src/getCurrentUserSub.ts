import { Result } from '@vocably/model';
import { loadAuthStatusFromStorage } from './auth/AuthContainer';

export const getCurrentUserSub = async (): Promise<Result<string>> => {
  const authStatus = await loadAuthStatusFromStorage();
  if (authStatus.status === 'logged-in') {
    return {
      success: true,
      value: authStatus.sub,
    };
  } else {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to get current user',
    };
  }
};
