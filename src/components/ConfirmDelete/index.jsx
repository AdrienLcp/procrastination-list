import React, { useRef } from 'react';

import Modal from '../Modal';

import './style.scss';

const ConfirmDelete = ({ listName, setConfirmDelete, setShowConfirmDelete }) => {

  const confirmDeleteRef = useRef(null);

  const closeModal = () => {
    confirmDeleteRef.current.style.opacity = '0';

    setTimeout(() => {
      setShowConfirmDelete(false);
    }, 300);
  };

  return (
    <div
      className='confirm_delete'
      ref={confirmDeleteRef}
    >
      <Modal
        setShowModal={setShowConfirmDelete}
      >

        <p className='confirm_delete--text'>
          Êtes-vous certain de vouloir supprimer cette liste "{listName}" ?
          <br />
          Toutes les tâches qu'elle contient seront perdues à tout jamais dans les méandres de l'oubli.
        </p>

        <button
          className='confirm_delete--button-confirm'
          onClick={() => {
            setConfirmDelete(true);
            closeModal();
          }}
        >
          Confirmer
        </button>

        <button
          className='confirm_delete--button-cancel'
          onClick={() => {
            closeModal();
          }}  
        >
          Annuler
        </button>

      </Modal>
    </div>
  );
};

export default ConfirmDelete;