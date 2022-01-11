import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import CircleButton from '../components/CircleButton';

// eslint-disable-next-line react/function-component-definition
export default function MemoCreateScreen(props) {
  const [bodyText, setBodyText] = useState('');
  const { navigation } = props;

  function handlePress() {
    const db = getFirestore();
    const { currentUser } = getAuth();
    try {
      const docRef = addDoc(collection(db, `users/${currentUser.uid}/memos`), {
        bodyText,
        updatedAt: new Date(),
      });
      console.log('Created!', docRef.id);
      navigation.goBack();
    } catch(error) {
      console.log('Error!', error);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => { setBodyText(text); }}
          value={bodyText}
          multiline
          style={styles.input}
          autoFocus
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
  }
});
