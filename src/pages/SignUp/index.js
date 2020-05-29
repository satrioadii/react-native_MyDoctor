import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Signup = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Daftar Akun"
        align="center"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.form}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  form: {padding: 40, paddingTop: 10},
});
