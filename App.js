import React from 'react'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import CheatSheetNavigator from './navigation/CheatSheetNavigator'
import store from './store'

enableScreens()

export default function App() {
  const [fontLoaded] = useFonts({
    hack: require('./assets/fonts/Hack-Regular.ttf'),
    'hack-bold': require('./assets/fonts/Hack-Bold.ttf'),
    'hack-italic': require('./assets/fonts/Hack-Italic.ttf'),
    'hack-bold-italic': require('./assets/fonts/Hack-BoldItalic.ttf'),
  })

  if (!fontLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <CheatSheetNavigator />
      </NavigationContainer>
    </Provider>
  )
}
