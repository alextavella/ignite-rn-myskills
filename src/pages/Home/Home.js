import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Input, SkillCard, Text } from '../../components';
import { useTheme } from '../../hooks';
import { styles } from './Home.styles';

const Home = () => {
  const { backgroundStyle, backgroundColor } = useTheme();

  const [gretting] = React.useState(() => {
    const currentHour = new Date(Date.now()).getHours();
    return currentHour <= 12
      ? 'Good morning!'
      : currentHour < 18
      ? 'Good afternoon!'
      : 'Good night!';
  });

  const [newSkill, setNewSkill] = React.useState('');
  const [mySkills, setMySkills] = React.useState([
    'Flutter',
    'Android',
    'Javascript',
    'React Js',
    'React Native',
    'Node.js',
    'Typescript',
    'MongoDB',
    'Postgres',
    'MySQL',
  ]);

  const handleAddNewSkill = React.useCallback(() => {
    if (newSkill) {
      setMySkills(state => [...state, newSkill]);
      setNewSkill('');
    }
  }, [newSkill]);

  const handleRemoveSkill = React.useCallback(index => {
    setMySkills(state => state.filter((_, i) => i !== index));
  }, []);

  return (
    <>
      <SafeAreaView backgroundColor={backgroundStyle} />
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.title}>Welcome, Alex</Text>

        <Text style={styles.greetings}>{gretting}</Text>

        <Input
          placeholder="New skill"
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button onPress={handleAddNewSkill}>Add Skill</Button>

        <Text style={[styles.title, styles.subtitle]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item: skill, index }) => (
            <SkillCard skill={skill} onPress={() => handleRemoveSkill(index)} />
          )}
        />
      </View>
    </>
  );
};

export default Home;
