import React from 'react';
import {Text} from 'react-native-elements';

const SinglePassword = ({passwordTuple}) => {
  return <Text key={passwordTuple[0]}>{passwordTuple[1].title}</Text>;
};

export default SinglePassword;
