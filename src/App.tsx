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

const App = () => {
  return (



     <BrowserRouter>
      <div>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/recess" element={<Recess />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;