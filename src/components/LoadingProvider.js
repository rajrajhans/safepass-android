import React, {createContext, useEffect, useState} from 'react';
import {Text} from 'react-native-elements';
import {Easing, StatusBar, View} from 'react-native';
import styles from '../styles/Loading';
import Animated from 'react-native-reanimated';

export const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statusBarBg, setStatusBarBg] = useState('#3c0d99');

  return (
    <LoadingContext.Provider value={{setIsLoading, setStatusBarBg}}>
      {isLoading ? (
        <>
          <StatusBar
            backgroundColor={'rgba(0, 0, 0, 0.4)'}
            barStyle={'light-content'}
            animated={true}
          />
          {children}
          <View style={styles.container}>
            <LogoImage />
          </View>
        </>
      ) : (
        <>
          <StatusBar
            backgroundColor={statusBarBg}
            barStyle={'light-content'}
            animated={true}
          />
          {children}
        </>
      )}
    </LoadingContext.Provider>
  );
};

const LogoImage = () => {
  const height = Animated.useValue(100);
  const width = Animated.useValue(100);

  useEffect(() => {
    grow();
  }, []);

  const grow = () => {
    Animated.timing(width, {
      toValue: 130,
      duration: 500,
      easing: Easing.linear,
    }).start();
    Animated.timing(height, {
      toValue: 130,
      duration: 500,
      easing: Easing.linear,
    }).start(() => {
      shrink();
    });
  };

  const shrink = () => {
    Animated.timing(width, {
      toValue: 100,
      duration: 500,
      easing: Easing.linear,
    }).start();
    Animated.timing(height, {
      toValue: 100,
      duration: 500,
      easing: Easing.linear,
    }).start(() => {
      grow();
    });
  };

  return (
    <Animated.Image
      source={require('../assets/logo.png')}
      style={{width: width, height: height, opacity: 0.5}}
    />
  );
};
