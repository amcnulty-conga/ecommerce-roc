import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <cc-app-bar productName='Catalog' brand='eCom' userName='Aaron' userEmail='amcnulty@conga.com' userAbbr='AM'></cc-app-bar>
    </div>
  );
};

export default Header;