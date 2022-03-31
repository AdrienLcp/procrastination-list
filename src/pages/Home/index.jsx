import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import AddListButton from '../../components/AddListButton';
import SettingsMenu from '../../components/SettingsMenu';
import Header from '../../components/Header';
import Lists from '../../components/Lists';

import './style.scss';

const Home = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const [hasLists, setHasLists] = useState(false);
  const [userName, setUserName] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // If the user has previous lists saved in his navigator,
    const hasPreviousLists = localStorage.getItem('lists');

    if (hasPreviousLists !== null) {
      // We update the state for lists from data in local storage
      setHasLists(true);
      const previousLists = JSON.parse(localStorage.getItem('lists'));
      setLists(previousLists);
    } else {
      setHasLists(false);
    };

    // If the user set a user name previously,
    const previousUser = localStorage.getItem('user_name');

    if (previousUser) {
      // We update it too
      setUserName(previousUser);

      // And we update the document title
      document.title = 'La liste de ' + previousUser;
    };
  }, []);

  return (
    <div className={theme === 'light' ? 'home light' : 'home dark'}>
      
      <Header
        userName={userName}
      />

      <AddListButton
        hasLists={hasLists}
        setLists={setLists}
        setHasLists={setHasLists}
      />

      <Lists
        hasLists={hasLists}
        setHasLists={setHasLists}
        lists={lists}
        setLists={setLists}
      />

      <SettingsMenu
        userName={userName}
        setUserName={setUserName}
      />
    </div>
  );
};

export default Home;