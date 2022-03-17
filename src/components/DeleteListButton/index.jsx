import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

import delete_black from '../../media/icons/delete_black.svg';
import delete_white from '../../media/icons/delete_white.svg';

const DeleteListButton = ({ setShowConfirmDelete }) => {

  const { theme } = useContext(ThemeContext);

  return (      
    <button 
      className={theme === 'light' ? 'delete__list light' : 'delete__list dark'}
      onClick={() => {
        setShowConfirmDelete(true);
      }}
    >

      <img
        className='delete__list--icon'
        alt='Supprimer cette liste'
        src={theme === 'light' ? delete_black : delete_white}
      />

      <span className='delete__list--label'>
        Supprimer
      </span>

    </button>
  );
};

export default DeleteListButton;