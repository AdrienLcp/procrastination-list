import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './styles.scss';

const DarkMode = () => {

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <section
      className='dark_mode'
    >
      <span
        className={theme === 'light' ? 'light dark_mode--title' : 'dark dark_mode--title'}
      >
        🌛
      </span>
      <input
        type='checkbox'
        className='dark_mode--input'
        checked={theme === 'dark' ? true : false}
        onClick={() => {
          toggleTheme();
        }}
      />
    </section>
  );
};

export default DarkMode;