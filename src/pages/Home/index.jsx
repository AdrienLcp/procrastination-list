import React, { useContext } from 'react';

import './styles.scss';

import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'home light' : 'home dark'}>

      <h1 className='home--title'>
        Ma liste de procrastination
      </h1>

      <section className='home--container'>
        <button className='home--container--button'>
          <span className={theme === 'light' ? 'home--container--button--item light' : 'home--container--button--item dark'}>
            +
          </span>
          <label className={theme === 'light' ? 'home--container--button--label light' : 'home--container--button--label dark'}>
            Créer une liste
          </label>
        </button>
      </section>


    </div>
  );
};

export default Home;