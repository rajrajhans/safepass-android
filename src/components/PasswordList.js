import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import getPasswords from '../utils/database_apis/getPasswords';

const PasswordList = ({currentUser}) => {
  const [passwords, setPasswords] = useState(null);
  const [isPwdPending, setIsPwdPending] = useState(true);

  useEffect(() => {
    getPasswordsFromDB();
  }, []);

  function getPasswordsFromDB() {
    setIsPwdPending(true);

    getPasswords(currentUser.uid)
      .then((pwds) => {
        console.log(pwds);
        let pwdArray = Object.keys(pwds).map((key) => [key, pwds[key]]);
        pwdArray = pwdArray.reverse();
        setPasswords(pwdArray);
        setIsPwdPending(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <Text style={styles.text}>Hello from Pwd list</Text>

      {isPwdPending ? null : (
        <>
          {passwords.map((pwdTuple) => (
            <Text>hi</Text>
          ))}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default PasswordList;
