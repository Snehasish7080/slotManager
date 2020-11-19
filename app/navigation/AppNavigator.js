import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SlotDetailScreen from '../screens/SlotDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SlotDetail" component={SlotDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
