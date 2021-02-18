import database from '@react-native-firebase/database';

async function getPasswords(userID) {
  const pwdRef = database().ref(`/users/${userID}/passwords`);

  return await pwdRef
    .once('value')
    .then((data) => data.val())
    .then((res) => res);
}

export default getPasswords;
