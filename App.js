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
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Styles from './src/styles/AppStyles';

/* Fetch and add data using react hooks useState, useEffect and the function fetch */

const Section = ({children, title}): Node => {
  return (
  <View style={Styles.sectionContainer}>
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
      <ImageBackground source={{uri: 'https://wallpaperaccess.com/full/688378.jpg'}} style={Styles.bgImage}>
          <View style={Styles.bgContainer}>
            <View>
              <Text style={Styles.cityText}>New Zealand</Text>
              <Text style={Styles.temperatureText}>19&deg;</Text>
            </View>
            <View style={Styles.weatherStatContainer}>
              <View>
                <Text style={Styles.weatherStat}>64%</Text>
                <Text style={Styles.weatherStatHeading}>Humidity</Text>
              </View>
              <View>
                <Text style={Styles.weatherStat}>4km</Text>
                <Text style={Styles.weatherStatHeading}>Visibility</Text>
              </View>
              <View>
                <Text style={Styles.weatherStat}>Low 0</Text>
                <Text style={Styles.weatherStatHeading}>UV Index</Text>
              </View>
            </View>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
