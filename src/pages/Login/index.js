import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IL_Logo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <IL_Logo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Gap height={40} />
      </View>
      <View>
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={10} />
        <Link underline textSize={12} text="Forgot My Password" />
        <Gap height={40} />
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
        <Gap height={30} />
        <Link
          onPress={() => navigation.navigate('SignUp')}
          underline
          align="center"
          textSize={16}
          text="Create New Account"
        />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1, backgroundColor: colors.white},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    maxWidth: 153,
  },
});
