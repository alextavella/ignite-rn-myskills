import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Button.styles';

const Button = ({ children, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
