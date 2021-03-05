import React from 'react';
import {Header, Text, Icon} from 'react-native-elements';
import Logo from '../assets/logo_hq.png';
import {Image, View} from 'react-native';
import {StyleSheet} from 'react-native';

const TopBar = () => {
  return (
    <Header
      leftComponent={<TopBarLeft />}
      centerComponent={<TopBarCenter />}
      rightComponent={<TopBarRight />}
      containerStyle={styles.container}
    />
  );
};

const TopBarLeft = () => (
  <View style={styles.iconContainer}>
    <Icon name={'menu'} color={'#3c0d99'} size={28} />
  </View>
);

const TopBarCenter = () => (
  <View style={styles.logoContainer}>
    <Image source={Logo} style={styles.logo} />
  </View>
);

const TopBarRight = () => (
  <View style={styles.iconContainer}>
    <Icon name={'sign-out'} type="font-awesome" color={'#3c0d99'} size={28} />
  </View>
);

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
  },
});

export default TopBar;
