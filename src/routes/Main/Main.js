import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Catalog from '../Catalog/Catalog';
import './Main.scss';

const Main = () => {
  return (
    <div className='Main'>
      <div className='mainContentCard rounded-3 m-4 mt-0'>
        <ErrorBoundary>
          <Catalog/>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Main;