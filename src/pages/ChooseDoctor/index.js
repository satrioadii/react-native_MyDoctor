import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {ID_doctor1} from '../../assets';
import {colors} from '../../utils';
import {NavigationContainer} from '@react-navigation/native';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        align="center"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        profilePic={ID_doctor1}
        name="Alexander Jannie"
        description="wanita"
        arrow
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
