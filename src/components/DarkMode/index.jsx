import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './styles.scss';

const DarkMode = () => {

  const { toggleTheme, theme} = useContext(ThemeContext);

  return (
    <div className='dark_mode'>
      <button
        className={theme === 'light' ? 'dark_mode--button light' :  'dark_mode--button dark'}
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
    </div>
  );
};

export default DarkMode;