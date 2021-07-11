import React, { useCallback, useRef, useState, useEffect } from 'react'
import { View, StyleSheet, Modal, TextInput, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import IconButton from '../../components/IconButton'
import Colors from '../../theme/Colors'
import * as DefaultStyles from '../../theme/DefaultStyles'
import { writeSnippet } from '../../store/features/snippets'

const SnippetInput = ({ visible, onClose, categoryId }) => {
  const dispatch = useDispatch()
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('')
  const codeInput = useRef()

  useEffect(() => {
    if (visible) {
      codeInput.current.focus()
    } else {
      setCode('')
      setDescription('')
    }
  }, [visible, codeInput])

  const addNewSnippet = useCallback(() => {
    if (!code.length || !description.length) {
      return
    }

    try {
      dispatch(writeSnippet({
        categoryId,
        code,
        description
      }))
      onClose()
    } catch (error) {
      Alert.alert(
        'Atenção',
        error.message
      )
    }

  }, [code, description, categoryId])

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.bottomSheet}>
          <View style={styles.codeInputContainer}>
            <TextInput
              ref={codeInput}
              style={styles.codeInput}
              value={code}
              onChangeText={setCode}
              multiline
              placeholder="Código"
              placeholderTextColor={Colors.foregroundAlpha}
            />
          </View>
          <View style={styles.descriptionInputContainer}>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              multiline
              onChangeText={setDescription}
              placeholder="Descrição"
              placeholderTextColor={Colors.foregroundAlpha}
            />
          </View>
          <View style={styles.addButtonContainer}>
            <IconButton
              name="check"
              elevation={0}
              backgroundColor={Colors.primary5}
              iconColor={Colors.primary2}
              size={32}
              onPress={addNewSnippet}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const inputContainer = {
  padding: 16,
  alignSelf: 'stretch',
  minHeight: 120
}

const inputStyle = {
  ...DefaultStyles.defaultText,
  fontSize: 14,
  padding: 0,
  margin: 0
}

const styles = StyleSheet.create({
  modalContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  bottomSheet: {
    backgroundColor: Colors.primary5,
    alignItems: 'center'
  },
  codeInputContainer: {
    ...inputContainer,
    backgroundColor: Colors.primary6
  },
  codeInput: {
    ...inputStyle
  },
  descriptionInputContainer: {
    ...inputContainer
  },
  descriptionInput: {
    ...inputStyle,
  },
  addButtonContainer: {
    marginBottom: 16
  }
})

export default SnippetInput
