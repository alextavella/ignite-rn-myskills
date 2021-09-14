import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
