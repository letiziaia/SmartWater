/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { Slider } from '@miblanchard/react-native-slider';

import Tree from './Tree.js';
import WaterSlogan from './WaterSlogan.js';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>


  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [level, setLevel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLevel(counter => (counter + 3) % 196);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Good Afternoon,">
          {/* Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits. */}
          <Text style={{ color: "skyblue", fontSize: 30 }}>{"You have saved\n"} </Text>
          <Text style={{ color: "skyblue", fontSize: 40 }}>💧 {level / 2.5}L{"\n"}</Text>
          <WaterSlogan />
        </Section>

        <Tree level={level} />
        {/* <Slider
          value={level}
          onValueChange={value => setLevel(value)}
          maximumValue={195}
          minimumValue={0}
          step={1}

        />
        <Text>Value: {level}</Text> */}
      </View>
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
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
