export const getLoginErrorMessage = (code) => {
  if (code === 'auth/user-not-found')
    return 'User does not exist. Please Sign Up.';
  else if (code === 'auth/wrong-password')
    return 'Password entered is incorrect. Please try again.';
  else if (code === 'auth/invalid-email')
    return 'Please make sure you have entered correctly formatted email address.';
};
