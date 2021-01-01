import React, {useState} from 'react';
import styles from '../styles/Login';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialLoginButton';
import {Text} from 'react-native-elements';
import Logo from '../assets/logo_hq.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>SafePass</Text>

        <FormInput
          labelValue={email}
          placeholderText={'Email'}
          iconType={'user'}
          keyboardType={'email-address'}
          autoCapitaliza={'none'}
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          placeholderText={'Password'}
          iconType={'lock'}
          secureTextEntry={true}
        />

        <FormButton buttonTitle={'Sign In'} />

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

        <TouchableOpacity style={styles.signupLink} onPress={() => {}}>
          <Text style={styles.navButtonText}>
            Don't have an account? Create one!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
