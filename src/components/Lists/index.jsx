import React, { useEffect } from 'react';

import List from '../List';

import './style.scss';

const Lists = ({ hasLists, lists, setLists }) => {

  useEffect(() => {
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    setLists(previousLists);
  }, []);

  return (
    <main className='lists'>
      <ul className='lists--container'>

        { hasLists === null ? 'Aucune liste à afficher' : 
        
          lists.map((list, index) => {
            return (
              <li key={index}>
                
                <List
                  name={list.name}
                  tasks={list.tasks}
                />

              </li>
            );
          })
        }

      </ul>
    </main>
  );
};

export default Lists;