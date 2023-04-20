import React,{useState, useEffect, useContext} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Tracking from  './Tracking'
import axios from 'axios';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

interface HabitCardProps {
  id: number;
  name: string;
  type: string
}

const HabitCard = ({ id, name, type }: HabitCardProps) =>{

  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const openTracking = () => {
    setIsTrackingOpen(!isTrackingOpen);
  }

    const handleComplete = () => {
    axios.put('/habits/completion', {
  data: {
    habitId: id
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
  }
  


      const handleDelete = () => {
    axios.delete('/habits/delete', {
  data: {
    habitId: id
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
  }

  // const closeTracking = ():any => {
  //   setIsTrackingOpen(false);
  // }

  return (
    <div>
      <Card sx={{ backgroundColor: '#333' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Habit
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Habit Type: {type}
          </Typography>
          <Typography variant="body2">
            {name}
          </Typography>
          <Typography variant="body2">
            <Button variant="outlined" onClick={handleComplete} startIcon={<DeleteIcon />}>
        complete
      </Button>
          <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
        delete
      </Button>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={openTracking}>Tracking</Button>
        </CardActions>
      </Card>

      {isTrackingOpen && (
        <Tracking />
      )}
    </div>
  )
}

export default HabitCard;