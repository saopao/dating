import { createStackNavigator } from 'react-navigation';
import TabNavigator from "./TabNavigator";

const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: 'Tabs',
    headerMode: 'screen',
    headerLayoutPreset: 'center',
    navigationOptions: {
      header: null,
    }
  }
);

export default AppStack;