import React from 'react';

import Home from './pages/Home';

import DarkMode from './components/DarkMode';

import ThemeContextProvider from './context/ThemeContext';

import './styles/index.scss';

const App = () => {
  return (
    <ThemeContextProvider>
      <Home />
      <DarkMode />
    </ThemeContextProvider>
  );
}

export default App;