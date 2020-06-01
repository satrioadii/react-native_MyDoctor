import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {Header, Profile, List, Gap} from '../../components';
import {
  IC_Profile,
  IC_Language,
  IC_Rating,
  IC_Help,
  ID_UserProfile,
} from '../../assets';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Profile"
        align="center"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Profile
        name="Shayna Melinda"
        description="Product Designer"
        sourcePic={ID_UserProfile}
      />
      <Gap height={30} />
      <List
        Pic={IC_Profile}
        name="Edit Profile"
        description="Last updated yesterday"
        arrow
        onPress={() => {
          navigation.navigate('UpdateProfile');
        }}
      />
      <List
        Pic={IC_Language}
        name="Language"
        description="Available 12 languages"
        arrow
      />
      <List
        Pic={IC_Rating}
        name="Give Us Rate"
        description="On Google Play Store"
        arrow
      />
      <List
        Pic={IC_Help}
        name="Help Center"
        description="Read our guidelines"
        arrow
        last
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
