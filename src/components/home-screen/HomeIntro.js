import React from 'react';
import {Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

const HomeIntro = ({userName}) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.helloText}>
        Hello, {userName}
      </Text>
    </View>
  );
};

export default HomeIntro;

const styles = StyleSheet.create({
  helloText: {
    color: '#fff',
    marginLeft: 20,
  },
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: '#3c0d99',
    justifyContent: 'center',
  },
});
