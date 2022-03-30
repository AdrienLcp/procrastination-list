import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Tasks from '../Tasks';
import ConfirmDelete from '../ConfirmDelete';
import AddTaskButton from '../AddTaskButton';
import DeleteListButton from '../DeleteListButton';

import './style.scss';

const List = ({ ID, name, tasks, setLists, setHasLists }) => {

  const { theme } = useContext(ThemeContext);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);  
  
  const deleteList = (listID) => {
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    if (previousLists.length === 1) {
      localStorage.removeItem('lists');
      setLists([]);
      setHasLists(false);
    } else {

      previousLists.splice(listID, 1);

      setLists(previousLists);
      localStorage.setItem('lists', JSON.stringify(previousLists));
    };
  };

  const handleDrag = () => {
    console.log('dragging');
  };

  return (
    <div
      draggrable="true"
      onDrag={handleDrag}
      className={theme === 'light' ? 'list light' : 'list dark'}
    >
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
    </div>
  );
};


export default List;