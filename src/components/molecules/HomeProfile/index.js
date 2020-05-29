import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ID_UserProfile} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={ID_UserProfile} style={styles.avatar} />
      <View style={styles.identity}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  identity: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
