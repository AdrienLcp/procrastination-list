import React from 'react';

import './style.scss';

const Task = ({ content }) => {

  return (
    <p className='task'>
      {content}
    </p>
  );
};

export default Task;