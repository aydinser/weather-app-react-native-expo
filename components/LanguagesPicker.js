import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function LanguagesPicker({ language, setLanguage }) {
    return (
        <View style={styles.pickerStyles}>
            <Picker selectedValue={language} onValueChange={(item) => setLanguage(item)}
                mode='dropdown' itemStyle={{ fontSize: 20 }}>
                <Picker.Item label="AR" value="ar" />
                <Picker.Item label="DA" value="da" />
                <Picker.Item label="DE" value="de" />
                <Picker.Item label="EL" value="el" />
                <Picker.Item label="EN" value="en" />
                <Picker.Item label="FI" value="fi" />
                <Picker.Item label="FR" value="fr" />
                <Picker.Item label="RU" value="ru" />
                <Picker.Item label="SV" value="se" />
                <Picker.Item label="SP" value="sp" />
                <Picker.Item label="TR" value="tr" />
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
        right: 15,
        height: 50,
        width: 100,
    }
})