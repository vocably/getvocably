import { signOut } from '@aws-amplify/auth';

export const forcefulSignOut = async () => {
  try {
    await signOut();
  } catch (e) {
    console.error('sign out error', e);
  }
};
