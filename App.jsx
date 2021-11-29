import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line import/extensions
import Hello from './src/components/Hello.jsx';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>world</Hello>
      <Hello style={{fontSize: 16, backgroundColor: '#000'}}>unko</Hello>
      <Text>Open up App.js to start working on your app!</Text>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
