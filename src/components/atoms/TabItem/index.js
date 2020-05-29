import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IC_Doctor,
  IC_Messages,
  IC_Hospitals,
  IC_DoctorActive,
  IC_MessagesActive,
  IC_HospitalsActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IC_DoctorActive /> : <IC_Doctor />;
    } else if (title === 'Messages') {
      return active ? <IC_MessagesActive /> : <IC_Messages />;
    } else if (title === 'Hospitals') {
      return active ? <IC_HospitalsActive /> : <IC_Hospitals />;
    } else return <IC_Hospitals />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    lineHeight: 14,
    marginTop: 4,
  }),
});
