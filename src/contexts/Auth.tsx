import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';

interface AuthContextTypes {
  loading: boolean;
  signed: boolean;
  signup?: Function;
  signin?: Function;
  signout?: Function;
}

const AuthContext = createContext<AuthContextTypes>({
  loading: false,
  signed: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('@LFAPP-token');
      setLoading(false);

      if (token) setSigned(true);
    })();
  }, []);

  async function signup() {
    setLoading(true);
    await AsyncStorage.setItem('@LFAPP-token', 'TOKEN_SAMPLE');
    setLoading(false);
    setSigned(true);
  }

  async function signin() {
    setLoading(true);
    await AsyncStorage.setItem('@LFAPP-token', 'TOKEN_SAMPLE');
    setLoading(false);
    setSigned(true);
  }

  async function signout() {
    setLoading(true);
    await AsyncStorage.removeItem('@LFAPP-token');
    setLoading(false);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ loading, signed, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
