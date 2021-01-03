import React from 'react';
import OnboardingScreen from '../../screens/Onboarding';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import Home from '../../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const StackNav = createStackNavigator();

const FirstLaunchNavStack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{headerShown: false}}>
        <StackNav.Screen name={'Welcome'} component={OnboardingScreen} />
        <StackNav.Screen name={'Login'} component={Login} />
        <StackNav.Screen name={'Signup'} component={Signup} />
        <StackNav.Screen name={'Home'} component={Home} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default FirstLaunchNavStack;
