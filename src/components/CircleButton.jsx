import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

// eslint-disable-next-line react/function-component-definition
export default function CircleButton(props) {
  const { children } = props;

  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{ children }</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
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
