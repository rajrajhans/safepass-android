import React from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import WavyHeader from './WavyHeader';

const HomeIntro = () => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.helloText}>
        Raj's Vault
      </Text>
      <WavyHeader />
    </View>
  );
};

export default HomeIntro;

const styles = StyleSheet.create({
  helloText: {
    marginTop: 16,
    color: '#fff',
    marginLeft: 20,
  },
  container: {
    width: '100%',
    height: '18%',
    backgroundColor: '#3c0d99',
    justifyContent: 'center',
  },
});
