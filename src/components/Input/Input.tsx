import React, { useRef } from 'react';
import { StyleSheet, TextInputProps, Animated } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ ...inputProps }) => {
  const borderWidth = useRef(new Animated.Value(0)).current;

  const borderIn = () => {
    Animated.timing(borderWidth, {
      toValue: 2,
      duration: 200,
    }).start();
  };

  const borderOut = () => {
    Animated.timing(borderWidth, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  return (
    <Animated.View
      style={{ ...AnimatedViewStyle, borderBottomWidth: borderWidth }}
    >
      <Container {...inputProps} onFocus={borderIn} onBlur={borderOut} />
    </Animated.View>
  );
};

const AnimatedViewStyle = {
  width: '100%',
  height: 40,
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  borderBottomColor: '#8bc34a',
};

export default Input;
