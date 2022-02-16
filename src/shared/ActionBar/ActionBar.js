import React from 'react';
import './ActionBar.scss';

const ActionBar = () => {
  return (
    <div className='ActionBar d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-baseline'>
        <cc-icon name='fas arrow-left'></cc-icon>
        <span className='border-end border-dark mx-2'>&nbsp;</span>
        <cc-icon name='fas chevron-down' ></cc-icon>
        <h5 className='ms-4'>Quick Start Home</h5>
      </div>
      <cc-button label='Close'></cc-button>
    </div>
  );
};

export default ActionBar;