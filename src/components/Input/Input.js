import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './Input.styles';

const Input = ({ ...rest }) => {
  return (
    <TextInput style={styles.input} placeholderTextColor="#555" {...rest} />
  );
};

export default Input;
