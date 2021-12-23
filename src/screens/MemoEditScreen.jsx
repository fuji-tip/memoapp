import React from 'react';
import {
  View, Text, StyleSheet, TextInput, KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/Appbar';
import CircleButton from '../components/CircleButton';

// eslint-disable-next-line react/function-component-definition
export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input}></TextInput>
      </View>
      <CircleButton name="check" />
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
