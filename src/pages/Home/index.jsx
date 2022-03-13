import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import AddButton from '../../components/AddButton';
import SettingsMenu from '../../components/SettingsMenu';
import Header from '../../components/Header';

import './style.scss';

const Home = () => {

  const { theme } = useContext(ThemeContext);

  const [hasLists, setHasLists] = useState(false);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    const previousLists = localStorage.getItem('lists');

    if (previousLists !== null) {
      setLists(previousLists);
      setHasLists(true);
    } else {
      setHasLists(false);
    };
  }, []);

  return (
    <div className={theme === 'light' ? 'home light' : 'home dark'}>
      
      <Header />

      <main>

        <AddButton
          hasLists={hasLists}
        />

        <section className='home--container'>
          { lists === null ? '' : lists}
        </section>

      </main>

      <SettingsMenu />
    </div>
  );
};

export default Home;