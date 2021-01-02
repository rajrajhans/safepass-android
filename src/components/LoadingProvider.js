import React, {createContext, useState} from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';

export const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState('false');

  return (
    <LoadingContext.Provider value={{setIsLoading}}>
      <View>
        <Text>{isLoading}</Text>
      </View>
      {children}
    </LoadingContext.Provider>
  );
};
