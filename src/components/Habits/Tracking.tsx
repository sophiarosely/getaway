import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Box from '@mui/material/Box';


interface TrackingProps {
  id: number;
   habit_createdAt: string;
   
   

}

// This will have charts and a calaneder to see how the following  is going
const Tracking = ({id, habit_createdAt}:TrackingProps) =>{

  const [dates, setDates] = useState<[]>([]);
  console.log(habit_createdAt)
   useEffect(() => {
      {
    axios.get(`habits/updatedon/:${id}`)
      .then(response => {
        console.log(response.data)
setDates(response.data)
      })
      .catch(error => console.error(error));
  }
}, []);
function renderImage(value: number) {
  if (value === 1) {
    return <img src="https://i.ibb.co/zbPYkrV/1.png" alt="Image 1" width="50" />;
  } else if (value === 2) {
    return <img src="https://i.ibb.co/9yJBt9L/2.png" alt="2" width="50" />;
  } else if (value === 3) {
    return <img src="https://i.ibb.co/8Dftqnw/3.png" alt="3" width="50" />;
  } else if (value === 4) {
    return <img src="https://i.ibb.co/R6Ss7mH/4.png" alt="4" width="50" />;
  } else if (value === 5) {
    return <img src="https://i.ibb.co/rxc7Nnz/5.png" alt="5" width="50" />;
  } else if (value > 5) {
    return <img src="https://i.ibb.co/bgVBqhQ/6.png" alt="6" width="50" />;
  } else {
    return null;
  }
}
  return (
    <Card sx={{ borderRadius: 0, backgroundColor: '#CCD7FF', padding: '20px' }}>
      {dates && dates.length > 0 && (
        <>
          <Typography variant='h5' component='h2' color='primary' gutterBottom>
          
            <div>
            You have completed this goal {dates.length} times.
             </div>
          </Typography>
         
          {/* {dates.map(date => (
        <Typography key={date.id} variant="body1" component="p" color="textPrimary">
          {date.updatedAt} */}
        {/* </Typography> */}
      {/* ))} */}
        </>
      )}
    </Card>
  );
};

export default Tracking;
