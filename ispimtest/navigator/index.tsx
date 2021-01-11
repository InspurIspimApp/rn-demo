import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '../pages/Detail';
import {Platform, StyleSheet} from 'react-native';
import demoList from '../src/demoList'
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  BottomTabs: {
    screen?: String;
  };
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
  componentDidMount() {
    console.log(112111)
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} options={{
            headerTitle: '首页'
          }}></Stack.Screen>
          <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
          {
            demoList.map((component, index) => {
              const Module = component.module.default;
              return <Stack.Screen name={component.title} component={Module} key={index}></Stack.Screen>
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
