import React, { useRef, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Modal from '../Modal';

import './style.scss';

const ConfirmDelete = ({ listID, listName, deleteList, setShowConfirmDelete }) => {

  const { theme } = useContext(ThemeContext);

  const confirmDeleteRef = useRef(null);

  const closeModal = () => {
    // Smooth close modal
    confirmDeleteRef.current.style.opacity = '0';

    // Then toggle the component
    setTimeout(() => {
      setShowConfirmDelete(false);
    }, 300);
  };

  return (
    <div
      className={theme === 'light' ? 'confirm__delete light' : 'confirm__delete dark'}
      ref={confirmDeleteRef}
    >
      <Modal
        setShowModal={setShowConfirmDelete}
      >

        <p className='confirm__delete--text'>
          Êtes-vous certain de vouloir supprimer la liste "{listName}" ?
        </p>
        
        <p className='confirm__delete--text'>
          Toutes les tâches qu'elle contient seront perdues à tout jamais dans les méandres de l'oubli.
        </p>

        <section className='confirm__delete--buttons'>

          <button
            className='confirm__delete--buttons--item confirm__delete--buttons--item-confirm'
            onClick={() => {
              deleteList(listID);
              closeModal();
            }}
          >
            Confirmer
          </button>

          <button
            className='confirm__delete--buttons--item confirm__delete--buttons--item-cancel'
            onClick={() => {
              closeModal();
            }}  
          >
            Annuler
          </button>

        </section>

      </Modal>
    </div>
  );
};

export default ConfirmDelete;