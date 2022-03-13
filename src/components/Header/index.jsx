import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const Header = () => {

  const { theme } = useContext(ThemeContext);

  // const [userName, setUserName] = useState('');

  let title = 'Ma liste de procrastination';

  useEffect(() => {
    const previousUser = localStorage.getItem('user_name');

    console.log('user précédent : ' + previousUser);
  }, []);

  return (
    <header className={theme === 'light' ? 'header light' : 'header dark'}>

      <h1 className='header--title'>
        {title}
      </h1>

    </header>
  );
};

export default Header;