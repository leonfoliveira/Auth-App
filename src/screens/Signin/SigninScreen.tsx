import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Template from '../../components/SignTemplate/SignTemplate';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { Title, Link, LinkText } from './style';

import { useAuth } from '../../contexts/Auth';

const SigninScreen: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { loading, signin } = useAuth();

  return (
    <Template>
      <Title>SIGNIN</Title>
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
      <Button text={'Signin'} onPress={() => signin && signin()} />
      <Link onPress={() => navigation.navigate('Signup')}>
        <LinkText>Não tem cadastro?</LinkText>
      </Link>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 15 }} />
      ) : null}
    </Template>
  );
};

export default SigninScreen;
