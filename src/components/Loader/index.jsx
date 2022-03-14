import React from 'react';

import './style.scss';

import loading from '../../media/icons/loading.svg';

const Loader = () => {

  return (
    <section className='loader'>
      <div className='loader--icon'>
        <img
          className='loader--icon--img'
          alt='Chargement en cours'
          src={loading}
        />
      </div>
    </section>
  );
};

export default Loader;