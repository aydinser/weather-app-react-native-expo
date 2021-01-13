import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import * as Location from 'expo-location'
import Weatherinfo from './components/Weatherinfo'
import UnitsPicker from './components/UnitsPicker'
import LanguagesPicker from './components/LanguagesPicker'
import ReloadIcon from './components/ReloadIcon'
import WeatheDeatails from './components/WeatherDetails'
import Turkish from "./language/Turkish"
import Svenska from "./language/Svenska"


const API_KEY = 'c62f380b6a5cd99945db9e273cc8689f'

const WEATHER_URL_RAW = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCureentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    load()
  }, [unitsSystem])
  async function load() {
    setCureentWeather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMessage('App needs access to location!!')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords

      const weatherUrl = `${WEATHER_URL_RAW}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&lang=${language}&appid=${API_KEY}`


      const response = await fetch(weatherUrl)

      const result = await response.json()

      if (response.ok) {
        setCureentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if (currentWeather && language == "tr")  {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        <View style={styles.mainStyle}>
          <LanguagesPicker language={language} setLanguage={setLanguage} />
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <ReloadIcon load={load}/>
          <Weatherinfo currentweather={currentWeather}/>
        </View>
        <Turkish currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    )
  } 
  if (currentWeather && language == "se")  {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        <View style={styles.mainStyle}>
          <LanguagesPicker language={language} setLanguage={setLanguage} />
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <ReloadIcon load={load}/>
          <Weatherinfo currentweather={currentWeather}/>
        </View>
        <Svenska currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    )
  } 
  if (currentWeather)  {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"  />
        <View style={styles.mainStyle}>
          <LanguagesPicker language={language} setLanguage={setLanguage} />
          <UnitsPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />
          <ReloadIcon load={load}/>
          <Weatherinfo currentweather={currentWeather}/>
        </View>
        <WeatheDeatails currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    )
  } 
  else if (errorMessage) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load}/>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color="" />
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius:60,
    flex: 1,
    justifyContent: 'center',
  },
  mainStyle: {
    justifyContent: 'center',
    flex: 1
  }
})
