import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Stack from './navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
