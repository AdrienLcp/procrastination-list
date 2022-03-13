import React, { useEffect, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import './style.scss';

const UserName = ({ userName, setUserName, setAlertMessage }) => {

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const previousUser = localStorage.getItem('user_name');

    if (previousUser) {
      setUserName(previousUser);
    };
  }, []);

  const handleChangeUserName = (newName) => {

    if (newName.length > 20) {
      setAlertMessage('Le pseudo ne peut contenir que 40 caractères au maximum')
    } else {
      setAlertMessage('');
      setUserName(newName);
      localStorage.setItem('user_name', newName);
    };
  };

  return (
    <label className='user'>

      Nom d'utilisateur

      <input
        type="text"
        className={theme === 'light' ? 'user--input light' : 'user--input dark'}
        placeholder={userName}
        onChange={(event) => {
          handleChangeUserName(event.target.value);
        }}
      />
    </label>
  );
};

export default UserName;