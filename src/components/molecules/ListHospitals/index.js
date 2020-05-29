import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ID_hospitals1} from '../../../assets';

const ListHospital = props => {
  const {last, type, name, address, pic} = props;
  return (
    <View style={styles.container(last)}>
      <Image source={pic} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.hospital}>{type}</Text>
        <Text style={styles.hospital}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: last => ({
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: last ? 0 : 1,
    flexDirection: 'row',
  }),
  image: {
    width: 80,
    height: 60,
    borderRadius: 12,
  },
  description: {
    justifyContent: 'flex-start',
    marginLeft: 16,
    maxWidth: 250,
  },
  hospital: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    lineHeight: 19,
  },
  address: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6,
  },
});
