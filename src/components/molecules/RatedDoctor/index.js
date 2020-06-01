import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IC_Star} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({avatar, name, description, onPress}) => {
  return (
    <TouchableNativeFeedback
      style={styles.container}
      background={TouchableNativeFeedback.Ripple('#FFFFFF', false)}
      onPress={onPress}>
      <View style={styles.profile}>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <View style={styles.identity}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{description}</Text>
      </View>
      <View style={styles.rating}>
        <IC_Star />
        <IC_Star />
        <IC_Star />
        <IC_Star />
        <IC_Star />
      </View>
    </TouchableNativeFeedback>
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
