import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/home';
import {createStackNavigator} from '@react-navigation/stack';

const StackNav = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name={'Home'} component={Home} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
