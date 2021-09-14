import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './SkillCard.styles';

const SkillCard = ({ skill, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{skill}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
