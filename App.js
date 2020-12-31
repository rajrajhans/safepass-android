import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/Onboarding';

const StackNav = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name={'Welcome'} component={OnboardingScreen} />
        <StackNav.Screen name={'Home'} component={Home} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
