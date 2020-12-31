import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const pages = [
  {
    backgroundColor: '#fff',
    image: <Image source={require('../assets/logo.png')} />,
    title: 'Welcome To SafePass',
    subtitle: 'Yes',
  },
  {
    backgroundColor: '#000',
    image: <Image source={require('../assets/logo.png')} />,
    title: 'Welcome To SafePass 2',
    subtitle: 'No',
  },
  {
    backgroundColor: '#570e09',
    image: <Image source={require('../assets/logo.png')} />,
    title: 'Welcome To SafePass 3',
    subtitle: 'Maybe',
  },
];

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      pages={pages}
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      DotComponent={Dots}
    />
  );
};

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return <View style={[styles.dot, backgroundColor]} />;
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.text}>Done</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
  dots: {
    width: 6,
    height: 6,
    marginHorizontal: 3,
  },
});

export default OnboardingScreen;
