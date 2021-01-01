import React, {useContext, useState} from 'react';
import styles from '../styles/Login';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialLoginButton';
import {Text} from 'react-native-elements';
import Logo from '../assets/logo_hq.png';
import AuthContext from '../components/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      console.log('login started');
      login(email, password).then(() => console.log('login done'));
    } else {
      setPasswordPlaceholder('Password cannot be empty');
      setEmailPlaceholder('Email cannot be empty');
    }
  };

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'light-content'}
        animated={true}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>SafePass</Text>

        <FormInput
          labelValue={email}
          placeholderText={emailPlaceholder}
          iconType={'user'}
          keyboardType={'email-address'}
          autoCapitaliza={'none'}
          autoCorrect={false}
          onChangeText={(userEmail) => setEmail(userEmail)}
        />

        <FormInput
          labelValue={password}
          placeholderText={passwordPlaceholder}
          iconType={'lock'}
          secureTextEntry={true}
          onChangeText={(userPwd) => setPassword(userPwd)}
        />

        <FormButton buttonTitle={'Sign In'} onPress={handleLogin} />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{marginVertical: 50}}>
          <Text style={{textAlign: 'center'}}>You can also sign in with:</Text>
          <View style={{flexDirection: 'row'}}>
            <SocialButton
              btnType={'google'}
              color={'#de4d41'}
              backgroundColor={'#f5e7ea'}
              onPress={() => {}}
            />
            <SocialButton
              btnType={'facebook'}
              color={'#4867aa'}
              backgroundColor={'#e6eaf4'}
              onPress={() => {}}
            />
            <SocialButton
              btnType={'twitter'}
              color={'#00aced'}
              backgroundColor={'#d5f1fb'}
              onPress={() => {}}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.signupLink}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={styles.navButtonText}>
            Don't have an account? Create one!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
