import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  ID_hospitals,
  ID_hospitals1,
  ID_hospitals2,
  ID_hospitals3,
} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const HospitalsPage = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ID_hospitals} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.description}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          pic={ID_hospitals1}
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          pic={ID_hospitals2}
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          pic={ID_hospitals3}
          address="Jln. Surya Sejahtera 20"
          last
        />
      </View>
    </View>
  );
};

export default HospitalsPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 30,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    lineHeight: 24,
    textAlign: 'center',
    color: colors.white,
  },
  description: {
    fontFamily: fonts.primary[300],
    marginTop: 6,
    fontSize: 14,
    lineHeight: 17,
    color: colors.white,
    textAlign: 'center',
  },
});
