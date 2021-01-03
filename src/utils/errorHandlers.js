export const getLoginErrorMessage = (code) => {
  if (code === 'auth/user-not-found')
    return 'User does not exist. Please Sign Up.';
  else if (code === 'auth/wrong-password')
    return 'Password entered is incorrect. Please try again.';
  else if (code === 'auth/invalid-email')
    return 'Please make sure you have entered correctly formatted email address.';
};

export const getSignupErrorMessage = (code) => {
  if (code === 'auth/email-already-in-use')
    return 'User already exists with that email address. Please Sign In.';
  else if (code === 'auth/weak-password')
    return 'Password entered is weak. Please try again with a stronger password.';
  else if (code === 'auth/invalid-email')
    return 'Please make sure you have entered correctly formatted email address.';
};
