import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const CloseButton = ({ close }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={theme === 'light' ? 'light close' : 'dark close'}
      onClick={() => {
        close();
      }}
    >

      <span className='close--icon'>
        +
      </span>

      <p className='close--label'>
        Fermer
      </p>

    </button>
  );
};

export default CloseButton;