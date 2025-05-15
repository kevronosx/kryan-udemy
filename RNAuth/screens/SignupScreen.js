import { Alert } from 'react-native';
import { useState, useContext } from 'react';

import { createUser } from '../util/auth';
import { AuthContext } from '../store/auth-context';

import { AuthContent } from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/ui/LoadingOverlay';

export const SignupScreen = () => {
  const authCtx = useContext(AuthContext);
  const [isAuthing, setIsAuthing] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthing(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Signup failed!', 'Could not create user');
      setIsAuthing(false);
    }
  };

  if (isAuthing) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};
