/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { Reducer } from 'redux';

import { AuthState, AuthActionsTypes } from './types';

const INITIAL_STATE: AuthState = {
  userData: null,
  isAuthenticated: false,
  error: false,
  errorMessage: '',
  token: '',
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionsTypes.AUTHENTICATE:
      return produce(state, (draft) => {
        draft.isAuthenticated = false;
        draft.token = '';
        draft.loading = true;
        draft.error = false;
        draft.errorMessage = '';
      });
    case AuthActionsTypes.AUTHENTICATE_SUCCESS:
      return produce(state, (draft) => {
        draft.isAuthenticated = true;
        draft.token = action.payload.token;
        draft.loading = false;
        draft.error = false;
        draft.errorMessage = '';
      });
    case AuthActionsTypes.AUTHENTICATE_ERROR:
      return produce(state, (draft) => {
        draft.error = true;
        draft.loading = false;
        draft.errorMessage = action.payload.errorMessage || '';
      });

    case AuthActionsTypes.SAVE_ACCOUNT_DATA:
      return produce(state, (draft) => {
        draft.userData = action.payload.userData || null;
      });

    case AuthActionsTypes.LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;

export { default as AuthActions } from './actions';
export { default as AuthSagas } from './saga';
export { default as AuthActionTypes } from './types';
