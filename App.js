/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import Card, { Cards } from './src/components/Card';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './src/route'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {    
    container: {
      flex: 1
    }
  };

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={backgroundStyle}>
        <Card card={Cards.Card1} />
      </SafeAreaView> */}
      <MainRoute/>
    </NavigationContainer>
  );
};

export default App;
