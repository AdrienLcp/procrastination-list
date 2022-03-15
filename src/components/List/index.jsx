import React, { useEffect, useState, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Task from '../Task';

import './style.scss';

import delete_black from '../../media/icons/delete_black.svg';
import delete_white from '../../media/icons/delete_white.svg';
import ConfirmDelete from '../ConfirmDelete';

const List = ({ ID, name, tasks, deleteList }) => {

  const { theme } = useContext(ThemeContext);

  const [hasTasks, setHasTasks] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (tasks === []) {
      console.log(tasks);
    } else {
      setHasTasks(true);
    };
  }, [tasks]);

  useEffect(() => {
    if (confirmDelete === true) {
      deleteList(ID);
    } else {
      return;
    };
  }, [confirmDelete]);

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

      <ul className='list--tasks'>

        { !hasTasks ? 'Créer une tâche' : 

          tasks.map((task, index) => {
            return (
              <li key={index}>
                <Task
                  content={task}
                />
              </li>
            );
          })
        }
      </ul>

      <button className='list--add_list'>
        Ajouter une tâche
      </button>


      { showConfirmDelete && (
        <ConfirmDelete
          listName={name}
          setConfirmDelete={setConfirmDelete}
          setShowConfirmDelete={setShowConfirmDelete}
        />
      )}
    </section>
  );
};

export default List;