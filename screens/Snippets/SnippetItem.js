import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import Colors from '../../theme/Colors'

export default function SnnipetItem({ snippet }) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <View style={styles.codeContainer}>
          <Text style={styles.snippetText}>{snippet.code}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.snippetText}>{snippet.description}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary5,
    borderRadius: 8,
    marginBottom: 24,
    overflow: 'hidden'
  },
  codeContainer: {
    backgroundColor: Colors.primary6,
    paddingHorizontal: 12,
    paddingVertical: 16
  },
  descriptionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16
  },
  snippetText: {
    color: Colors.foreground
  }
})
