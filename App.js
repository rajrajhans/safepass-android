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

const StackNav = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  const handleAuthStateChange = (user) => {
    setCurrentUser(user);
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

  if (isInitializing) return null;
  //todo: show maybe a loading screen here
  else if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <StackNav.Navigator screenOptions={{headerShown: false}}>
          <StackNav.Screen name={'Welcome'} component={OnboardingScreen} />
          <StackNav.Screen name={'Login'} component={Login} />
          <StackNav.Screen name={'Signup'} component={Signup} />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StackNav.Navigator screenOptions={{headerShown: false}}>
          <StackNav.Screen name={'Login'} component={Login} />
          <StackNav.Screen name={'Signup'} component={Signup} />
          <StackNav.Screen name={'Home'} component={Home} />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
