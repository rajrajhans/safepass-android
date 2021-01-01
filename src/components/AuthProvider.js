import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  async function login(email, password) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }

  async function signUp(email, password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
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
