import MusicBar from '../components/MusicBar'
import NavBar from '../components/NavBar'
import React from 'react'
import { useEffect } from 'react'

const Home = () =>{


    const google = ()=>{

      // window.open(`${process.env.REACT_APP_CLIENT_URL}auth/google/`, "_self")
      window.open(`http://localhost:8080/auth/google/`, "_self")
    }
    useEffect(() => {
      document.body.classList.add('login-page');
      return () => {
        document.body.classList.remove('login-page');
      };
    }, []);




return (
  <div>
  <h1> DashBoard</h1>
  <button className="googleLogin" onClick={google}>Log In</button>
  <MusicBar />
  </div>
)
}

export default Home;