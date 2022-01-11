import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {　useNavigation　} from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf, map } from 'prop-types';
import { dateToString } from '../utils';

// eslint-disable-next-line react/function-component-definition
export default function MemoList(props) {
  const navigation = useNavigation();
  const { memos } = props;

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => navigation.navigate('MemoDetail', { id: item.id })}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1} >{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt.toDate())}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('are you sure?'); }}
          style={styles.memoDelete}
        >
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: map,
  })).isRequired,
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
