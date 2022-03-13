import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const Header = ({ userName }) => {

  const { theme } = useContext(ThemeContext);

  let title = 'Ma liste de procrastination';

  return (
    <header className={theme === 'light' ? 'header light' : 'header dark'}>

      <h1 className='header--title'>
        {userName === '' ? title : 'La liste de procrastination de ' + userName}
      </h1>

    </header>
  );
};

export default Header;