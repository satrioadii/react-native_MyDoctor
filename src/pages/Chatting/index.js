import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {ID_doctor1} from '../../assets';
import {colors, fonts} from '../../utils';

const ChattingPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Nairobi Putri Hayza"
        subtitle="dokter anak"
        align="center"
        imagePic={ID_doctor1}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.date}>Senin, 21 Maret 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default ChattingPage;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 13,
    fontFamily: fonts.primary[400],
    paddingTop: 20,
    lineHeight: 13,
    textAlign: 'center',
  },
});
