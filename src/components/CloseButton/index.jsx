import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const CloseButton = ({ close }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <button className='close' onClick={() => {close()}}>

      <span className={theme === 'light' ? 'light close--icon' : 'dark close--icon'}>
        +
      </span>

      <p className='close--label'>
        Fermer
      </p>

    </button>
  );
};

export default CloseButton;