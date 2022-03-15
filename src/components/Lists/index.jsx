import React, { useEffect, useState } from 'react';

import List from '../List';

import './style.scss';

const Lists = ({ hasLists, lists, deleteList }) => {

  return (
    <main className='lists'>
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