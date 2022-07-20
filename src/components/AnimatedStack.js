import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Animated,{ 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  useAnimatedGestureHandler, 
  useDerivedValue,
  interpolate,
  runOnJS,}
  from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import birdie from '../../assets/data/birdie.png'
import boogie from '../../assets/data/boogie.png'



const ROTATION = 60;
const SWIPE_VELOCITY = 800;


const AnimatedStack = (props) => {
    const { data, renderItem, onSwipeRight, onSwipeLeft } = props;

const [currentIndex, setCurrentIndex] = useState(0);
const [NextIndex, setNextIndex] = useState(currentIndex + 1);


const currentProfile = data[currentIndex];
const nextProfile = data[NextIndex]

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

const NextCMstyle = useAnimatedStyle(() => ({
  transform: [
    {
      scale: interpolate(
        tranlateX.value, 
      [-hiddentranslateX, 0, hiddentranslateX], 
      [ 1,0.5, 1],
      ),
    },
  ],
      opacity: interpolate(
        tranlateX.value, 
      [-hiddentranslateX, 0, hiddentranslateX], 
      [1, 0.7, 1],
      ),
}));

const birdieStyle = useAnimatedStyle(() => ({
  opacity: interpolate(
    tranlateX.value, 
  [0, hiddentranslateX], 
  [0, 1,]
  ),
}));

const boogieStyle = useAnimatedStyle(() => ({
  opacity: interpolate(
    tranlateX.value, 
    [0, -hiddentranslateX], 
    [0, 1]
  ),
}));

const gestureHandler = useAnimatedGestureHandler({
  onStart: (_, context) => {
    context.startX = tranlateX.value
  },
  onActive: (event, context) => {
    tranlateX.value = context.startX + event.translationX;
  },
  onEnd: (event) => {
    if (Math.abs(event.velocityX) < SWIPE_VELOCITY){
      tranlateX.value = withSpring(0);
      return;
    }

    tranlateX.value = withSpring(
      hiddentranslateX * Math.sign(event.velocityX),
      {},
      () =>     runOnJS(setCurrentIndex)(currentIndex + 1)
    );

    const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
    onSwipe && runOnJS(onSwipe)(currentProfile);
  },
});

useEffect(() => {
  tranlateX.value = 0;
  setNextIndex(currentIndex + 1)
}, [currentIndex])


  return (

    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextProfile}>
          <Animated.View style={[styles.animatedstyles, NextCMstyle]}>       
            {renderItem({ item: nextProfile})}
          </Animated.View>
    </View>
)}
{currentProfile && (
 
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedstyles, CMstyle]}>
          <Animated.Image source={birdie} style={[styles.birdie, birdieStyle]} />
          <Animated.Image source={boogie} style={[styles.birdie, boogieStyle]} />
          {renderItem({ item: currentProfile})}
        </Animated.View>
      </PanGestureHandler>
)}
    </View>
    );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  animatedstyles: {
    flex: 1,
    height: '70%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextProfile: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  birdie: {
    width: '30%',
    height: '10%',
    bottom: 5,
  }
  
});

export default AnimatedStack;