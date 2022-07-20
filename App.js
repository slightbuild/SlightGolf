import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


import HomeScreen from './src/screens/HomeScreen';
import MatchScreen from './src/screens/MatchScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('HOME') ;

  const color = 'black'
  const activeColor = 'green'
  
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.Pagecontainer}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <FontAwesome5 name='binoculars' size={30} color={activeScreen === 'HOME' ? activeColor : color} />
          </Pressable>

          <Pressable onPress={() => setActiveScreen('MATCHES')}>
            <FontAwesome5 name='user-friends' size={30} color={activeScreen === 'MATCHES' ? activeColor: color} />
          </Pressable>
          
          <Pressable>
            <FontAwesome5 name='golf-ball' size={30} color={color} />
          </Pressable>
        </View>
        <StatusBar style="auto" />
        {activeScreen === 'HOME' && <HomeScreen />}
        {activeScreen === 'MATCHES' &&  <MatchScreen />}
      </View> 
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  Pagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 150,
    paddingBottom: 30
  },


});
