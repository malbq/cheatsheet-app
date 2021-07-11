import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '../theme/Colors'

const IconButton = ({
  name,
  backgroundColor,
  iconColor,
  size,
  elevation,
  onPress,
}) => {
  return (
    <View style={[
      styles.buttonContainer,
      { elevation: elevation ?? styles.buttonContainer.elevation }
    ]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[
          styles.button,
          {
            backgroundColor: backgroundColor ?? styles.button.backgroundColor
          }
        ]}>
          <MaterialIcons
            name={name}
            size={size ?? styles.icon.fontSize}
            color={iconColor ?? styles.icon.color}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 5
  },
  button: {
    backgroundColor: Colors.primary3,
    padding: 8
  },
  icon: {
    color: Colors.primary6,
    fontSize: 40
  }
})

export default IconButton
