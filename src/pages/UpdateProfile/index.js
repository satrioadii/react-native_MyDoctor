import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile, Gap} from '../../components';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {ID_UserProfile} from '../../assets';

const index = ({userPic}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" type="icon-only" align="center" />
      <ScrollView>
        <Profile sourcePic={ID_UserProfile} update />
        <View style={styles.inputContainer}>
          <Input label="Full Name" value="Shayna Melinda" />
          <Gap height={24} />
          <Input label="Pekerjaan" value="Product Designer" />
          <Gap height={24} />
          <Input label="Email Address" value="ashayna@google.com" disable />
          <Gap height={24} />
          <Input label="Password" value="blablabla" secure={true} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Save Profile" />
          <Gap height={48} />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  profile: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
  },
  inputContainer: {
    padding: 40,
    paddingTop: 26,
  },
  buttonContainer: {paddingHorizontal: 40},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
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
});
