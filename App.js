/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
//  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  return (
  <View style={styles.sectionContainer}>
    {children}
  </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ImageBackground source={{uri: 'https://wallpaperaccess.com/full/688378.jpg'}} style={styles.bgImage}>
          <View style={styles.bgContainer}>
            <View>
              <Text style={styles.cityText}>New Zealand</Text>
              <Text style={styles.temperatureText}>19&deg;</Text>
            </View>
            <View style={styles.weatherStatContainer}>
              <View>
                <Text style={styles.weatherStat}>64%</Text>
                <Text style={styles.weatherStatHeading}>Humidity</Text>
              </View>
              <View>
                <Text style={styles.weatherStat}>4km</Text>
                <Text style={styles.weatherStatHeading}>Visibility</Text>
              </View>
              <View>
                <Text style={styles.weatherStat}>Low 0</Text>
                <Text style={styles.weatherStatHeading}>UV Index</Text>
              </View>
            </View>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  bgImage: {
    height: Dimensions.get('window').height,
  },
  bgContainer: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cityText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  temperatureText: {
    color: 'white',
    fontSize: 90,
    lineHeight: 100,
    fontWeight: '900',
  },
  weatherStatContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    padding: 18,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  weatherStat: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  weatherStatHeading: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
});

export default App;
