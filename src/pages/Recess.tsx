import React, { useState, useEffect, useContext } from 'react';
import Recommend from '../components/Recess/Recommendations'
import { UserContext, UserContextType } from '../App';
import axios from 'axios';
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';


const Recess = () =>{
  return (
    <div>
    <h1>Recess</h1>
    <Recommend id={0} habit_name={''} habit_type={''} userId={null} habit_createdAt={''} onDelete={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>

  )
  }

  export default Recess;