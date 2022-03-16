import React, { useEffect, useState } from 'react';

import Task from '../Task';

import './style.scss';

const Tasks = ({ tasks }) => {

  const [hasTasks, setHasTasks] = useState(false);

  useEffect(() => {
    if (tasks === []) {
      console.log(tasks);
    } else {
      setHasTasks(true);
    };
  }, [tasks]);

  return (
    <ul className='tasks'>

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
  );
};

export default Tasks;