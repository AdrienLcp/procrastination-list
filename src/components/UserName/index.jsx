import React from 'react';

import './style.scss';

const UserName = ({ userName, setUserName, setAlertMessage }) => {

  const handleChangeUserName = (newName) => {

    if (newName.length > 30) {
      // If the user name is too long, we set a message
      setAlertMessage('Le pseudo ne peut contenir que 30 caractères au maximum');
    } else {
      // Reset alert message
      setAlertMessage('');

      // Update state for user name, that we can see in Header
      setUserName(newName);

      // Then update the local storage, for saving the user name
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