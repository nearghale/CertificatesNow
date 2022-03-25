import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Pages from '~/pages/app';
import { RouteApp } from './routeNames';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
    >
        <AppStack.Screen
         name={RouteApp.HOME}
         component={Pages.Home}
       />
    </AppStack.Navigator>
);

export default AppRoutes;
