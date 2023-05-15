import React, { useState, useEffect, useContext } from 'react';
// import Recommend from '../components/Recess/Recommendations'
import { UserContext, UserContextType } from '../App';

import activities from '../components/Recess/fakedb'
import ScrollWall from  '../components/Recess/ScrollWall'

const Recess = () =>{
const [newSearch, setnewSearch] = useState<[]>([]);
 const [showRecommend, setShowRecommend] = useState(false);

  function handleCreate(namesObj: []){
setnewSearch(namesObj)
// setShowRecommend(true);

  }
console.log(activities)

return (
 <div style={{background: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"}}>
    <div style={{marginTop: '80px', textAlign:"center", display: "flex", flexDirection: "column", alignItems: "center", letterSpacing:"0.4em"}}>
    <h3 style={{marginTop:"300px"}}>Recess</h3>
    <p style={{width:'50%'}}>
     "By exploring new activities and hobbies, you can take small steps towards better mental health and discover a whole world of possibilities you never knew existed."

    </p>
    
    <div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '60px'
    }}
  />
 
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <ScrollWall />
    </div>
  </div>
  </div>
);
  }

  export default Recess;