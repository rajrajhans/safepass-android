import database from '@react-native-firebase/database';
import decryptPasswordList from '../security/decryptPasswordList';

async function getPasswords(userID) {
  const pwdRef = database().ref(`/users/${userID}/passwords`);

  const encryptedPwdList = await pwdRef
    .once('value')
    .then((data) => data.val())
    .then((res) => res);

  return decryptPasswordList(encryptedPwdList);
}

export default getPasswords;
