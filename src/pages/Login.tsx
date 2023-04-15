import React from 'react'
import { useEffect } from 'react'

const Login = () =>{


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
  <h1>Login</h1>
  <button className="googleLogin" onClick={google}>Log In</button>
  </div>
)
}

export default Login;