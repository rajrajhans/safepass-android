import sjcl from 'sjcl';
import {secretKey} from './securityConfig';

function encrypt(data) {
  if (!data) {
    return null;
  }

  let temp = data;

  if (typeof data === 'object') {
    // to encrypt objects, we first convert them to string
    temp = JSON.stringify({...data});
  }

  return sjcl.encrypt(secretKey, temp);
}

export default encrypt;
