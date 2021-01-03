import React, {Fragment, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AuthContext from '../components/AuthProvider';
import {Button, Text} from 'react-native-elements';
import {LoadingContext} from '../components/LoadingProvider';

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
      <SafeAreaView style={styles.container}>
        <Text h1 style={{color: 'white'}}>
          Hi, {currentUser.displayName}
        </Text>
        <Button title={'Sign Out'} onPress={handleSignOut} />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
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
