import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {IC_RightArrow} from '../../../assets';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const ListDoctor = props => {
  const {name, description, profilePic, newMessage, arrow, onPress} = props;
  return (
    <TouchableNativeFeedback style={styles.container} onPress={onPress}>
      <Image source={profilePic} style={styles.imageProfile} />
      <View style={styles.identity}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message(newMessage)}>{description}</Text>
      </View>
      {arrow ? (
        <View style={styles.rightArrow}>
          <IC_RightArrow />
        </View>
      ) : null}
    </TouchableNativeFeedback>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  identity: {
    flex: 1,
    marginLeft: 12,
    alignItems: 'flex-start',
  },
  imageProfile: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.primary[400],
  },
  message: newMessage => ({
    color: newMessage ? colors.text.primary : colors.text.secondary,
    fontFamily: newMessage ? fonts.primary[600] : fonts.primary[300],
    lineHeight: 16,
    fontSize: 12,
  }),
  rightArrow: {
    alignSelf: 'center',
  },
});
