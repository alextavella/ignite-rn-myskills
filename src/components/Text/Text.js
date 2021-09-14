import React from 'react';
import { Text as BaseText } from 'react-native';
import { useTheme } from '../../hooks';

const Text = ({ children, style, ...rest }) => {
  const { color } = useTheme();

  return (
    <BaseText
      style={[
        style,
        {
          color,
        },
      ]}
      {...rest}>
      {children}
    </BaseText>
  );
};

export default Text;
