import React from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native';
import { useTheme } from '../../hooks';

type TextProps = BaseTextProps;

const Text: React.FC<TextProps> = ({ children, style, ...rest }) => {
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
