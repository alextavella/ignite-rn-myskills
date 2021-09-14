import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = TouchableOpacityProps & {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, disabled ? styles.buttonDisabled : {}]}
      disabled={disabled}
      {...rest}>
      <Text
        style={[styles.buttonText, disabled ? styles.buttonTextDisabled : {}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
