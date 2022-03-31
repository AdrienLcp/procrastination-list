import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

import delete_black from '../../media/icons/delete_black.svg';
import delete_white from '../../media/icons/delete_white.svg';

const Task = ({ taskID, content, listID, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const deleteTask = () => {
    // Find the lists saved in local storage
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    // In the right list, we find the right task, with his ID, and delete it.
    previousLists[listID].tasks.splice(taskID, 1);

    // Then, we update the local storage with our new array
    localStorage.setItem('lists', JSON.stringify(previousLists));

    // And update the lists state too
    setLists(previousLists);
  };

  return (
    <section className={theme === 'light' ? 'task light' : 'task dark'}>

      <p className='task--content'>
        {content}
      </p>

      <button
        className='task--delete'
        onClick={() => {
          deleteTask();
        }}
      >
        <img
          className='task--delete--icon'
          alt='Supprimer cette tâche'
          src={theme === 'light' ? delete_black : delete_white}
        />
      </button>
    </section>
  );
};

export default Task;