import React from 'react';

import './style.scss';

const Task = ({ content }) => {

  return (
    <section className='task'>
      <p>
        {content}
      </p>
    </section>
  );
};

export default Task;