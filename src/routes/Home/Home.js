import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <img src='https://picsum.photos/1920/1080/?blur=2'/>
      Home
      <Link to='catalog'>Catalog</Link>
    </div>
  );
};

export default Home;