import React, { useState, useEffect, useContext } from 'react';
import Recommend from '../components/Recess/Recommendations'
import { UserContext, UserContextType } from '../App';
import axios from 'axios';
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';
import RecommendCreate from '../components/Recess/RecoCreate'


const Recess = () =>{
const [newSearch, setnewSearch] = useState<[]>([]);
 const [showRecommend, setShowRecommend] = useState(false);
  function handleCreate(namesObj: []){
    
setnewSearch(namesObj)
setShowRecommend(true);

  }
  return (
    <div>
    <h1>Recess</h1>
   {newSearch.map((item) => (
  showRecommend ? (
    <Recommend
      key={item.id}
      recommend_name={item.name}
      onDelete={() => {
        throw new Error('Function not implemented.');
      }}
    />
  ) : null
))}
      <RecommendCreate handleCreate={handleCreate}
      />
    </div>

  )
  }

  export default Recess;