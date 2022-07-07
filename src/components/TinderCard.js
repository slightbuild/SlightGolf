import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const TinderCard = props => {
    const {name, image, desc} = props.user
  return (
        <View style={styles.card}>
          <ImageBackground source={{
            uri: image}}
              style={styles.img}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
          </ImageBackground>
        </View>
  )
}

export default TinderCard

const styles = StyleSheet.create({
   
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
})

