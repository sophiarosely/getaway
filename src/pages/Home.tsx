import MusicBar from '../components/MusicBar';
import NavBar from '../components/NavBar';
import React from 'react';
import { useEffect } from 'react';
import CheckIn from '../components/CheckIn/CheckIn';

const Home = () => {
  return (
    <div>
      <h1> DashBoard</h1>
      <CheckIn />
    </div>
  );
};

export default Home;
