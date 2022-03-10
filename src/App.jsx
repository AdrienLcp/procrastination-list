import React from 'react';

import Home from './pages/Home';

import ThemeContextProvider from './context/ThemeContext';

import './styles/index.scss';

const App = () => {
  return (
    <ThemeContextProvider>

      <Home />

    </ThemeContextProvider>
  );
}

export default App;