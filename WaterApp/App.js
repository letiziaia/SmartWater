/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { 
  totalConsumptionPerDevicePerApartment, 
  singleDeviceConsumptionPerDayPerApartment,
  averageTempPerApartment,
  getApartment
} from './utility/dataProcessing';
import PieComponent from './components/PieComponent';
import HeatmapComponent from './components/HeatmapComponent';
import BarComponent from './components/BarComponent';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import DeviceConsumption from './components/DeviceConsumption';
import BottomTabs from './components/BottomTabs';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>        
        <Tab.Screen         
          name="Home"          
          component={HomePage}  
          options = {{
            tabBarLabel: '',
            tabBarIcon: (() => (<Image style={styles.tinyLogo} source={require('./assets/oras.png')}/>))
          }}             
         />       
        <Tab.Screen
          name="Consumption by Device"
          component={DeviceConsumption}
          options = {{
            tabBarLabel: '',
            tabBarIcon: (() => (<Image style={styles.tinyLogo} source={require('./assets/devices.jpg')}/>))
          }} 
        />
        <Tab.Screen         
          name="Tree"          
          component={HomePage}  
          options = {{
            tabBarLabel: '',
            tabBarIcon: (() => (<Image style={styles.tinyLogo} source={require('./assets/tree/ezgif-frame-196.jpg')}/>))
          }}             
         /> 
      </Tab.Navigator> 
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#6d6875ff',
    height: Dimensions.get('window').height
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  topBar: {
      padding: 10,
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#6d6875ff'
  },
});

export default App;
