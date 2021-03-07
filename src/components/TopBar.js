import React, {useContext} from 'react';
import {Header, Text, Icon} from 'react-native-elements';
import Logo from '../assets/logo_hq.png';
import {Image, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import AuthContext from './AuthProvider';
import {LoadingContext} from './LoadingProvider';

const TopBar = () => {
  return (
    <Header
      leftComponent={<TopBarLeft />}
      centerComponent={<TopBarCenter />}
      rightComponent={<TopBarRight />}
      containerStyle={styles.container}
      statusBarProps={{
        animated: true,
        backgroundColor: '#3c0d99',
      }}
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

const TopBarRight = () => {
  const {signOut} = useContext(AuthContext);
  const {setIsLoading} = useContext(LoadingContext);
  async function handleSignOut() {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  }

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={handleSignOut}>
      <Icon name={'sign-out'} type="font-awesome" color={'#3c0d99'} size={28} />
    </TouchableOpacity>
  );
};

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
    paddingHorizontal: 5,
  },
});

export default TopBar;
