import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Modal from '../Modal';

import './style.scss';

import save_white from '../../media/icons/save_white.svg';
import save_black from '../../media/icons/save_black.svg';

const NewListForm = ({ setShowForm }) => {

  const { theme } = useContext(ThemeContext);

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

  const handleSubmitNewList = () => {
    const previousLists = localStorage.getItem('lists');

    if (previousLists) {
      console.log('il y a déjà une liste qui existe, faut sen occuper');
    } else {
      localStorage.setItem('lists', [{
          ID: 0,
          name: listName,
          content: 'faire quelque chose'
        }
      ]);
    };
  };

  return (
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
            placeholder={listName}
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
          onClick={() => {
            handleSubmitNewList();
          }}
        >
          <div className='new_list--submit--icon'>
            <img
              className='new_list--submit--icon--img'
              alt='Sauvegarder la liste'
              src={theme === 'light' ? save_black : save_white}
            />
          </div>
          <span className={theme === 'light' ? 'new_list--submit--label light' : 'new_list--submit--label dark'}>
            Sauvegarder
          </span>
        </button>

      </form>
      
    </Modal>
  );
};

export default NewListForm;