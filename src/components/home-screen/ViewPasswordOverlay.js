import React from 'react';
import {Overlay} from 'react-native-elements';
import {Text} from 'react-native';

const singlePassword1 = [
  '-MVCeyRRZCUiIduxsRxO',
  {
    category: 'Email',
    createdAt: 1615137071430,
    password: 'Eo[7U!3h',
    title: 'StackOverflow',
    updatedAt: 1615137071430,
    username: 'razz',
  },
];

const ViewPasswordOverlay = ({
  isViewActive,
  setIsViewActive,
  singlePassword,
}) => {
  const closeOverlay = () => {
    setIsViewActive(false);
  };

  return (
    <Overlay isVisible={isViewActive} onBackdropPress={closeOverlay}>
      <Text>{singlePassword[1].title}</Text>
    </Overlay>
  );
};

export default ViewPasswordOverlay;
