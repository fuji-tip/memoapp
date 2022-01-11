import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { getDocs, getFirestore, collection, query, orderBy } from 'firebase/firestore/lite';

import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';
import LogOutButton from '../components/LogOutButton.jsx';
import { getAuth } from 'firebase/auth';

// eslint-disable-next-line react/function-component-definition
export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(async () => {
    const db = getFirestore();
    const { currentUser } = getAuth();
    let unsubscribe = () => {};

    if (currentUser) {
      const docSnap = await getDocs(query(collection(db, `users/${currentUser.uid}/memos`), orderBy('updatedAt', 'desc')));
      const userMemos = [];

      unsubscribe = docSnap.forEach((doc) => {
        const data = doc.data();
        userMemos.push({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt,
        });
        setMemos(userMemos);
        console.log(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);

  //console.log(memos);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />

      <CircleButton
        name="plus"
        onPress={() => navigation.navigate('MemoCreate') }
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
