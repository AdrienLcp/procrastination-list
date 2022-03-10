import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './styles.scss';

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
        <button
          className='modal--container--quit'
          onClick={() => {
            props.closeModal();
          }}
        >
          <span className={theme === 'light' ? 'light modal--container--quit--icon' : 'dark modal--container--quit--icon'}>
            +
          </span>
          <p className='modal--container--quit--label'>
            Fermer
          </p>
        </button>

        {props.children}

      </div>
    </section>
  );
};

export default Modal;