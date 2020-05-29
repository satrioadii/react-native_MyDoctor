import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ID_news1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={ID_news1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    borderColor: colors.border,
    paddingBottom: 12,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
    lineHeight: 22,
    fontFamily: fonts.primary[600],
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
  image: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginLeft: 16,
  },
});
