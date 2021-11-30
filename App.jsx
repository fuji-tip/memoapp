import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/Appbar.jsx';
import MemoList from './src/components/MemoList.jsx';
import CircleButton from './src/components/CircleButton.jsx';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />

      <MemoList />

      <CircleButton>あ</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
