import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ID_doctor1} from '../../../assets';

const ChatItem = ({role, chatText, chatTime}) => {
  return (
    <View style={styles.container(role)}>
      {role === 'doctor' ? (
        <View style={styles.docPicWrapper}>
          <Image source={ID_doctor1} style={styles.docPic} />
        </View>
      ) : null}

      <View style={styles.chatWrapper(role)}>
        <View style={styles.content(role)}>
          <Text style={styles.textChat(role)}>{chatText}</Text>
        </View>
        <Text style={styles.textTime}>{chatTime}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: role => ({
    flexDirection: 'row',
    justifyContent: role === 'doctor' ? 'flex-start' : 'flex-end',
    marginTop: 20,
  }),
  docPicWrapper: {justifyContent: 'flex-end', marginLeft: 16},
  docPic: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  chatWrapper: role => ({
    maxWidth: '70%',
    paddingRight: role === 'doctor' ? 0 : 16,
    paddingLeft: role === 'doctor' ? 12 : 0,
    alignItems: role === 'doctor' ? 'flex-start' : 'flex-end',
  }),
  content: role => ({
    backgroundColor:
      role === 'doctor' ? colors.chatItem.doctor : colors.chatItem.user,
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: role === 'doctor' ? 0 : 10,
    borderBottomRightRadius: role === 'doctor' ? 10 : 0,
  }),
  textChat: role => ({
    color:
      role === 'doctor'
        ? colors.chatItem.text.doctor
        : colors.chatItem.text.user,
    fontFamily: fonts.primary[400],
    fontSize: 14,
    lineHeight: 17,
  }),
  textTime: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    lineHeight: 13,
    color: colors.chatItem.text.time,
    marginTop: 8,
  },
});
