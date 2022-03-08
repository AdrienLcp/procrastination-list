import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const previousTheme = localStorage.getItem('theme');

    if (previousTheme === 'light') {
      setTheme('light');
    };

    if (previousTheme === 'dark') {
      setTheme('dark');
    };
  }, []);
  
  const toggleTheme = () => {

    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    };
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;