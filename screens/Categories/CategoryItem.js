import React, { useCallback } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { removeCategory } from '../../store/features/categories'
import Colors from '../../theme/Colors'

export default function CategoryItem({ category, style }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const goToSnippetsScreen = useCallback(() => {
    navigation.navigate('Snippets', {
      categoryId: category.id
    })
  }, [navigation])

  const confirmCategoryRemoval = useCallback(() => {
    Alert.alert(
      'Excluir',
      'Deseja excluir a categoria?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => {
            dispatch(removeCategory(category.id))
          }
        }
      ],
    )
  }, [category])

  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback
        onPress={goToSnippetsScreen}
        onLongPress={confirmCategoryRemoval}
      >
        <View style={styles.category}>
          <Text style={styles.text}>{category.name}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  category: {
    backgroundColor: Colors.primary5,
    paddingHorizontal: 24,
    paddingVertical: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: Colors.foreground,
    fontFamily: 'hack',
    fontSize: 18,
  }
})
