import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedbackBase } from 'react-native';

import AppBar from '../components/Appbar.jsx';
import Button from '../components/Button.jsx';

// eslint-disable-next-line react/function-component-definition
export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email address" placeholder="hogehoge@" />
        <TextInput style={styles.input} value="password" placeholder="password" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: 'white',
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
  footer: {
    flexDirection: 'row',
  },
});
