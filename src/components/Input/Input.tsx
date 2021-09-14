import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './Input.styles';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <TextInput style={styles.input} placeholderTextColor="#555" {...rest} />
  );
};

export default Input;
