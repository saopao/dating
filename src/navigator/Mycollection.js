'use strict';

import React from 'react';
import {
    createStackNavigator
} from "react-navigation";
import SearchScreen from '../mycollection/search';
import MyCollectionScreen from '../mycollection/index'
import GemDisplayScreen from '../display/gem/index'
import CollectionDisplayScreen from '../display/collection/index'
import DisplayListScreen from '../display/gem/list'

const AuthStack = createStackNavigator(
    {
      MyCollection: {
        screen: MyCollectionScreen
      },
      Search: {
        screen: SearchScreen,
      },
      GemDisplay: {
        screen: GemDisplayScreen
      },
      CollectionDisplay: {
        screen: CollectionDisplayScreen
      },
      DisplayList: {
        screen: DisplayListScreen
      },
    },
    {
      initialRouteName: 'MyCollection',
      headerMode: 'none',
      navigationOptions: {
          header: null
      }
    }
);

export default AuthStack;