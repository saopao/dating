import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../home/index";
import ClassScreen from "../class/index";
// import MessageScreen from "../message/index";
import MessageScreen from "../screens/index";
import MineScreen from "../mine/index";
import { MainTabBar } from "./MainTabBar";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          let icon = null;
          if (focused) {
            icon = require('./img/collection.png');
          } else {
            icon = require('./img/explore.png');
          }
          return <Image source={icon} style={styles.icon} />
        }
      }
    },
    Class: {
      screen: ClassScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          let icon = null;
          if (focused) {
            icon = require('./img/collection.png');
          } else {
            icon = require('./img/explore.png');
          }
          return <Image source={icon} style={styles.icon} />
        }
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          let icon = null;
          if (focused) {
            icon = require('./img/collection.png');
          } else {
            icon = require('./img/explore.png');
          }
          return <Image source={icon} style={styles.icon} />
        }
      }
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          let icon = null;
          if (focused) {
            icon = require('./img/collection.png');
          } else {
            icon = require('./img/explore.png');
          }
          return <Image source={icon} style={styles.icon} />
        }
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    scrollEnabled: false,
    initialRouteName: 'Home',
    tabBarComponent: MainTabBar,
    lazy: true,
    tabBarOptions: {
      inactiveTintColor: 'rgb(102,102,102)',
      activeTintColor: 'rgb(0,141,255)',
      showLabel: true,
      showIcon: true,
    },
    backBehavior: 'none',
    navigationOptions: {
      header: null
    }
  }
);

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  createIcon: {
    height: 36,
    width: 36,
  }
});

export default TabNavigator;