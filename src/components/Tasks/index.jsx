import React from 'react';

import Task from '../Task';

import './style.scss';

const Tasks = ({ tasks, listID, setLists }) => {

  return (
    <ul className='tasks'>

      {/* If there is no task, we show nothing, an empty list */}
      { tasks === [] ? '' :
        
        // If there are tasks, we show them
        tasks.map((task, index) => {
          return (
            <li key={index}>
              <Task
                taskID={index}
                content={task}
                listID={listID}
                setLists={setLists}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default Tasks;