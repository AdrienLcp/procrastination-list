import React, { useState, useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import NewListForm from '../../components/NewListForm';

import './style.scss';

const AddButton = ({ hasLists, setLists }) => {

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
        className='add__button'
        onClick={() => {
          setShowForm(true);
        }}
      >
        <span className={theme === 'light' ? 'light add__button--icon' : 'dark add__button--icon'}>
          +
        </span>
        <label className={theme === 'light' ? 'light add__button--label' : 'dark add__button--label'}>
          Créer une liste
        </label>
      </button>

      { showForm && (
        <NewListForm
          setShowForm={setShowForm}
          setLists={setLists}
        />
      )}
    </>
  );
};

export default AddButton;