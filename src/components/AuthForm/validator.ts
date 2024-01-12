export const getAuthFormValidationErrors = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const newError = {};

  if (!password || (password && password.length < 5)) {
    newError['password'] = 'Password has to have at least 5 characters long';
  }

  if (!email || (email && !emailRegex.test(email))) {
    newError['email'] = 'This field has to be email';
  }

  return newError;
};
