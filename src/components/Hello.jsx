import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { string, bool, shape, number } from 'prop-types';

// eslint-disable-next-line func-names
const Hello = function (props) {
  const { bang, children, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children} ${bang ? '!' : ''}`}
      </Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
