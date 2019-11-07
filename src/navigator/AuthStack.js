import React from 'react';
import {
  createStackNavigator
} from "react-navigation";
import SignInScreen from '../login/Login';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
    },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
    navigationOptions: {
      header: null
    }
  }
);

export default AuthStack;