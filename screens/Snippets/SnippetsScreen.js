import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import SnippetItem from './SnippetItem'
import SnippetInput from './SnippetInput'
import IconButton from '../../components/IconButton'
import Colors from '../../theme/Colors'
import { floatingContainer } from '../../theme/DefaultStyles'
import { getCategory } from '../../store/features/categories'
import { getSnippets } from '../../store/features/snippets'

export default function SnippetsScreen({ route }) {
  const { categoryId } = route.params
  const category = useSelector(getCategory(categoryId))
  const snippets = useSelector(getSnippets(categoryId))
  const [isAddModalVisible, setAddModalVisible] = useState(false)

  const renderItem = ({ item }) => (
    <SnippetItem snippet={item} />
  )

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{category.name}</Text>
      </View>
      <FlatList
        data={snippets}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
      <View style={styles.addButtonContainer}>
        <IconButton
          name="add"
          onPress={() => setAddModalVisible(true)}
        />
      </View>
      <SnippetInput
        visible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
        categoryId={categoryId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  titleContainer: {
    marginBottom: 16
  },
  title: {
    fontFamily: 'hack',
    fontSize: 18,
    color: Colors.foreground
  },
  addButtonContainer: {
    ...floatingContainer
  }
})
