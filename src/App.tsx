import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Habits from './pages/Habits'
import Affirmations from './pages/Affirmations'
import Recess from './pages/Recess'
import Guidance from './pages/Guidance'
import Profile from './pages/Profile'
import Meditation from './pages/Meditation'
import NavBar from './components/NavBar'
import axios from 'axios';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import MusicBar from './components/MusicBar';

const App = () => {




const [user, setUser ] = useState(null);
useEffect(()=>{
  const getUser = ()=>{
  axios.get(`${process.env.REACT_APP_CLIENT_URL}auth/login/success`)
  .then((response)=>{
    if(response.status===200){
      return response.data
    }else{
      throw new Error("auth failed")
    }
  }).then((resObj)=>{
    setUser(resObj.user)
    localStorage.setItem('user', JSON.stringify(resObj.user));
  })
  .catch((err)=>{
    console.error('couldnt get the user to the state', err)
  })
};
  getUser();
}, []);


console.log(user)



  return (
     <BrowserRouter>
      <div>
    <NavBar/>
      <Routes>
      {user ? (
  <Route path="/" element={<Home />} />
  ) : (
  <Route path="/" element={<Login />} />
  )}

        <Route path="/habits" element={<Habits />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/recess" element={<Recess />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
      <MusicBar />
      </div>
    </BrowserRouter>

  )
}

export default App;