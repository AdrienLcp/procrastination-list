import React, { useRef } from 'react';

import Modal from '../Modal';

import './style.scss';

const NewListForm = ({ setShowForm }) => {

  const modalRef= useRef(null);

  const closeModal = () => {
    modalRef.current.style.transition = '.3s';
    modalRef.current.style.opacity = '0';

    setTimeout(() => {
      setShowForm(false);
    }, 300);
  };

  return (
    <div ref={modalRef}>
      <Modal closeModal={closeModal}>

        <form className='new_list'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, pariatur necessitatibus doloribus itaque eligendi debitis facilis nihil, quam rem eveniet quibusdam incidunt magnam repellat corporis suscipit nulla veritatis perferendis? Voluptatibus assumenda reprehenderit commodi blanditiis quia et temporibus distinctio nam quos omnis inventore, magnam dolore, optio nisi, aliquam illum. Minima, sit!
        </form>
        
      </Modal>
    </div>
  );
};

export default NewListForm;