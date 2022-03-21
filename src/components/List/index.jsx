import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import Tasks from '../Tasks';
import ConfirmDelete from '../ConfirmDelete';

import './style.scss';
import AddTaskButton from '../AddTaskButton';
import DeleteListButton from '../DeleteListButton';

const List = ({ ID, name, tasks, deleteList, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <section className={theme === 'light' ? 'list light' : 'list dark'}>
      <h2 className='list--title'>
        {name}
      </h2>

      <DeleteListButton
        setShowConfirmDelete={setShowConfirmDelete}
      />

      <Tasks
        tasks={tasks}
        listID={ID}
        setLists={setLists}
      />

      <AddTaskButton
        listID={ID}
        setLists={setLists}
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