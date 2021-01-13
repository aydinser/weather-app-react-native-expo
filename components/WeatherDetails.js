import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'


export default function WeatherDetails({ currentWeather, unitsSystem }) {
    const { main: { feels_like, humidity, pressure } , wind : {speed},} = currentWeather

    const windSpeed = unitsSystem == ' metric' ? `${Math.round(speed)} m/s` :  `${Math.round(speed)} miles/h` 
    return (
        <View style={styles.details}>
            <View style={styles.detailsFeels}>
                <View style={{ ...styles.detailsBox, borderRightWidth: 1, borderRightColor: 'black' }}>
                    <View style={styles.detailsFeels}>
                        <FontAwesome5 name="temperature-low" size={30} color="black" />
                        <View style={styles.detailsItem}>
                            <Text>Feels like :  </Text>
                            <Text style={styles.textStyle}>{feels_like}˚</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                <View style={styles.detailsFeels}>
                        <MaterialCommunityIcons name="water" size={30} color="black" />
                        <View style={styles.detailsItem}>
                            <Text>humidity :  </Text>
                            <Text style={styles.textStyle}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...styles.detailsFeels, borderTopWidth: 1, borderTopColor:'grey'}}>
                <View style={{ ...styles.detailsBox, borderRightWidth: 1, borderRightColor: 'grey' }}>
                    <View style={styles.detailsFeels}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color="black" />
                        <View style={styles.detailsItem}>
                            <Text>Wind speed :  </Text>
                            <Text style={styles.textStyle}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                <View style={styles.detailsFeels}>
                        <MaterialCommunityIcons name="speedometer" size={30} color="black" />
                        <View style={styles.detailsItem}>
                            <Text>Pressure :  </Text>
                            <Text style={styles.textStyle}>{pressure}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    details: {
        marginTop: 'auto',
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    detailsFeels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsBox: {
        flex: 1,
        padding: 20
    },
    detailsItem: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textStyle: {
        fontSize: 15,
        color: 'red',
        fontWeight: '700',
        margin: 7
    }
})