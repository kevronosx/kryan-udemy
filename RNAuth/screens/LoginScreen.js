import { Alert } from 'react-native';
import { useState, useContext } from 'react';

import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';

import { AuthContent } from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/ui/LoadingOverlay';

export const LoginScreen = () => {
  const authCtx = useContext(AuthContext);
  const [isAuthing, setIsAuthing] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthing(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Login failed!', 'Could not log you in');
      setIsAuthing(false);
    }
  };

  if (isAuthing) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};
