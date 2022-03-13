import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Modal from '../Modal';

import './style.scss';

const NewListForm = ({ setShowForm }) => {

  const { theme } = useContext(ThemeContext);

  const [listName, setListName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeListName = (newName) => {
    if (newName.length > 20) {
      setAlertMessage('Le nom de votre liste ne doit pas dépasser 20 caractères')
    } else {
      setListName(newName);
    };
  };

  return (
    <Modal 
      setShowModal={setShowForm}
    >

      <form 
        className={theme === 'light' ? 'new_list light' : 'new__list dark'}
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

        <span>
          {alertMessage}
        </span>
      </form>
      
    </Modal>
  );
};

export default NewListForm;