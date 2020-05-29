import React from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {JSONCategoryDoctor} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

const DoctorPages = props => {
  const {navigation} = props;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="always"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile />
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.title}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                {/* JSON DOCTOR CATEGORY */}
                {JSONCategoryDoctor.map((doctorCategory, index) => (
                  <DoctorCategory
                    IconCategory={doctorCategory.iconCategory}
                    category={doctorCategory.category}
                    key={index}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                ))}
                {/* JSON DOCTOR CATEGORY END */}
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.subtitle}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.subtitle}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default DoctorPages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    lineHeight: 24,
    color: colors.text.primary,
    width: 209,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 30,
  },
  category: {
    flexDirection: 'row',
    marginTop: 16,
  },
  wrapperScroll: {
    paddingHorizontal: -16,
  },
});
