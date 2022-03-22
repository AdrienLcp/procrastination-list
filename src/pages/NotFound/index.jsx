import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const NotFound = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <section className={ theme === 'light' ? 'not__found light' : 'not__found dark'}>
      <h2 className='not__found--title'>
        404
      </h2>

      <h3 className='not__found--subtitle'>
        La page que vous cherchez n'existe pas
      </h3>

      <NavLink
        to='/'
        className='not__found--button'
      >
        Retour au site
      </NavLink>
    </section>
  );
};

export default NotFound;