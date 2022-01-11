import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import CircleButton from '../components/CircleButton.jsx';
import { dateToString } from '../utils/index.js';

// eslint-disable-next-line react/function-component-definition
export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);
  let unsubscribe = () => {};

  useEffect(() => {
    const { currentUser } = getAuth();
    if (currentUser) {
      const db = getFirestore();
      unsubscribe = onSnapshot(doc(db, `users/${currentUser.uid}/memos/${id}`), (docd) => {
        const data = docd.data();
        setMemo({
          id: docd.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt,
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt.toDate())}</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>

      <CircleButton
        style={({ top: 60, bottom: 'auto' })}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />

    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

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
