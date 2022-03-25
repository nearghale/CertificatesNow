import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as Pages from '~/pages/auth';

import { RouteAuth } from './routeNames';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={RouteAuth.LOGIN} component={Pages.Login} />

    </AuthStack.Navigator>
);

export default AuthRoutes;
