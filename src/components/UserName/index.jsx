import React from 'react';

import './style.scss';

const UserName = ({ userName, setUserName, setAlertMessage }) => {

  const handleChangeUserName = (newName) => {

    if (newName.length > 30) {
      setAlertMessage('Le pseudo ne peut contenir que 30 caractères au maximum');
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
        className='user--input'
        placeholder={userName}
        onChange={(event) => {
          handleChangeUserName(event.target.value);
        }}
      />
    </label>
  );
};

export default UserName;