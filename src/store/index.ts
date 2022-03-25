import { createStore, Store, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { AuthState } from './ducks/auth/types';

import rootReducer from './ducks/rootReducers';
import rootSaga from './ducks/rootSaga';
import { persistorConfig } from './persistor';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMiddleware = createSagaMiddleware();

const AppStore: Store<ApplicationState> = createStore(
  persistReducer<ApplicationState>(persistorConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
const Persistor = persistStore(AppStore);

export { AppStore, Persistor };
