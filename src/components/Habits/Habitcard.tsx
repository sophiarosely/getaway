import React,{useState, useEffect, useContext} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Box from '@mui/material/Box';

interface HabitCardProps {
  id: number;
  name: string;
}

const HabitCard = ({ id, name }: HabitCardProps) =>{



  return (
 

<Card sx={{ backgroundColor: '#333' }}>
         <CardContent>    
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Habit
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Type
      </Typography>
      <Typography variant="body2">
        {name}
      
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Tracking</Button>
    </CardActions>
    </Card>
  )
  }

  export default HabitCard;