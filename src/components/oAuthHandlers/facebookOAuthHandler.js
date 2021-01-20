import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

async function handleFacebookOAuth() {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  // Handle if user does not sign in to Facebook
  if (result.isCancelled) {
    throw 'User cancelled the login process.';
  }

  // Once signed in, get the user's access token
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Using the access token, create acc in Firebase
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign in the user with the credential (thereby triggering onAuthStateChanged)
  return auth().signInWithCredential(facebookCredential);
}

export default handleFacebookOAuth;
