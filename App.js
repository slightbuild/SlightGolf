import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MatchScreen from './src/screens/MatchScreen';

export default function App() {
  
  return (
    <View style={styles.Pagecontainer}>
      <MatchScreen />
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  Pagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});
