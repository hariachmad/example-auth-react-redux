import { FetchState } from '@/app/(modules)/shared/type/FetchState';
import { AuthState } from '../type/AuthState';

export const initialState: AuthState = {
  user: null,
  token: null,
  status: FetchState.Idle,
  error: null,
  isAuthenticated: false,
};
