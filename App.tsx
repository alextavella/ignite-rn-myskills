import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from './src/hooks';
import { Home } from './src/pages/Home';
// import { App as AppView } from './src/pages/App';

function App() {
  const { barStyle } = useTheme();

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <Home />
    </>
  );
}

export default App;
