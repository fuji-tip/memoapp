import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, Text, StyleSheet, TextInput, KeyboardAvoidingView, BackHandler, Alert
} from 'react-native';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import CircleButton from '../components/CircleButton';

// eslint-disable-next-line react/function-component-definition
export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = getAuth();
    if (currentUser) {
      const db = getFirestore();
      const ref = doc(db, `users/${currentUser.uid}/memos/${id}`);
      setDoc(ref, {
        bodyText: body,
        updatedAt: new Date(),
      }, { merge : true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
          autoCapitalize='none'
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardAvoidingView>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};

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
  },
});
