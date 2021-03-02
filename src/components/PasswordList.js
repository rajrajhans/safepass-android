import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import getPasswords from '../utils/database_apis/getPasswords';
import {LoadingContext} from './LoadingProvider';
import SinglePassword from './SinglePassword';

const PasswordList = ({currentUser}) => {
  const [passwords, setPasswords] = useState(null);
  const [isPwdPending, setIsPwdPending] = useState(true);
  const {setIsLoading} = useContext(LoadingContext);

  useEffect(() => {
    getPasswordsFromDB();
  }, []);

  function getPasswordsFromDB() {
    setIsLoading(true);
    setIsPwdPending(true);

    getPasswords(currentUser.uid)
      .then((pwds) => {
        let pwdArray = Object.keys(pwds).map((key) => [key, pwds[key]]);
        pwdArray = pwdArray.reverse();

        setPasswords(pwdArray);
        setIsPwdPending(false);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        // todo: handle error
        setIsLoading(false);
      });
  }

  return (
    <>
      {isPwdPending ? null : (
        <FlatList
          data={passwords}
          renderItem={(pwdTuple) => (
            <SinglePassword passwordTuple={pwdTuple.item} />
          )}
          keyExtractor={(item) => item[0]}
        />
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
