import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.pickerStyles}>
            <Picker selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)} 
            mode='dropdown' itemStyle={{fontSize : 20}}>
                <Picker.Item label="C˚" value="metric" />
                <Picker.Item label="F˚" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerStyles: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -10
            },
            android: {
                top: 30
            },
        }),
        left: 15,
        height: 50,
        width: 100,
    }
})