import React from 'react';
import { Text } from 'react-native';

import Button from '../../components/Button/Button';

import { Container } from './style';

import { useAuth } from '../../contexts/Auth';

const HomeScreen: React.FC = () => {
  const { signout } = useAuth();

  return (
    <Container>
      <Text>Home Screen</Text>
      <Button text="Signout" onPress={() => signout && signout()} />
    </Container>
  );
};

export default HomeScreen;
