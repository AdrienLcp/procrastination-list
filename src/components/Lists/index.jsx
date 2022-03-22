import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import List from '../List';

import './style.scss';

const Lists = ({ hasLists, setHasLists, lists, setLists }) => {

  const { theme } = useContext(ThemeContext);

  const deleteList = (listID) => {
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    if (previousLists.length === 1) {
      localStorage.removeItem('lists');
      setLists([]);
      setHasLists(false);
    } else {

      previousLists.splice(listID, 1);

      setLists(previousLists);
      localStorage.setItem('lists', JSON.stringify(previousLists));
    };
  };

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
                  deleteList={deleteList}
                  setLists={setLists}
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