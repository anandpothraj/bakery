import React, {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import Hero from '../components/Hero';


const Home = () => {

  const userLoggedIn = useSelector( state => state.user.loggedIn);
  

  useEffect(() => {
    
  },[userLoggedIn])

  return (
    <div>
    {
      (userLoggedIn === true) ? 
        <Hero/>
        : 
        <Login/>
    }
    </div>
  )
}

export default Home;