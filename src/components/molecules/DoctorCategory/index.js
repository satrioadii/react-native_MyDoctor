import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const DoctorCatgory = props => {
  const {category, IconCategory, onPress} = props;
  return (
    <View style={styles.contentWrap}>
      <TouchableNativeFeedback
        style={styles.container}
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#ffffff', false)}>
        <IconCategory style={styles.illustration} />
        <Text style={styles.text}>Saya butuh</Text>
        <Text style={styles.textCategory}>{category}</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default DoctorCatgory;

const styles = StyleSheet.create({
  contentWrap: {
    marginRight: 10,
  },
  container: {
    padding: 12,
    backgroundColor: colors.category.background,
    borderRadius: 10,
    alignSelf: 'flex-start',
    width: 100,
    height: 130,
  },
  illustration: {marginBottom: 28},
  text: {
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
  textCategory: {
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
  },
});
