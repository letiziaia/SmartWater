import React from 'react';

import {
    Image,
    TouchableOpacity,
    SafeAreaView,
    View,
    StyleSheet
  } from 'react-native';


const TopBar = ({ styles, kitchenIconClick, dishIconClick, laundryIconClick, bathroomIconClick, showerIconClick }) => {


    return (
            <View style={styles.topBar} >
                <TouchableOpacity onPress={kitchenIconClick}>
                    <Image style={styles.tinyLogo} 
                            source={require('../assets/kitchen.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={dishIconClick}>
                <Image style={styles.tinyLogo} 
                        source={require('../assets/dish_washer.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={laundryIconClick}>
                    <Image style={styles.tinyLogo} 
                            source={require('../assets/washing_machine.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={bathroomIconClick}>
                    <Image style={styles.tinyLogo} 
                            source={require('../assets/bathroom.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={showerIconClick}>
                    <Image style={styles.tinyLogo} 
                            source={require('../assets/shower.png')} />
                </TouchableOpacity>
            </View>
    );
};

export default TopBar
