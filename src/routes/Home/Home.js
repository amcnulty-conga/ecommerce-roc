import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      Home
      <Link to='Catalog'>Catalog</Link>
    </div>
  );
};

export default Home;