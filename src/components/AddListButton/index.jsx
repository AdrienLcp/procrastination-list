import React, { useState, useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import NewListForm from '../NewListForm';

import './style.scss';

const AddListButton = ({ hasLists, setLists, setHasLists }) => {

  const { theme } = useContext(ThemeContext);

  const buttonRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!hasLists) {
      buttonRef.current.classList.add('no_list');
    } else {
      buttonRef.current.classList.remove('no_list');
    };
  }, [hasLists]);

  return (
    <>
      <button
        ref={buttonRef}
        className='add__list'
        onClick={() => {
          setShowForm(true);
        }}
      >
        <span className={theme === 'light' ? 'light add__list--icon' : 'dark add__list--icon'}>
          +
        </span>
        <label className={theme === 'light' ? 'light add__list--label' : 'dark add__list--label'}>
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