import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, Image, ImageBackground } from 'react-native';
import TinderCard from './src/components/TinderCard';
import userdata from './assets/data/userdata';
import Animated,{ 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  useAnimatedGestureHandler, 
  useDerivedValue,
  interpolate,}
  from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


const ROTATION = 60;


export default function App() {
const [currentIndex, setCurrentIndex] = useState(0);
const [NexttIndex, setNextIndex] = useState(currentIndex + 1);


const currentProfile = userdata[currentIndex];
const nextProfile = userdata[NexttIndex]

const {width: screenWidth} = useWindowDimensions();

const hiddentranslateX = 2 * screenWidth;

const tranlateX = useSharedValue(0);
const rotate = useDerivedValue(
  () => interpolate(tranlateX.value, [0, hiddentranslateX], [0, ROTATION]) + 'deg',
  );


const CMstyle = useAnimatedStyle(() => ({
transform: [
  {
    translateX: tranlateX.value,
  },
  {
    rotate: rotate.value,
  }
],
}))

const gestureHandler = useAnimatedGestureHandler({
  onStart: (_, context) => {
    context.startX = tranlateX.value
  },
  onActive: (event, context) => {
    tranlateX.value = context.startX + event.translationX;
  },
  onEnd: () => {

  },
});

  return (
    <View style={styles.Pagecontainer}>

      <View style={styles.nextProfile}>
          <TinderCard user={nextProfile}/>
      </View>
      
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedstyles, CMstyle]}>
          <TinderCard user={currentProfile}/>
          <StatusBar style="auto" />
        </Animated.View>
      </PanGestureHandler>

    </View>
    );
}

const styles = StyleSheet.create({
  Pagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedstyles: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextProfile: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  
  }
});
