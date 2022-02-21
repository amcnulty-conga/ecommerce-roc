import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PAGE_ROUTE_TO_DISPLAY_NAME_MAP } from '../../util/helpers';
import './ActionBar.scss';

const ActionBar = () => {
  const location = useLocation();
  const categories = useSelector(state => state.categories);
  return (
    <div className='ActionBar d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-baseline'>
        <cc-icon name='fas arrow-left'></cc-icon>
        <span className='border-end border-dark mx-2'>&nbsp;</span>
        <cc-icon name='fas chevron-down' ></cc-icon>
        <h5 className='ms-4'>{PAGE_ROUTE_TO_DISPLAY_NAME_MAP[location.pathname]}</h5>
        {(location.pathname === '/catalog' && categories.selectedCategory) && <h5>&nbsp;&mdash; {categories.selectedCategory.Label}</h5>}
      </div>
      <cc-button label='Close'></cc-button>
    </div>
  );
};

export default ActionBar;