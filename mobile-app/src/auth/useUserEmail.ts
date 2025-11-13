import { useContext } from 'react';
import { AuthContext } from './AuthContainer';

export const useUserEmail = (): string | false => {
  const authStatus = useContext(AuthContext);
  return authStatus.status === 'logged-in' ? authStatus.email : false;
};
