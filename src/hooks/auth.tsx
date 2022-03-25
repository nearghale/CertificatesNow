import React, { createContext, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '~/store';

import { logout } from '~/store/ducks/auth/actions';

interface AuthContextData {
  cleanState(): void;
  signed: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (store: ApplicationState) => store.auth,
  );
  const dispatch = useDispatch();

  async function cleanState() {
    dispatch(logout());
    await AsyncStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{
        cleanState,
        signed: !!isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
