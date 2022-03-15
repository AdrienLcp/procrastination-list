import React, { useState, useContext, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Modal from '../Modal';

import './style.scss';

import save from '../../media/icons/save.svg';

const NewListForm = ({ setShowForm, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const sectionRef = useRef(null);

  const [listName, setListName] = useState('Nouvelle liste');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeListName = (newName) => {
    if (newName.length > 30) {
      setAlertMessage('Le nom de votre liste ne doit pas dépasser 30 caractères');
    } else {
      setAlertMessage('');
      setListName(newName);
    };
  };

  const handleSubmitNewList = (event) => {
    event.preventDefault();

    const previousLists = JSON.parse(localStorage.getItem('lists'));
    
    const newList = {
      name: listName,
      tasks: ['truc à faire', 'autre truc à faire']
    };
    
    if (previousLists) {
      localStorage.setItem('lists', JSON.stringify([...previousLists, newList]));

      const newListOfLists = [...previousLists, newList];
      setLists(newListOfLists);

    } else {
      localStorage.setItem('lists', JSON.stringify([newList]));

      const newListOfLists = [newList];
      setLists(newListOfLists);
    };

    closeModal();
  };

  const closeModal = () => {
    sectionRef.current.style.opacity = '0';

    setTimeout(() => {
      setShowForm(false);
    }, 300);
  };

  return (
    <section ref={sectionRef}>

      <Modal
        setShowModal={setShowForm}
      >
        <form 
          className={theme === 'light' ? 'new_list light' : 'new_list dark'}
        >

          <h2 className='new_list--title'>
            {listName === '' ? 'Nouvelle Liste' : listName}
          </h2>

          <label className="new_list--name">
            Choisissez un nom pour votre liste

            <input
              type="text"
              className="new_list--name--input"
              placeholder={'Liste de choses à faire'}
              onChange={(event) => {
                handleChangeListName(event.target.value);
              }}
            />

          </label>

          <span className='new_list--alert'>
            {alertMessage}
          </span>

          <button
            type='submit'
            className='new_list--submit'
            onClick={(event) => {
              handleSubmitNewList(event);
            }}
          >
            <div className='new_list--submit--icon'>
              <img
                className='new_list--submit--icon--img'
                alt='Sauvegarder la liste'
                src={save}
              />
            </div>
            <span className={theme === 'light' ? 'new_list--submit--label light' : 'new_list--submit--label dark'}>
              Sauvegarder
            </span>
          </button>

        </form>
        
      </Modal>

    </section>
  );
};

export default NewListForm;