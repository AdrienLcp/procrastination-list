import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import NewListForm from '../../components/NewListForm';

import './styles.scss';

const AddButton = () => {

  const { theme } = useContext(ThemeContext);

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        className='button'
        onClick={() => {
          setShowForm(true);
        }}
      >
        <span className={theme === 'light' ? 'light button--icon' : 'dark button--icon'}>
          +
        </span>
        <label className={theme === 'light' ? 'light button--label' : 'dark button--label'}>
          Créer une liste
        </label>
      </button>

      { showForm && (
        <NewListForm
          setShowForm={setShowForm}
        />
      )}
    </>
  );
};

export default AddButton;