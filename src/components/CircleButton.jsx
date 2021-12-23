import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { shape, string } from 'prop-types';
import { Feather } from '@expo/vector-icons';

// eslint-disable-next-line react/function-component-definition
export default function CircleButton(props) {
  const { style, name } = props;

  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467fD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 8, height: 8 },
    shadowRadius: 8,
    elevation: 8,
  },

  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
