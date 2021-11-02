import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tv from '../screens/Tv';
import Movies from '../screens/Movies';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Search">
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Moives" component={Movies} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;
