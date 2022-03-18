import React, { useContext, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import CloseButton from '../CloseButton';

import './style.scss';

const Modal = (props) => {

  const { theme } = useContext(ThemeContext);

  const modalRef= useRef(null);

  const closeModal = () => {
    modalRef.current.style.opacity = '0';

    setTimeout(() => {
      props.setShowModal(false);
    }, 300);
  };

  return (
    <section
      className='modal'
      ref={modalRef}
    >
      <div 
        className='behind'
        onClick={() => {
          closeModal();
        }}
      ></div>
      
      <div className={theme === 'light' ? 'modal--container light' : 'modal--container dark'}>

        <CloseButton
          close={closeModal}
        />

        {props.children}

      </div>
    </section>
  );
};

export default Modal;