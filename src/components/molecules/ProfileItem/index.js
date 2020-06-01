import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';

const ProfileItem = ({label, value, last}) => {
  return (
    <View style={styles.container(last)}>
      <View style={styles.contentWrap}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: last => ({
    paddingVertical: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: last ? 0 : 1,
  }),
  contentWrap: {paddingHorizontal: 16},
  label: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  value: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 6,
  },
});
