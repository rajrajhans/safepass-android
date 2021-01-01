import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowHeight} from '../utils/deviceDimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({btnType, color, backgroundColor, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={25}
          color={color}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
