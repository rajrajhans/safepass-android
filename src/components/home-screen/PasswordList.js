import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import getPasswords from '../../utils/database_apis/getPasswords';
import {LoadingContext} from '../LoadingProvider';
import SinglePassword from './SinglePassword';
import HomeIntro from './HomeIntro';
import ViewPasswordOverlay from './ViewPasswordOverlay';

const PasswordList = ({currentUser}) => {
  const [passwords, setPasswords] = useState(null);
  const [isPwdPending, setIsPwdPending] = useState(true);
  const [currentActivePwd, setCurrentActivePwd] = useState(null);
  const [isViewActive, setIsViewActive] = useState(false);

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

        console.log('\n\n\nFrom PasswordList. Fetched Pwds\n\n\n');

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

  // todo: if isPwdPending is true, then render a flatlist with singlepwdcomponents with shining loading effect
  return (
    <>
      {isPwdPending ? (
        <FlatList
          data={passwords}
          renderItem={(pwdTuple) => (
            <SinglePassword passwordTuple={pwdTuple.item} />
          )}
          keyExtractor={(item) => item[0]}
          contentContainerStyle={styles.container}
          style={styles.con}
          ListHeaderComponent={<HomeIntro />}
          ListHeaderComponentStyle={styles.headerStyles}
        />
      ) : (
        <>
          {currentActivePwd ? (
            <ViewPasswordOverlay
              isViewActive={isViewActive}
              setIsViewActive={setIsViewActive}
              singlePassword={currentActivePwd}
            />
          ) : null}
          <FlatList
            data={passwords}
            renderItem={(pwdTuple) => (
              <SinglePassword
                passwordTuple={pwdTuple.item}
                setCurrentActivePwd={setCurrentActivePwd}
                setIsViewActive={setIsViewActive}
              />
            )}
            keyExtractor={(item) => item[0]}
            contentContainerStyle={styles.container}
            style={styles.con}
            onRefresh={() => {
              getPasswordsFromDB();
            }}
            refreshing={isPwdPending}
            ListHeaderComponent={<HomeIntro />}
            ListHeaderComponentStyle={styles.headerStyles}
          />
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
  container: {
    alignItems: 'center',
  },
  con: {},
  headerStyles: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#3c0d99',
    marginBottom: '15%',
    paddingTop: '15%',
  },
});

export default PasswordList;
