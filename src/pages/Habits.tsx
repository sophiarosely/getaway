import React,{useState, useEffect, useContext} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HabitCard from  '../components/Habits/Habitcard'
import axios from 'axios';
import Box from '@mui/material/Box';

  interface Habit {
  id: number;
  name: string;
}
const Habits = () =>{



  const [habits, setHabits] = useState<{ id: number, name: string }[]>([]);
  const [newHabit, setNewHabit] = useState<string>("");

 const onCreate = ():void => {
 setHabits([...habits, { id: habits.length + 1, name: newHabit }]);
    setNewHabit("");
    console.log("hi")
 }

  return (
    <div>
    <h1>Bad Habits</h1>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="New Habit"
          value={newHabit}
          onChange={(event) => setNewHabit(event.target.value)}
        />
    <Button variant="text" onClick={onCreate}>
       Create Habit
       </Button>
       {habits.map((habit) => (
        <HabitCard id={habit.id} name={habit.name} />
      ))}
       {newHabit}
    </div>
  )
  }

  export default Habits;