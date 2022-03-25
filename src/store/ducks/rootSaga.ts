import { all, takeLatest } from 'redux-saga/effects';

import { AuthActionTypes, AuthSagas } from './auth';

export default function* rootSaga(): any {
  return yield all([

    // AUTH
    takeLatest(AuthActionTypes.AUTHENTICATE, AuthSagas.authenticate),

  ]);
}
