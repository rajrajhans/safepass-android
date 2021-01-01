import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import OnboardingScreen from './src/screens/Onboarding';

const StackNav = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    SplashScreen.hide();

    AsyncStorage.getItem('isFirstLaunchDone').then((val) => {
      if (val == null) {
        AsyncStorage.setItem('isFirstLaunchDone', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <StackNav.Navigator screenOptions={{headerShown: false}}>
          <StackNav.Screen name={'Welcome'} component={OnboardingScreen} />
          <StackNav.Screen name={'Home'} component={Home} />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StackNav.Navigator screenOptions={{headerShown: false}}>
          <StackNav.Screen name={'Home'} component={Home} />
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
