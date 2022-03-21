import React, { useContext, useState, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const AddTaskButton = ({ listID, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const addTaskRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const [taskName, setTaskName] = useState('');
  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

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

    setShowButton(true);
    setShowForm(false);
  };

  const showInput = () => {
    addTaskRef.current.classList.add('opened');
    
    setShowForm(true);

    setTimeout(() => {
      setShowButton(false);
    }, 300);
  };

  return (
    <section
      ref={addTaskRef}
      className={theme === 'light' ? 'add__task light' : 'add__task dark'}
    >
      { showButton && (

        <button
          ref={buttonRef}
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
      )}

      { showForm && (

        <form
          ref={formRef}
          className='add__task--form'
        >
          <input
            autoFocus={true}
            type='text'
            className='add__task--form--input'
            value={taskName}
            onChange={(event) => {
              handleChangeTaskName(event.target.value);
            }}
          />

          <button
            className='add__task--form--submit'
            onClick={(event) => {
              handleSubmitNewTask(event);
            }}
          />
        </form>

      )}
    </section>
  );
};

export default AddTaskButton;