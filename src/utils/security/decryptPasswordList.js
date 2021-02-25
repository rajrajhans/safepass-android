import sjcl from 'sjcl';
import {secretKey} from './securityConfig';
import {reduce} from 'lodash';
import decrypt from './decrypt';

function decryptPasswordList(passwordList) {
  if (!passwordList) {
    return null;
  }

  return reduce(
    passwordList,
    (result, value, key) => {
      result[key] = decrypt(value);
      return result;
    },
    {},
  );
}
