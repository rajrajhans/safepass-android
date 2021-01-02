// This is a simple View that just uses the LoadingProvider to show loading icon
// For using when there is no screen but want to show Loading (initialization while we are connecting to firebase)
import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {LoadingContext} from '../components/LoadingProvider';

const LoadingScreen = () => {
  const {setIsLoading} = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, []);

  return <View style={{height: '100%', backgroundColor: '#3c0d99'}} />;
};

export default LoadingScreen;
