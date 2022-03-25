import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export const persistorConfig = {
  key: 'CertificateNow',
  storage: AsyncStorage,
  whitelist: ['device'],
};

/**
 * Returns an enhanced reducer
 * @param {Function} reducers
 */
export default (reducers: any) => persistReducer(persistorConfig, reducers);
