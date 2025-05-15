import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

export const WelcomeScreen = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const [message, setMessage] = useState('');

  useEffect(() => {
    const url = `https://reactnativecourse-2f05f-default-rtdb.firebaseio.com/message.json?auth=${token}`;
    axios.get(url).then(response => setMessage(response.data));
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
