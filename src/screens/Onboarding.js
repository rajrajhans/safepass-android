import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/Onboarding';
import {brandColor as brandColor} from '../../app.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

const pages = [
  {
    backgroundColor: brandColor,
    image: (
      <Image
        style={{width: 385, height: 266}}
        source={require('../assets/intro.png')}
      />
    ),
    title: 'Welcome To SafePass',
    subtitle:
      'Store your passwords securely on the cloud and access them on-the-go!',
    isBgDark: 0,
  },
  {
    backgroundColor: '#4605c6',
    image: (
      <Image
        style={{width: 298, height: 266}}
        source={require('../assets/secure.png')}
      />
    ),
    title: 'Secure Password Management',
    subtitle:
      'SafePass encrypts your data using the Industry Standard AES Algorithm.',
  },
  {
    backgroundColor: '#5509e5',
    image: (
      <Image
        style={{width: 350, height: 266}}
        source={require('../assets/open_source.png')}
      />
    ),
    title: 'Open Source & Customizable',
    subtitle:
      'Want to customize it to your needs? No Problem! The source code is available on GitHub.',
  },
];

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      pages={pages}
      showSkip={false}
      onDone={() => navigation.replace('Home')}
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      DotComponent={Dots}
      isLight={true}
      transitionAnimationDuration={150}
    />
  );
};

const Dots = ({selected}) => {
  return <View style={[styles.dots, selected ? styles.selectedDot : null]} />;
};

const Next = ({...props}) => (
  <View style={styles.button} s>
    <Button
      icon={<Icon name="chevron-right" size={22} color="white" />}
      type={'clear'}
      {...props}
      buttonStyle={{padding: 20}}
    />
  </View>
);

const Done = ({...props}) => (
  <View style={[styles.button]} s>
    <Button
      icon={
        <Icon name="check" size={22} color="white" style={{marginRight: 8}} />
      }
      title={'Done'}
      type={'clear'}
      titleStyle={{color: '#fff'}}
      buttonStyle={{paddingVertical: 20}}
      {...props}
    />
  </View>
);

const getStarted = ({...props}) => (
  <View style={styles.button} s>
    <Button
      icon={<Icon name="check" size={22} color="white" />}
      type={'clear'}
      {...props}
    />
  </View>
);

export default OnboardingScreen;
