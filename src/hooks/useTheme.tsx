import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  const backgroundStyle = {
    backgroundColor,
  };

  const color = isDarkMode ? Colors.white : Colors.black;

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return {
    backgroundStyle,
    backgroundColor,
    barStyle,
    color,
  };
};
