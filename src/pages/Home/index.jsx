import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import AddButton from '../../components/AddButton';
import SettingsMenu from '../../components/SettingsMenu';
import Header from '../../components/Header';

import './style.scss';
import Lists from '../../components/Lists';

const Home = () => {
  
  const { theme } = useContext(ThemeContext);
  
  const [hasLists, setHasLists] = useState(false);
  const [userName, setUserName] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {

    const hasPreviousLists = JSON.parse(localStorage.getItem('lists'));

    if (hasPreviousLists !== null) {
      setHasLists(true);
    } else {
      setHasLists(false);
    };
  }, []);

  return (
    <div className={theme === 'light' ? 'home light' : 'home dark'}>
      
      <Header
        userName={userName}
      />

      <AddButton
        hasLists={hasLists}
        setLists={setLists}
      />

      <Lists
        hasLists={hasLists}
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