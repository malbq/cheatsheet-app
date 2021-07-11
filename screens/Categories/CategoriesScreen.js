import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native'
import * as Notifications from 'expo-notifications'
import CategoryItem from './CategoryItem'
import CategoryInput from './CategoryInput'
import IconButton from '../../components/IconButton'
import Colors from '../../theme/Colors'
import { floatingContainer } from '../../theme/DefaultStyles'
import { getCategories } from '../../store/features/categories'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

function CategoriesScreen() {
  const categories = useSelector(getCategories)
  const [isAddModalVisible, setAddModalVisible] = useState(false)

  const triggerNot = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'New category',
        body: 'New category was added'
      },
      trigger: {
        seconds: 3
      }
    })
  }

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      notification => {
        console.log(notification)
      }
    )

    return () => {
      subscription.remove()
    }
  }, [])

  const renderItem = ({ item }) => (
    <CategoryItem
      style={styles.listItem}
      category={item}
    />
  )

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.list}
        data={categories}
        renderItem={renderItem}
        keyboardShouldPersistTaps="always"
      />
      <View style={styles.addButtonContainer}>
        <IconButton
          name="add"
          onPress={triggerNot}
          // onPress={() => setAddModalVisible(true)}
        />
      </View>
      <CategoryInput
        visible={isAddModalVisible}
        onClose={() => setAddModalVisible(false)}
      />
    </SafeAreaView>
  )
}

CategoriesScreen.propTypes = {
  navigation: PropTypes.object
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flexGrow: 1
  },
  list: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 64,
  },
  listItem: {
    marginBottom: 16
  },
  addButtonContainer: {
    ...floatingContainer
  }
})
