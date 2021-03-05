import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './src/components/AuthProvider';
import {LoadingProvider} from './src/components/LoadingProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppWrapper = () => (
  <LoadingProvider>
    <AuthProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </AuthProvider>
  </LoadingProvider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
