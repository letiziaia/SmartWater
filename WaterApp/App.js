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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';



const App: () => Node = () => {
  const [device, setDevice] = useState('Hydractiva_shower');

  const firstAppartment = getApartment(0);

  const devices = [
    'Hydractiva_shower',
    'Kitchen_optima_faucet',
    'Optima_faucet',
    'Washing_machine',
    'Dishwasher',
  ];

  const kitchenIconClick = () => {
    setDevice('Kitchen_optima_faucet')
  }

  const dishIconClick = () => {
    setDevice('Dishwasher')
  }    
    
  const laundryIconClick = () => {
      setDevice('Washing_machine')
  }

  const bathroomIconClick = () => {
      setDevice('Optima_faucet')
  }

  const showerIconClick = () => {
      setDevice('Hydractiva_shower')
  }
  const colors = [
    '#ffcdb2ff',
    '#ffb4a2ff',
    '#e5989bff',
    '#b5838dff',
    '#6d6875ff',
  ];

  const consumptionPerDevice = totalConsumptionPerDevicePerApartment(devices, colors, firstAppartment)
  const showerAccumulate = singleDeviceConsumptionPerDayPerApartment(device, firstAppartment)
  const averageTemp = averageTempPerApartment(devices, firstAppartment)


  const backgroundStyle = {
    backgroundColor: '#6d6875ff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TopBar styles={styles}
        kitchenIconClick={kitchenIconClick}
        dishIconClick={dishIconClick}
        laundryIconClick={laundryIconClick}
        bathroomIconClick={bathroomIconClick}
        showerIconClick={showerIconClick} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <PieComponent data={consumptionPerDevice} styles={styles} />
          <HeatmapComponent data={showerAccumulate} styles={styles} device={device} />
          <BarComponent data={averageTemp} styles={styles}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 50,
    height: 50,
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
