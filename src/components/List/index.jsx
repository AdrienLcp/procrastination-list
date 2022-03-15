import React, { useEffect, useState } from 'react';

import Task from '../Task';

import './style.scss';

const List = ({ name, tasks }) => {

  const [hasTasks, setHasTasks] = useState(false);

  useEffect(() => {
    if (tasks === []) {
      return;
    } else {
      setHasTasks(true);
    };
  }, []);

  return (
    <section className='list'>
      <h2 className='list--title'>
        {name}
      </h2>

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

      <button>
        Ajouter une tâche
      </button>
    </section>
  );
};

export default List;