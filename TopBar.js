import React from 'react';

import {
    Image,
    TouchableOpacity,
    SafeAreaView,
    View
  } from 'react-native';


const TopBar = () => {
    kitchenIconClick = () => {
        console.log('Touched kitchen')
    }

    dishIconClick = () => {
        console.log('Touched dishwasher')
    }    
      
    laundryIconClick = () => {
        console.log('Touched laundry')
    }

    bathroomIconClick = () => {
        console.log('Touched bathoroom')
    }

    return (
        <SafeAreaView>
            <View style={styles.topBar} >
            <TouchableOpacity onPress={kitchenIconClick}>
                <Image style={styles.tinyLogo} 
                        source={require('./assets/kitchen.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={dishIconClick}>
            <Image style={styles.tinyLogo} 
                    source={require('./assets/dish_washer.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={laundryIconClick}>
                <Image style={styles.tinyLogo} 
                        source={require('./assets/washing_machine.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={bathroomIconClick}>
                <Image style={styles.tinyLogo} 
                        source={require('./assets/bathroom.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={showerIconClick}>
                <Image style={styles.tinyLogo} 
                        source={require('./assets/shower.png')} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
};
 
const styles = StyleSheet.create({
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
    }
});
