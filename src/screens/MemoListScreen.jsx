import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';

// eslint-disable-next-line react/function-component-definition
export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />

      <CircleButton
        name="plus"
        onPress={() => navigation.navigate("MemoCreate") }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
