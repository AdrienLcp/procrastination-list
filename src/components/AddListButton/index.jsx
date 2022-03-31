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
    } else if (hasLists) {
      buttonRef.current.classList.remove('no_list');
    };
  }, [hasLists]);

  return (
    <>
      <section 
        ref={buttonRef}
        className='button--container'
      >
        <button
          className={theme === 'light' ? 'add__list light' : 'add__list dark'}
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
      </section>

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