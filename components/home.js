import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={'#3c0d99'} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>instructions</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c0d99',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

export default Home;
