import React, { useContext, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import DarkMode from '../DarkMode';
import CloseButton from '../CloseButton';

import './style.scss';

import settings_white from '../../media/icons/settings_white.svg';
import settings_black from '../../media/icons/settings_black.svg';

const SettingsMenu = () => {

  const { theme } = useContext(ThemeContext);

  const buttonRef = useRef(null);
  const settingsRef = useRef(null);

  const openSettings = () => {
    buttonRef.current.classList.add('opened');
    settingsRef.current.classList.add('opened');
  };

  const closeSettings = () => {
    buttonRef.current.classList.remove('opened');
    settingsRef.current.classList.remove('opened');
  };

  return (
    <div className={ theme === 'light' ? 'settings light' : 'settings dark'}>

      <section
        className='settings--container'
        ref={settingsRef}
      >
        
        <CloseButton 
          close={closeSettings}
        />

        <DarkMode />


      </section>

      <button
        ref={buttonRef}
        className='settings--button'
        onClick={() => {
          openSettings();
        }}
      >
        <img
          className='settings--button--img'
          alt="Paramètres de l'application"
          src={theme === 'light' ? settings_black : settings_white}
        />
      </button>

    </div>
  );
};

export default SettingsMenu;