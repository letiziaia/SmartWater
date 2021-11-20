import React, { useState } from 'react';
import { 
  totalConsumptionPerDevicePerApartment, 
  averageTempPerApartment,
  getApartment
} from '../utility/dataProcessing';
import PieComponent from './PieComponent';
import BarComponent from './BarComponent';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
  Alert,
  View,
  Text,
  Pressable
} from 'react-native';

const HomePage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}>Your laundry is ready!</Text>
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

export default HomePage