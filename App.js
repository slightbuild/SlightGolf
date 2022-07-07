import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import TinderCard from './src/components/TinderCard';
import userdata from './assets/data/userdata';




export default function App() {
  return (
    <View style={styles.Pagecontainer}>
      <TinderCard user={userdata[0]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Pagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
