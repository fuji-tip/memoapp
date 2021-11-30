import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/Appbar.jsx';
import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';

// eslint-disable-next-line react/function-component-definition
export default function MemoListScreen() {
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

