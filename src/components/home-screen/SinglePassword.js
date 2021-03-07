import React from 'react';
import {Icon, Text} from 'react-native-elements';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/logo_hq.png';
import {windowWidth} from '../../utils/deviceDimensions';
import {parseDate} from '../../utils/parseDate';

const SinglePassword = ({
  passwordTuple,
  setCurrentActivePwd,
  setIsViewActive,
}) => {
  console.log('from SinglePassword.js', passwordTuple[1].title);

  const handleOpenPwdOverlay = () => {
    setCurrentActivePwd(passwordTuple);
    setIsViewActive(true);
  };

  return (
    <View style={[styles.wrapper, {width: windowWidth}]}>
      <TouchableOpacity style={styles.container} onPress={handleOpenPwdOverlay}>
        <View style={styles.pwdIconContainer}>
          <Image source={Logo} style={styles.pwdIcon} />
        </View>
        <View style={styles.pwdDetailsContainer}>
          <Text style={styles.pwdName}>{passwordTuple[1].title}</Text>
          <Text style={styles.pwdUsername}>{passwordTuple[1].username}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Icon
            color={'#3c0d99'}
            name={'eye'}
            type={'feather'}
            style={styles.icon}
            size={27}
          />
          <Icon
            color={'#3c0d99'}
            name={'edit-2'}
            type={'feather'}
            style={styles.icon}
            size={27}
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
    borderColor: '#777575',
    borderWidth: StyleSheet.hairlineWidth,
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
    flex: 4,
    justifyContent: 'center',
    marginLeft: 14,
  },
  pwdName: {
    fontSize: 18,
  },
  pwdUsername: {
    fontSize: 12,
    color: '#777575',
  },
  iconsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  icon: {},
});

export default SinglePassword;
