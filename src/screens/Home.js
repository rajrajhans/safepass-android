import React, {Fragment, useContext, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AuthContext from '../components/AuthProvider';
import {Button, Text} from 'react-native-elements';
import {LoadingContext} from '../components/LoadingProvider';
import PasswordList from '../components/home-screen/PasswordList';
import TopBar from '../components/TopBar';
import HomeIntro from '../components/home-screen/HomeIntro';

const Home = () => {
  const {currentUser, signOut} = useContext(AuthContext);
  const {setIsLoading} = useContext(LoadingContext);
  async function handleSignOut() {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  }

  return (
    <Fragment>
      <TopBar />
      <SafeAreaView style={styles.container}>
        <HomeIntro userName={currentUser.displayName} />

        <PasswordList currentUser={currentUser} />

        <Button title={'Sign Out'} onPress={handleSignOut} />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
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
