import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {IL_NullPhoto, IC_AddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        align="center"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={IL_NullPhoto} style={styles.avatar} />
            <IC_AddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.occupation}>Product Designer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            text="Skip for this"
            align="center"
            textSize={16}
            underline
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 64,
    flex: 1,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    marginBottom: 26,
    width: 130,
    height: 130,
    backgroundColor: '#00000000',
    borderColor: colors.photo.border,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  occupation: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
