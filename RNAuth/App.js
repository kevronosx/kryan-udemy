import { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { AuthContextProvider, AuthContext } from './store/auth-context';
import { Colors } from './constants/styles';

import { LoginScreen } from './screens/LoginScreen';
import { SignupScreen } from './screens/SignupScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { IconButton } from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: Colors.primary100 },
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

const AuthenticatedStack = () => {
  const authCtx = useContext(AuthContext);

  const logout = () => authCtx.logout();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        authCtx.authenticate(token);
      }
    })();
  }, []);

  return <Navigation />;
};

export default App = () => {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
};
