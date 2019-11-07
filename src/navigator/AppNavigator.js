import React from 'react';
import {
  createAppContainer, createSwitchNavigator
} from 'react-navigation';
import AuthStackScreen from './AuthStack';
import AppStackScreen from './AppStack';
import WelcomeScreen from '../login/WelcomeScreen';

const AppNavigator = createSwitchNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    AuthStack: { screen: AuthStackScreen },
    AppStack: { screen: AppStackScreen },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(AppNavigator);