import React from 'react';
import Catalog from '../Catalog/Catalog';
import './Main.scss';

const Main = () => {
  return (
    <div className='Main'>
      <div className='mainContentCard rounded-3 m-4'>

        <Catalog/>
      </div>
    </div>
  );
};

export default Main;