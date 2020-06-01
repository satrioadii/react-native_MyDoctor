import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Input = ({label, placeholder, value, disable, secure}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input(disable)}
        value={value}
        editable={disable ? false : true}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: disable => ({
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    color: disable ? colors.text.disable : colors.text.primary,
    borderColor: disable ? colors.disable : colors.border,
    backgroundColor: disable ? colors.disable : colors.white,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
