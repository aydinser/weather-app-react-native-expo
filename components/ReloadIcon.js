import React from 'react'
import { View, Platform,Text, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function ReloadIcon({load}) {
const reloadBoth = Platform.OS == 'ios' ?  'ios-refresh' : 'md-refresh'
    return (
        <View style = {styles.Icon}>
            <Ionicons onPress={load} name={reloadBoth} size={24} color="grey"/>
        </View>
    )
}

const styles = StyleSheet.create ({
    Icon : {
        position : 'absolute',
        top : 85,
        right : 190
    }
})
