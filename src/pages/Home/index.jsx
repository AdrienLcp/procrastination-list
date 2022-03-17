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

    const hasPreviousLists = localStorage.getItem('lists');

    if (hasPreviousLists !== null) {
      setHasLists(true);
      const previousLists = JSON.parse(localStorage.getItem('lists'));
      setLists(previousLists);
    } else {
      setHasLists(false);
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