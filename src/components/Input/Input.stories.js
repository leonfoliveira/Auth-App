import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Input from './Input';
import { View } from 'react-native';

storiesOf('Button', module).add('with text', () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Input onChange={() => console.log('CHANGE')} />
  </View>
));
