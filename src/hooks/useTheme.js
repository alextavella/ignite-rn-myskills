import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const backgroundColor = isDarkMode ? Colors.black : Colors.white;

  const color = isDarkMode ? Colors.white : Colors.black;

  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return {
    backgroundStyle,
    backgroundColor,
    barStyle,
    color,
  };
};
