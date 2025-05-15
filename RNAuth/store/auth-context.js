import { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = token => {
    AsyncStorage.setItem('token', token);
    return setAuthToken(token);
  };

  const logout = () => {
    AsyncStorage.removeItem('token');
    return setAuthToken(null);
  };

  const values = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
