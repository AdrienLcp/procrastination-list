import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // The favorite theme is saved in local storage
    const previousTheme = localStorage.getItem('theme');

    // Update the state in terms of previous theme
    if (previousTheme === 'light') {
      setTheme('light');
    } else if (previousTheme === 'dark') {
      setTheme('dark');
    };
  }, []);
  
  const toggleTheme = () => {
    // When user toggle the theme, in DarkMode component, 
    // we update the state and save it in local storage
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