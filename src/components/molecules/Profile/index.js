import React, {Fragment} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IC_AddPhoto, IC_RemovePhoto, IC_Male, IC_Female} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({update, sourcePic, name, description, gender}) => {
  const ImageExist = sourcePic => {
    if (sourcePic !== undefined)
      return <IC_RemovePhoto style={styles.extraIcon} />;
    return <IC_AddPhoto style={styles.extraIcon} />;
  };

  const GenderComponent = gender => {
    if (gender === 'male') return <IC_Male style={styles.extraIcon} />;
    return <IC_Female style={styles.extraIcon} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.picWrap}>
        <Image source={sourcePic} style={styles.pic} />
        {update ? ImageExist(sourcePic) : null}
        {gender ? GenderComponent(gender) : null}
      </View>
      {update ? null : (
        <Fragment>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{description}</Text>
        </Fragment>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  picWrap: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  pic: {height: 110, width: 110, borderRadius: 110 / 2},
  extraIcon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 2,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
