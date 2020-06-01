import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ProfileItem, Gap, Button} from '../../components';
import {colors} from '../../utils';
import {ID_doctor1} from '../../assets';

const DoctorProfilePage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="icon-only"
        title="Profile"
        align="center"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Gap height={10} />
        <Profile
          sourcePic={ID_doctor1}
          name="Nairobi Putri Hayza"
          description="Dokter Anak"
          gender="female"
        />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <ProfileItem label="No. STR" value="12355866953266532" last />
        <View style={styles.buttonWrap}>
          <Button title="Start Consultation" />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfilePage;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  buttonWrap: {padding: 40, paddingTop: 24},
});
