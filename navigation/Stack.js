import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tv from '../screens/Tv';
import {View, Text, TouchableOpacity} from 'react-native';

const ScreenOne = ({navigation: {navigte}}) => (
  <TouchableOpacity onPress={() => navigte('Two')}>
    <Text>One</Text>
  </TouchableOpacity>
);

const ScreenTwo = () => (
  <View>
    <Text>Two</Text>
  </View>
);

const ScreenThree = () => (
  <View>
    <Text>Three</Text>
  </View>
);

const NavieStack = createNativeStackNavigator();

const Stack = () => (
  <NavieStack.Navigator>
    <NavieStack.Screen name="Tv" component={Tv}></NavieStack.Screen>
    <NavieStack.Screen name="Two" component={ScreenTwo}></NavieStack.Screen>
    <NavieStack.Screen name="Three" component={ScreenThree}></NavieStack.Screen>
  </NavieStack.Navigator>
);

export default Stack;
