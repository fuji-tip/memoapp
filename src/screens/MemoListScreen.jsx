import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';

import { getDocs, getFirestore, collection, query, orderBy } from 'firebase/firestore/lite';

import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';
import LogOutButton from '../components/LogOutButton.jsx';
import { getAuth } from 'firebase/auth';
import Button from '../components/Button.jsx';
import Loading from '../components/Loading.jsx';

// eslint-disable-next-line react/function-component-definition
export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

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
      setLoading(true);
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
        setLoading(false);
        //console.log(userMemos);
      }, (error) => {
        //console.log(error);
        setLoading(false);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成してみよう</Text>
          <Button
            style={emptyStyles.button}
            label='作成する'
            onPress={() => { navigation.navigate('MemoCreate') }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />

      <CircleButton
        name="plus"
        onPress={() => navigation.navigate('MemoCreate')}
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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
