import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const AddTaskButton = ({ listID }) => {

  const { theme } = useContext(ThemeContext);

  const [taskName, setTaskName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeTaskName = (newTaskName) => {
    if (newTaskName.length > 50) {
      setAlertMessage('Le nom de votre tâche ne doit pas dépasser 50 caractères');
    } else {
      setTaskName(newTaskName);
    };
  };

  const handleSubmitNewTask = () => {
    if (taskName === '') {
      return;
    } else {
      // console.log(JSON.parse(localStorage.getItem('lists')));

      // const previousList = JSON.parse(localStorage.getItem('lists'));


      // localStorage.setItem('lists', JSON.stringify(JSON.parse(localStorage.getItem('lists'))[listID].tasks.push(taskName)));

      // localStorage.setItem('lists', JSON.stringify(newList));

      // console.log(JSON.parse(localStorage.getItem('lists')));

      setTaskName('');
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
            event.preventDefault();
            handleSubmitNewTask();
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