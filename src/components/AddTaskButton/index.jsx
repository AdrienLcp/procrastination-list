import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const AddTaskButton = ({ listID, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const addTaskRef = useRef(null);

  const [taskName, setTaskName] = useState('');

  const handleChangeTaskName = (newTaskName) => {
    setTaskName(newTaskName);
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
      
      addTaskRef.current.classList.remove('opened');
    };
  };

  const showInput = () => {
    addTaskRef.current.classList.add('opened');
  };

  return (
    <section
      ref={addTaskRef}
      className={theme === 'light' ? 'add__task light' : 'add__task dark'}
    >

      <button
        className='add__task--button'
        onClick={() => {
          showInput();
        }}
      >
        <span className='add__task--button--icon'>
          +
        </span>

        <span className='add__task--button--label'>
          Ajouter une tâche
        </span>
      </button>

      <form className='add__task--form'>
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
        />

      </form>
    </section>
  );
};

export default AddTaskButton;