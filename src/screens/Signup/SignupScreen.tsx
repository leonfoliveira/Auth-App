import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Template from '../../components/SignTemplate/SignTemplate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Title, Link, LinkText } from './style';

import { useAuth } from '../../contexts/Auth';

const SignupScreen: React.FC = (): React.ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const { loading, signup } = useAuth();

  return (
    <Template>
      <Title>SIGNUP</Title>
      <Input
        placeholder={'Name'}
        autoCapitalize="none"
        value={name}
        onChange={e => setName(e.nativeEvent.text)}
      />
      <Input
        placeholder={'E-mail'}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <Input
        placeholder={'Password'}
        autoCapitalize="none"
        autoCompleteType="password"
        secureTextEntry={true}
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <Input
        placeholder={'Confirm Password'}
        autoCapitalize="none"
        autoCompleteType="password"
        secureTextEntry={true}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.nativeEvent.text)}
      />
      <Button text={'Signup'} onPress={() => signup && signup()} />
      <Link onPress={() => navigation.navigate('Signin')}>
        <LinkText>Já tem cadastro?</LinkText>
      </Link>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 15 }} />
      ) : null}
    </Template>
  );
};

export default SignupScreen;
