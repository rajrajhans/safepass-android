import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './src/components/AuthProvider';
import {LoadingProvider} from './src/components/LoadingProvider';

const AppWrapper = () => (
  <LoadingProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LoadingProvider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
