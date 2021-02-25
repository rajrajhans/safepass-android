import sjcl from 'sjcl';
import {secretKey} from './securityConfig';

function decrypt(data) {
  if (!data) {
    return null;
  }

  const decrypted = sjcl.decrypt(secretKey, data);

  return JSON.parse(decrypted);
}

export default decrypt;
