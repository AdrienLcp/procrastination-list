import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const DarkMode = () => {

  // Get the fonction for toggle the theme in context
  const { toggleTheme, theme } = useContext(ThemeContext);

  const themeButtonRef = useRef(null);

  // User click on the toggle button
  const switchTheme = () => {
    // We toggle between light mode and dark mode
    toggleTheme();

    // And toggle a class for a cool button
    themeButtonRef.current.classList.toggle('checked');
  };

  return (
    <button
      className={theme === 'dark' ? 'dark_mode dark' : 'dark_mode light'}
      onClick={() => {
        switchTheme();
      }}
    >

      <div
        ref={themeButtonRef}
        className={theme === 'dark' ? 'dark_mode--input checked' : 'dark_mode--input'}
      />

      <span className='dark_mode--span'>
        Mode sombre
      </span>

    </button>
  );
};

export default DarkMode;