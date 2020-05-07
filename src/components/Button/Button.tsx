import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  text: string;
  onPress: (event?: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }: ButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default Button;
