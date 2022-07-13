import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import userdata from '../../assets/data/userdata';

const MatchScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.continer}>
        <Text>MatchScreen</Text>
            <View style={styles.users}>
                {userdata.map(user => (
                <View style={styles.user} key={user.id}>
                    <Image source={{ uri: user.image}} style={styles.image} />
                </View>
                ))}
            </View>       
        </View>    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,
    },
    continer: {
        padding: 10,
    }, 
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: 'green',
        borderWidth: 3,
    },
    user: {
        width: 100,
        height: 100,
        margin: 10,
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
})

export default MatchScreen