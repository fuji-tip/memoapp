import React from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';

import AppBar from '../components/Appbar.jsx';
import CircleButton from '../components/CircleButton.jsx';

// eslint-disable-next-line react/function-component-definition
export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021/12/24 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト。イーハトーヴォっっっｌ買い物リスト。イーハトーヴォっっっｌ買い物リスト。イーハトーヴォっっっｌ買い物リスト。イーハトーヴォっっっｌ買い物リスト。イーハトーヴォっっっｌ買い物リスト。
        </Text>
      </ScrollView>

      <CircleButton style={({ top: 160, bottom: 'auto' })} name="edit-2" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },

  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },

  memoBody: {
    paddingHorizontal: 32,
    paddingVertical: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
