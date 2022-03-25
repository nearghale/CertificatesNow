import { action } from 'typesafe-actions';

import { CredentialsProps, LoginResponseProps } from '~/interfaces/user';

import { AuthActionsTypes } from './types';

export const authenticate = (credentials: CredentialsProps) =>
  action(AuthActionsTypes.AUTHENTICATE, { credentials });

export const authenticateSuccess = (token: string) =>
  action(AuthActionsTypes.AUTHENTICATE_SUCCESS, { token });

export const saveAccountData = (userData: LoginResponseProps) =>
  action(AuthActionsTypes.SAVE_ACCOUNT_DATA, { userData });

export const authenticateError = (errorMessage: string) =>
  action(AuthActionsTypes.AUTHENTICATE_ERROR, { errorMessage });

export const logout = () => action(AuthActionsTypes.LOGOUT);

export default {
  authenticate,
  authenticateSuccess,
  logout,
};
