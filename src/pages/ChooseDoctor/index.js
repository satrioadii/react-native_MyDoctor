import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ID_doctor1} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        align="center"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
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
