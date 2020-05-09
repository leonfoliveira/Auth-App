import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Home/HomeScreen';
import SigninScreen from '../Signin/SigninScreen';
import SignupScreen from '../Signup/SignupScreen';
// import LoadingScreen from '../Loading/LoadingScreen';

import { useAuth } from '../../contexts/Auth';

const Stack = createStackNavigator();

const RootScreen: React.FC = () => {
  const { loading, signed } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signed ? 'Home' : 'Signin'}
        screenOptions={{
          headerShown: false,
        }}
      >
        {signed ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;
