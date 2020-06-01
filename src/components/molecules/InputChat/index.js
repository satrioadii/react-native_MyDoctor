import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
        onChangeText={text => setMessage(text)}
        value={message}
      />
      <Button type="button-icon-send" enabled={message === '' ? false : true} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.disable,
    fontSize: 14,
    marginRight: 10,
    fontFamily: fonts.primary[400],
    padding: 14,
    borderRadius: 10,
    flex: 1,
    maxHeight: 45,
  },
});
