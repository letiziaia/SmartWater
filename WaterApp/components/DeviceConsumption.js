import React, { useState } from 'react';
import {  
    singleDeviceConsumptionPerDayPerApartment,
    getApartment
  } from '../utility/dataProcessing';
import HeatmapComponent from './HeatmapComponent';
import TopBar from './TopBar';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const DeviceConsumption = () => {
  const [device, setDevice] = useState('Hydractiva_shower');

  const firstAppartment = getApartment(0);

  const deviceConsum = singleDeviceConsumptionPerDayPerApartment(device, firstAppartment)

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

  return (
    <View style={styles.mainBackground}>
      <TopBar styles={styles}
        kitchenIconClick={kitchenIconClick}
        dishIconClick={dishIconClick}
        laundryIconClick={laundryIconClick}
        bathroomIconClick={bathroomIconClick}
        showerIconClick={showerIconClick} />
      <HeatmapComponent data={deviceConsum} styles={styles} device={device} />
    </View>
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
    padding: 10,
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
    width: 40,
    height: 40,
  },
  topBar: {
      padding: 10,
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#2b2d42'
  },
});

export default DeviceConsumption