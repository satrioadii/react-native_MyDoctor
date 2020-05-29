import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ID_doctor1, IL_RatingStar, IC_Star} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {Gap} from '../../atoms';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={ID_doctor1} style={styles.avatar} />
      </View>
      <View style={styles.identity}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.profession}>Pediactrician</Text>
      </View>
      <View style={styles.rating}>
        <IC_Star />
        <IC_Star />
        <IC_Star />
        <IC_Star />
        <IC_Star />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  identity: {
    marginLeft: 12,
    flex: 1,
  },
  rating: {
    flexDirection: 'row',
    width: 108,
    justifyContent: 'space-evenly',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
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
