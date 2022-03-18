import React from 'react';

import './style.scss';

const Task = ({ taskID, content }) => {

  return (
    <p className='task'>
      {content}
    </p>
  );
};

export default Task;