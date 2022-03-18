import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const AddTaskButton = ({ listID, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const [taskName, setTaskName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeTaskName = (newTaskName) => {
    if (newTaskName.length > 50) {
      setAlertMessage('Votre tâche ne doit pas dépasser 50 caractères');
    } else {
      setTaskName(newTaskName);
    };
  };

  const handleSubmitNewTask = (event) => {
    event.preventDefault();

    if (taskName === '') {
      return;
    } else {

      const lists = JSON.parse(localStorage.getItem('lists'));

      localStorage.removeItem('lists');

      lists[listID].tasks.push(taskName);

      localStorage.setItem('lists', JSON.stringify(lists));

      setTaskName('');
      setLists(lists);
    };
  };

  return (
    <>
      <form className={theme === 'light' ? 'add__task light' : 'add__task dark'}>

        +

        <span className='add__task--label'>
          Ajouter une tâcher
        </span>

        <input
          type='text'
          className='add__task--input'
          value={taskName}
          onChange={(event) => {
            handleChangeTaskName(event.target.value);
          }}
        />
        <button
          className='add__task--submit'
          onClick={(event) => {
            handleSubmitNewTask(event);
          }}
        >
          Save
        </button>
      </form>

      <span className='alert'>
        {alertMessage}
      </span>
    </>
  );
};

export default AddTaskButton;