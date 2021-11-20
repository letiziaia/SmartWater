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
  Dimensions,
  Modal,
  Alert,
  Text,
  Pressable,
} from 'react-native';

const DeviceConsumption = () => {
  const [device, setDevice] = useState('Hydractiva_shower');
  const [modalVisible, setModalVisible] = useState(false);

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Possible water leakage — check the washing machine!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
      </Pressable>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#928d9e',
  },
  buttonClose: {
    backgroundColor: "#e5989bff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: "center"
  },
});

export default DeviceConsumption