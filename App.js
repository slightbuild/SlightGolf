import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.Pagecontainer}>
        <View style={styles.card}>
          <ImageBackground source={{
            uri: 'https://media.istockphoto.com/photos/close-up-golf-ball-on-green-grass-picture-id1097225062?k=20&m=1097225062&s=612x612&w=0&h=dxHG5ZL84pWjgVKD2xlB0CzCMMAhHVdWdsMVLYMKaRU='}}
              style={styles.img}>
                <Text style={styles.name}> Torian </Text>
                <Text style={styles.desc}> I'm the greatest alive </Text>
            <StatusBar style="auto" />
            
          </ImageBackground>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Pagecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
    
   
  },
  card: {
    height: '55%',
    width: '75%',
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 50, 

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  name: {
    fontSize: 40,
    color: 'silver',
    fontWeight: 'bold',
    marginTop: 20,
    marginRight: 10,
  },
  desc: {
    fontSize: 20,
    color: 'white',
    flexWrap: 'wrap',
    marginBottom: 20,
  }
});
