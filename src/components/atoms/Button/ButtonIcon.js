import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {IC_SendDisable, IC_SendEnable} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconSend = ({enabled}) => {
  return (
    <TouchableNativeFeedback
      style={styles.container(enabled)}
      disabled={enabled ? false : true}
      background={TouchableNativeFeedback.Ripple('#FFFFFF', false)}>
      {enabled ? <IC_SendEnable /> : <IC_SendDisable />}
    </TouchableNativeFeedback>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: enabled => ({
    width: 45,
    height: 45,
    backgroundColor: enabled ? colors.enable : colors.disable,
    justifyContent: 'center',
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  }),
});
