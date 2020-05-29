import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const ComponentButton = ({type, title, onPress, children}) => {
  if (type === 'icon-only') {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
  return (
    <TouchableNativeFeedback style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

export default ComponentButton;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  }),
});
