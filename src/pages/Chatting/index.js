import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, ChatItem, InputChat, Gap} from '../../components';
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
      <ScrollView style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret 2020</Text>
        <ChatItem
          role="user"
          chatText="Apakah jeruk itu berbahaya dokter?"
          chatTime="4.30 AM"
        />
        <ChatItem
          role="doctor"
          chatText="Tentu saja tidak, jeruk sangat sehat bambang"
          chatTime="4.31 AM"
        />
        <ChatItem
          role="user"
          chatText="Baik terima kasih dokter"
          chatTime="4.33 AM"
        />
        <Gap height={16} />
      </ScrollView>
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
  content: {flex: 1},
  date: {
    color: colors.text.secondary,
    fontSize: 13,
    fontFamily: fonts.primary[400],
    paddingTop: 20,
    lineHeight: 13,
    textAlign: 'center',
  },
});
