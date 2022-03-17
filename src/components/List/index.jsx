import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Tasks from '../Tasks';
import ConfirmDelete from '../ConfirmDelete';

import './style.scss';

import delete_black from '../../media/icons/delete_black.svg';
import delete_white from '../../media/icons/delete_white.svg';
import AddTaskButton from '../AddTaskButton';

const List = ({ ID, name, tasks, deleteList }) => {

  const { theme } = useContext(ThemeContext);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <section className={theme === 'light' ? 'list light' : 'list dark'}>
      <h2 className='list--title'>
        {name}
      </h2>

      <button
        className='list--delete'
        onClick={() => {
          setShowConfirmDelete(true);
        }}
      >
        <img
          className='list--delete--icon'
          alt='Supprimer cette liste'
          src={theme === 'light' ? delete_black : delete_white}
        />
        <span className='list--delete--label'>
          Supprimer
        </span>
      </button>

      <Tasks
        tasks={tasks}
      />

      <AddTaskButton
        listID={ID}
      />

      { showConfirmDelete && (
        <ConfirmDelete
          listID={ID}
          listName={name}
          deleteList={deleteList}
          setShowConfirmDelete={setShowConfirmDelete}
        />
      )}
    </section>
  );
};


export default List;