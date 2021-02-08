import React, {useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import OnboardingScreen from './src/screens/Onboarding';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import AuthContext from './src/components/AuthProvider';
import auth from '@react-native-firebase/auth';
import LoadingScreen from './src/screens/LoadingScreen';
import FirstLaunchNavStack from './src/components/navigation/FirstLaunchNavStack';
import NotLoggedInNavStack from './src/components/navigation/NotLoggedInNavStack';
import LoggedInNavStack from './src/components/navigation/LoggedInNavStack';
import {GoogleSignin} from '@react-native-community/google-signin';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const handleAuthStateChange = (user) => {
    setCurrentUser(user);
    console.log('current user set', user);
    if (isInitializing) setIsInitializing(false);
  };

  useEffect(() => {
    // for handling splash screen
    SplashScreen.hide();

    // for handling onboarding screens on first launch
    AsyncStorage.getItem('isFirstLaunchDone').then((val) => {
      if (val == null) {
        AsyncStorage.setItem('isFirstLaunchDone', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    // for handling userAuth
    const subscriber = auth().onAuthStateChanged(handleAuthStateChange);
    return subscriber;
  }, []);

  if (isInitializing) return <LoadingScreen />;
  // If app is still establishing connection to Firebase
  else if (isFirstLaunch == null) {
    return <LoadingScreen />;
  } else if (isFirstLaunch === true) {
    if (currentUser) {
      return <LoggedInNavStack />;
    } else {
      return <FirstLaunchNavStack />;
    }
  } else {
    if (currentUser) {
      return <LoggedInNavStack />;
    } else {
      return <NotLoggedInNavStack />;
    }
  }
};

export default App;
