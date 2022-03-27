import React, { useState, useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import NewListForm from '../NewListForm';

import './style.scss';

const AddListButton = ({ hasLists, setLists, setHasLists }) => {

  const { theme } = useContext(ThemeContext);

  const buttonRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (hasLists) {
      buttonRef.current.classList.remove('no_list');
    } else {
      buttonRef.current.classList.add('no_list');
    }
  }, [hasLists]);

  return (
    <>
      <button
        ref={buttonRef}
        className={theme === 'light' ? 'add__list no_list light' : 'add__list no_list dark'}
        onClick={() => {
          setShowForm(true);
        }}
      >
        <span className='add__list--icon'>
          +
        </span>
        <label className='add__list--label'>
          Créer une liste
        </label>
      </button>

      { showForm && (
        <NewListForm
          setShowForm={setShowForm}
          setLists={setLists}
          setHasLists={setHasLists}
        />
      )}
    </>
  );
};

export default AddListButton;