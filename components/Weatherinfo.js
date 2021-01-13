import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
 
export default function Weatherinfo({ currentweather }) {
    const { main: { temp},
        weather: [details],
        name,
    } = currentweather
    const { icon,main , description } = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.weatherinfo}>
            <Text style={styles.localName}>{name}</Text>
            <Text style={styles.descriptions}>{description}</Text>
            <Image style={styles.icon} source={{ uri: iconUrl }} />
            <Text style={styles.textFirst}>{temp}˚</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    localName:{
        fontWeight:'bold',
        color : '#808080',
        fontSize : 20,
    },
    weatherinfo: {
        alignItems: 'center',
    },
    descriptions: {
        marginTop:15,
        fontWeight:'bold',
        color:'#a6a6a6',
    },
    icon: {
        width: 100,
        height: 100
    },
    textFirst: {
        fontSize:40,
        color:'#808080'

    }
})