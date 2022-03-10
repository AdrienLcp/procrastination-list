import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const DarkMode = () => {

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <section
      className='dark_mode'
    >

      <input
        type='checkbox'
        className='dark_mode--input'
        checked={theme === 'dark' ? true : false}
        onClick={() => {
          toggleTheme();
        }}
      />

      <span className='dark_mode--span'>
        Mode sombre
      </span>

    </section>
  );
};

export default DarkMode;