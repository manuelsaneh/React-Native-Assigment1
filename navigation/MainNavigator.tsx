import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import {MainNavigatorStackParamList} from './MainNavigator.types';

const MainStackNavigator =
  createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen name="Home" component={Home} />
      <MainStackNavigator.Screen name="Details" component={Details} />
      <MainStackNavigator.Screen name="Settings" component={Settings} />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
