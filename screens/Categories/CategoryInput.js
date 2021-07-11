import React, { useState, useEffect, useRef, useCallback } from 'react'
import { View, StyleSheet, TextInput, Modal, Dimensions, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import IconButton from '../../components/IconButton'
import Colors from '../../theme/Colors'
import { writeCategory } from '../../store/features/categories'

export default function CategoryItem({ visible, onClose }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const input = useRef()

  useEffect(() => {
    if (visible) {
      input.current.focus()
    } else {
      setName('')
    }
  }, [visible, input])

  const addNewCategory = useCallback(() => {
    if (!name.length)  {
      return
    }

    try {
      dispatch(writeCategory(name))
      onClose()
    } catch (error) {
      Alert.alert(
        'Warning',
        error.message
      )
    }
  }, [dispatch, name, setName, onClose])

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.shadowLong}>
          <View style={styles.shadowShort}>
            <View style={styles.inputContainer}>
              <TextInput
                ref={input}
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
              <IconButton
                name="check"
                elevation={0}
                backgroundColor={Colors.primary5}
                iconColor={Colors.primary2}
                size={32}
                onPress={addNewCategory}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32
  },
  shadowLong: {
    backgroundColor: Colors.primary5,
    borderRadius: 8,
    elevation: 24,
  },
  shadowShort: {
    backgroundColor: Colors.primary5,
    borderRadius: 8,
    elevation: 12,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary5,
    borderRadius: 8,
    elevation: 6,
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 24,
    overflow: 'hidden',
    width: Dimensions.get('window').width - 48
  },
  input: {
    color: Colors.foreground,
    fontFamily: 'hack',
    fontSize: 18,
    borderBottomColor: Colors.primary4,
    borderBottomWidth: 2,
    flexGrow: 1,
    marginRight: 16
  },
  submitContainer: {
    borderRadius: 50,
    overflow: 'hidden'
  },
  submit: {
    backgroundColor: Colors.primary5,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
