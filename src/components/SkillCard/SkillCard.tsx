import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './SkillCard.styles';

type SkillCardProps = TouchableOpacityProps & {
  skill: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{skill}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
