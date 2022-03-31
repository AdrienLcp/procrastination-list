import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const Header = ({ userName }) => {

  const { theme } = useContext(ThemeContext);

  let defaultTitle = 'Ma liste de procrastination';

  return (
    <header className={theme === 'light' ? 'header light' : 'header dark'}>

      <h1 className='header--title'>
        {/* If there is no user name saved in local storage, we show the default title */}
        {userName === '' ? defaultTitle : 'La liste de procrastination de ' + userName}
      </h1>

    </header>
  );
};

export default Header;