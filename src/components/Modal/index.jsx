import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import CloseButton from '../CloseButton';

import './style.scss';

const Modal = (props) => {

  const { theme } = useContext(ThemeContext);

  return (
    <section className='modal'>
      <div 
        className='behind'
        onClick={() => {
          props.closeModal();
        }}
      ></div>
      
      <div className={theme === 'light' ? 'light modal--container' : 'dark modal--container'}>

        <CloseButton
          close={props.closeModal}
        />

        {props.children}

      </div>
    </section>
  );
};

export default Modal;