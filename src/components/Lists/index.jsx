import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import List from '../List';

import './style.scss';

const Lists = ({ hasLists, setHasLists, lists, setLists }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme === 'light' ? 'lists light' : 'lists dark'}>
      <ul className='lists--container'>

        { !hasLists ? 'Aucune liste à afficher' :

          lists.map((list, index) => {
            return (
              <li key={index}>
                
                <List
                  ID={index}
                  name={list.name}
                  tasks={list.tasks}
                  setLists={setLists}
                  setHasLists={setHasLists}
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