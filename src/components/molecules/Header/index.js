import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IC_BackDark, IC_BackLight, ID_doctor1} from '../../../assets';
import {Gap, Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

const Header = ({title, align, onPress, type, subtitle, imagePic}) => {
  return (
    <View style={styles.container(type)}>
      <Button onPress={onPress} type="icon-only">
        {type === 'dark' ? <IC_BackLight /> : <IC_BackDark />}
      </Button>
      <View style={styles.textWrapper}>
        <Text style={styles.text(align, type)}>{title}</Text>
        {subtitle ? (
          <Text style={styles.subtext(align, type)}>{subtitle}</Text>
        ) : null}
      </View>
      {imagePic ? (
        <Image source={ID_doctor1} style={styles.imageDoctor} />
      ) : (
        <Gap width={24} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    marginBottom: type === 'dark' ? 4 : 0,
  }),
  textWrapper: {
    textAlign: 'center',
    flex: 1,
  },
  text: (align, type) => ({
    textAlign: align ? align : 'left',
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontSize: 20,
  }),
  subtext: (align, type) => ({
    marginTop: 6,
    textAlign: align ? align : 'left',
    fontFamily: fonts.primary[400],
    color: type === 'dark' ? colors.text.tertiary : colors.text.primary,
    fontSize: 14,
  }),
  imageDoctor: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
