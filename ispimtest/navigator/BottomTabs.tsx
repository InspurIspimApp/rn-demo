import React from 'react';
import {getFocusedRouteNameFromRoute, RouteProp, TabNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Alarm from '../pages/Alarm';
import Account from '../pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';

export type BottomTabParamList = {
  Home: undefined;
  Alarm: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator();

type Route = RouteProp<RootStackParamList, 'BottomTabs'>

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(route: Route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Alarm':
      return '告警';
    case 'Account':
      return '账户';
    default:
      return '首页';
  }
}

class BottomTabs extends React.Component<IProps> {
  componentDidUpdate() {
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTitle: getHeaderTitle(route)
    });
  }

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: '首页'}}></Tab.Screen>
        <Tab.Screen
          name="Alarm"
          component={Alarm}
          options={{tabBarLabel: '告警'}}></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={Account}
          options={{tabBarLabel: '我的'}}></Tab.Screen>
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
