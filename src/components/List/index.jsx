import React, { useState, useContext, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Tasks from '../Tasks';
import ConfirmDelete from '../ConfirmDelete';
import AddTaskButton from '../AddTaskButton';
import DeleteListButton from '../DeleteListButton';

import './style.scss';

const List = ({ ID, name, tasks, setLists, setHasLists }) => {

  const { theme } = useContext(ThemeContext);

  const listRef = useRef(null);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);  
  
  // function for elete a list
  const deleteList = (listID) => {
    // Set the localStorage's lists in a const
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    // If there is just one list,
    if (previousLists.length === 1) {
      // We directly remove the lists from the local storage
      localStorage.removeItem('lists');

      // and set the lists state to an empty array
      setLists([]);

      // Update the state "hasList" for center the AddListButton component
      setHasLists(false);
      
    } else {
      // If there is many lists, we delete the list that with the right ID
      previousLists.splice(listID, 1);

      // Update the state
      setLists(previousLists);

      // And update the local storage
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
      ref={listRef}
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