import React, { useEffect, useState } from 'react';

import './style.scss';

const Lists = ({ hasLists, lists, setLists }) => {

  useEffect(() => {
    const previousLists = JSON.parse(localStorage.getItem('lists'));

    setLists(previousLists);
  }, []);

  return (
    <main className='lists'>
      { hasLists === null ? 'Aucune liste à afficher' : 
      
        lists.map((list, index) => {
          return (
            <li key={index}>

              <p>
                {list.name}
              </p>

            </li>

          )
        })
      
      
      
      }
    </main>
  );
};

export default Lists;