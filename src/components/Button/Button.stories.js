import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import { View } from 'react-native';

storiesOf('Button', module).add('with text', () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button text="Hello" onPress={() => console.log('LOGIN')} />
  </View>
));
