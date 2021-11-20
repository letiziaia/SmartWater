import React from 'react';
import HomePage from './HomePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceConsumption from './DeviceConsumption';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Devices" component={DeviceConsumption} />
    </Tab.Navigator>
  );
}

export default BottomTabs;