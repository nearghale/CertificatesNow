import { call, put } from 'redux-saga/effects';

import { AuthService } from '~/services';

import { LoginResponseProps } from '~/interfaces/user';
import {
  authenticateSuccess,
  authenticateError,
  saveAccountData,
} from './actions';

function* authenticate({ payload: { credentials } }: any) {
  try {
    const data: LoginResponseProps = yield call(AuthService.authenticate, {
      ...credentials,
    });
    console.log('data user log ', data);
    if (data.token) {
      yield put(authenticateSuccess(data.token));
    }
    yield put(saveAccountData(data));
  } catch (error: any) {
    console.log('error ', error.response.data);
    yield put(authenticateError(error.response.data));
  }
}

export default {
  authenticate,
};
