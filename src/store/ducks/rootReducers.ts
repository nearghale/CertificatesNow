/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';

import { ApplicationState } from '..';

import auth from './auth';

const combinedReducer = combineReducers<ApplicationState>({
  auth,
});

const rootReducer = (state: ApplicationState, action: any) => {
  if (action.type === '@auth/LOGOUT') {
    state.auth = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
