import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import TinderCard from './src/components/TinderCard';
import userdata from './assets/data/userdata';
import AnimatedStack from './src/components/AnimatedStack';

export default function App() {
  
  return (
    <View style={styles.Pagecontainer}>
      <AnimatedStack
        data={userdata}
        renderItem={({ item }) => <TinderCard user={item} />}
      />
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  Pagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});
