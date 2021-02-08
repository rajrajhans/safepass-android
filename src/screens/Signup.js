import React, {useContext, useState} from 'react';
import styles from '../styles/Signup';
import {
  Alert,
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
import {LoadingContext} from '../components/LoadingProvider';
import AuthContext from '../components/AuthProvider';
import {getLoginErrorMessage} from '../utils/errorHandlers';
import facebookOAuthHandler from '../components/oAuthHandlers/facebookOAuthHandler';
import handleGoogleOAuth from '../components/oAuthHandlers/googleAuthHandler';
import twitterOAuthHandler from '../components/oAuthHandlers/twitterOAuthHandler';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const {setIsLoading} = useContext(LoadingContext);
  const {signUp} = useContext(AuthContext);

  const resetSignupForm = () => {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  const displayAlert = (title, message) =>
    Alert.alert(title, message, [{text: 'OK', style: 'positive'}]);

  const handleSignUp = async () => {
    if (
      email !== '' &&
      password !== '' &&
      passwordConfirmation !== '' &&
      name !== ''
    ) {
      if (password === passwordConfirmation) {
        setIsLoading(true);
        const isSignUpSuccessful = await signUp(email, password, name);
        setIsLoading(false);
        if (!isSignUpSuccessful) {
          resetSignupForm();
        }
      } else {
        displayAlert(
          'Passwords do not match',
          'Please make sure you have entered the same password in "Confirm Password"',
        );
        resetSignupForm();
      }
    } else {
      if (!email && !password && !passwordConfirmation)
        displayAlert(
          'Fields cannot be empty',
          'Please make sure you have entered all the information',
        );
      else if (!email)
        displayAlert(
          'Email cannot be empty',
          'Please make sure you have entered a valid email',
        );
      else if (!password || !passwordConfirmation)
        displayAlert(
          'Password cannot be empty',
          'Please make sure you have entered valid password',
        );
      else
        displayAlert(
          'Name cannot be empty',
          'Please make sure you have entered a valid name',
        );
    }
  };

  const handleFacebookSignup = async () => {
    setIsLoading(true);
    await facebookOAuthHandler().catch((e) => {
      console.log('Facebook OAuth Error -> ', e);
    });
    setIsLoading(false);
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);

    await handleGoogleOAuth().catch((e) => {
      console.log('Google OAuth Error -> ', e);
    });

    setIsLoading(false);
  };

  const handleTwitterSignup = async () => {
    setIsLoading(true);

    await twitterOAuthHandler().catch((e) => {
      console.log(e);
    });

    setIsLoading(false);
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoText}>SafePass</Text>

        <FormInput
          labelValue={name}
          placeholderText={'Name'}
          iconType={'user'}
          keyboardType={'default'}
          autoCorrect={false}
          onChangeText={(name) => {
            setName(name);
          }}
        />

        <FormInput
          labelValue={email}
          placeholderText={'Email'}
          iconType={'mail'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />

        <FormInput
          labelValue={password}
          placeholderText={'Password'}
          iconType={'lock'}
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />

        <FormInput
          labelValue={passwordConfirmation}
          placeholderText={'Confirm Password'}
          iconType={'lock'}
          secureTextEntry={true}
          onChangeText={(confirmPwd) => setPasswordConfirmation(confirmPwd)}
        />

        <FormButton buttonTitle={'Sign Up'} onPress={handleSignUp} />

        <View style={{marginVertical: 50}}>
          <Text style={{textAlign: 'center'}}>You can also sign up with:</Text>
          <View style={{flexDirection: 'row'}}>
            <SocialButton
              btnType={'google'}
              color={'#de4d41'}
              backgroundColor={'#f5e7ea'}
              onPress={() => {
                handleGoogleSignup().catch((e) => {
                  console.log(e);
                });
              }}
            />
            <SocialButton
              btnType={'facebook'}
              color={'#4867aa'}
              backgroundColor={'#e6eaf4'}
              onPress={() => {
                handleFacebookSignup().catch((e) => {
                  console.log(e);
                });
              }}
            />
            <SocialButton
              btnType={'twitter'}
              color={'#00aced'}
              backgroundColor={'#d5f1fb'}
              onPress={() => {
                handleTwitterSignup().catch((e) => {
                  console.log(e);
                });
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.LoginLink}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.navButtonText}>
            Already have an account? Log In!
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
