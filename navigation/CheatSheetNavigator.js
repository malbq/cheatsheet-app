import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from '../screens/Categories/CategoriesScreen'
import SnippetsScreen from '../screens/Snippets/SnippetsScreen'
import Colors from '../theme/Colors'

const Stack = createStackNavigator()

export default function CheatSheetNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.foreground
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="Snippets"
        component={SnippetsScreen}
        options={{
          title: '',
          headerRight: () => <Image source={require('../assets/logo-xs.png')} />
        }}
      />
    </Stack.Navigator>
  )
}
