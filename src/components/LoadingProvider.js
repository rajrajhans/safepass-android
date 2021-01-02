import React, {createContext, useState} from 'react';
import {Text} from 'react-native-elements';
import {StatusBar, View} from 'react-native';
import styles from '../styles/Loading';

export const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statusBarBg, setStatusBarBg] = useState('#3c0d99');

  return (
    <LoadingContext.Provider value={{setIsLoading, setStatusBarBg}}>
      {isLoading ? (
        <>
          <StatusBar
            backgroundColor={'rgba(0, 0, 0, 0.2)'}
            barStyle={'light-content'}
            animated={true}
          />
          {children}
          <View style={styles.container}>
            <Text>hello</Text>
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
