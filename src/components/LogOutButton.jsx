import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

// eslint-disable-next-line react/function-component-definition
export default function LogOutButton() {
  const navigation = useNavigation();
  function handlePress() {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)'
  },
});
