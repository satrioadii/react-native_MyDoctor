import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ID_doctor1, ID_doctor2, ID_doctor3} from '../../assets';
import {Gap, ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';

const MessagesPage = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profilePic: ID_doctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terimakasih banyak atas...',
    },
    {
      id: 2,
      profilePic: ID_doctor3,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk itu...',
      newMessage: true,
    },
    {
      id: 3,
      profilePic: ID_doctor2,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <ScrollView style={styles.pageWrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>Messages</Text>
        </View>
        {doctors.map((doctor, index) => (
          <ListDoctor
            key={index}
            profilePic={doctor.profilePic}
            name={doctor.name}
            description={doctor.desc}
            newMessage={doctor.newMessage ? true : false}
          />
        ))}

        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default MessagesPage;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  pageWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    paddingHorizontal: 16,
  },
});
