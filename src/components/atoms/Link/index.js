import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Link = ({text, textSize, underline, align, onPress}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text(textSize, underline, align)} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (textSize, underline, align) => ({
    fontSize: textSize,
    textDecorationLine: underline ? 'underline' : 'none',
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textAlign: align ? align : 'left',
  }),
});
