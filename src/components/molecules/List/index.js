import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {IC_RightArrow} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = props => {
  const {
    name,
    description,
    Pic,
    profilePic,
    newMessage,
    arrow,
    onPress,
    last,
  } = props;
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#FFFFFF', false)}>
      <View style={styles.container(last)}>
        {profilePic ? (
          <Image source={profilePic} style={styles.imageProfile} />
        ) : (
          <Pic style={styles.picStyle} />
        )}

        <View style={styles.identity}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message(newMessage)}>{description}</Text>
        </View>
        {arrow ? (
          <View style={styles.rightArrow}>
            <IC_RightArrow />
          </View>
        ) : null}
      </View>
    </TouchableNativeFeedback>
  );
};

export default List;

const styles = StyleSheet.create({
  container: last => ({
    paddingTop: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: last ? 0 : 1,
    alignItems: 'flex-start',
    backgroundColor: colors.white,
  }),
  identity: {
    flex: 1,
    marginLeft: 12,
    alignItems: 'flex-start',
  },
  picStyle: {
    height: 24,
    width: 24,
    alignSelf: 'center',
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
