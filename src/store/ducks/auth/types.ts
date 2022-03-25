import { LoginResponseProps } from 'interfaces/user';

export interface AuthState {
  userData: LoginResponseProps | null;
  isAuthenticated: boolean;
  error: boolean;
  errorMessage: string;
  token: string;
  loading: boolean;
}

export enum AuthActionsTypes {
  AUTHENTICATE = '@auth/AUTHENTICATE',
  AUTHENTICATE_SUCCESS = '@auth/AUTHENTICATE_SUCCESS',
  LOGOUT = '@auth/LOGOUT',
  AUTHENTICATE_ERROR = '@auth/AUTHENTICATE_ERROR',
  SAVE_ACCOUNT_DATA = '@auth/SAVE_ACCOUNT_DATA',
}

export default AuthActionsTypes;
