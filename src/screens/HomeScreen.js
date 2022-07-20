import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import TinderCard from '../components/TinderCard';
import userdata from '../../assets/data/userdata'
import AnimatedStack from '../components/AnimatedStack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

export default function HomeScreen() {
  const color = 'black'

  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name)
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right", user.name)
  };


  
  return (
    

    <View style={styles.swipeStack}>
      <AnimatedStack
        data={userdata}
        renderItem={({ item }) => <TinderCard user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />

     <View style={styles.bottomNavigation}>
       <Pressable onPress={() => console.warn('pressed')}>
        <Feather name='message-circle' size={25} color={color} />
       </Pressable>

       <Pressable>
        <Entypo name='location' size={25} color={color} /> 
       </Pressable>
       
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
  swipeStack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
   
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 250,
    backgroundColor: 'white',
  }
});