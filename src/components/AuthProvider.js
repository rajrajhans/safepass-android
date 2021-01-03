import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {
  getLoginErrorMessage,
  getSignupErrorMessage,
} from '../utils/errorHandlers';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  async function login(email, password) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      return 1;
    } catch (e) {
      Alert.alert('Authentication Error', getLoginErrorMessage(e.code), [
        {text: 'OK', style: 'cancel'},
      ]);
      return 0;
    }
  }

  async function signUp(email, password, name) {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      await res.user.updateProfile({
        displayName: name,
      });
      setCurrentUser({displayName: name, ...currentUser});
      return 1;
    } catch (e) {
      Alert.alert('Sign Up Error', getSignupErrorMessage(e.code), [
        {text: 'OK', style: 'cancel'},
      ]);
      return 0;
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        login,
        signOut,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
