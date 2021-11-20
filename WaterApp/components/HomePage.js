import React, { useState } from 'react';
import { 
  totalConsumptionPerDevicePerApartment, 
  averageTempPerApartment,
  getApartment
} from '../utility/dataProcessing';
import PieComponent from './PieComponent';
import BarComponent from './BarComponent';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

const HomePage = ({ navigation }) => {
  //console.log(options)
  //const styles = options.styles
  const firstAppartment = getApartment(0);

  const devices = [
    'Hydractiva_shower',
    'Kitchen_optima_faucet',
    'Optima_faucet',
    'Washing_machine',
    'Dishwasher',
  ];

  const colors = [
    '#ffcdb2ff',
    '#ffb4a2ff',
    '#e5989bff',
    '#b5838dff',
    '#6d6875ff',
  ];
  const consumptionPerDevice = totalConsumptionPerDevicePerApartment(devices, colors, firstAppartment)
  const averageTemp = averageTempPerApartment(devices, firstAppartment)

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.mainBackground}>
      <PieComponent data={consumptionPerDevice} styles={styles}/>
      <BarComponent data={averageTemp} styles={styles}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#928d9e',
    height: Dimensions.get('window').height
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    padding: 10,
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

export default HomePage