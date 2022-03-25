import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAuth } from '~/hooks/auth';
import {
  authenticateSuccess,
  saveAccountData,
} from '~/store/ducks/auth/actions';
import { getDataUser } from '~/utils/functions';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Initializing = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="tomato" />
  </View>
);

const Routes: React.FC = () => {
  const { signed } = useAuth();

  const [initialRoute, setInitialRoute] = useState('initializing');

  const dispatch = useDispatch();

  async function loadUser() {
    await getDataUser().then((data) => {
      if (data) {
        dispatch(authenticateSuccess(data.token));
        dispatch(saveAccountData(data));
      }
    });

    setInitialRoute('');
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {initialRoute === 'initializing' && <Initializing />}
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
};

export default Routes;
