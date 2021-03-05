import React from 'react';
import {Icon, Text} from 'react-native-elements';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/logo_hq.png';
import {windowWidth} from '../../utils/deviceDimensions';
import {parseDate} from '../../utils/parseDate';

const SinglePassword = ({passwordTuple}) => {
  console.log(passwordTuple);
  return (
    <View style={[styles.wrapper, {width: windowWidth}]}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.pwdIconContainer}>
          <Image source={Logo} style={styles.pwdIcon} />
        </View>
        <View style={styles.pwdDetailsContainer}>
          <Text style={styles.pwdName}>{passwordTuple[1].title}</Text>
          <Text style={styles.pwdDate}>
            {parseDate(passwordTuple[1].updatedAt)}
          </Text>
        </View>
        <View style={styles.iconsContainer}>
          <Icon
            color={'#3c0d99'}
            name={'eye'}
            type={'feather'}
            style={styles.icons}
          />
          <Icon
            color={'#3c0d99'}
            name={'edit-2'}
            type={'feather'}
            style={styles.icons}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  container: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: 12,
    borderRadius: 15,
  },
  pwdIconContainer: {
    flex: 0.35,
    justifyContent: 'center',
  },
  pwdIcon: {
    height: 25,
    width: 25,
  },
  pwdDetailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  pwdName: {
    fontSize: 18,
  },
  pwdDate: {
    fontSize: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {},
});

export default SinglePassword;
