import React,{useState, useEffect, useContext} from 'react'
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import HabitCard from  '../components/Habits/Habitcard'
// import axios from 'axios';
// import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { UserContext, UserContextType } from '../App' ;

  interface Habits {
  id: number;
  type: string
  name: string;

}
type Option = {
  type: string;
};

const Habits = () =>{

  // creates user variables based on context 
   const { userName, userId }: UserContextType = useContext(UserContext) ?? { userName: null, userId: null };;
   console.log(userName, userId)
const types:Option[] = [
  {
    type: "Excersize"
  }, {
    type: "Eating"
  }, {
    type: "Focus"
  }, {
    type: "Choices"
  }
]

  const [habits, setHabits] = useState<Habits[]>([]);
  const [newHabit, setNewHabit] = useState<string>("");
  const [type, setType] = useState<string>(types[0].type);

 const onCreate = ():void => {
 setHabits([...habits, { id: habits.length + 1, name: newHabit, type: type }]);
 setType(types[0].type)
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
            helperText="Enter Tracking"
          value={newHabit}
          onChange={(event) => setNewHabit(event.target.value)}
        />
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
         onChange={(event) =>setType(event.target.value) }
         value={type}
          helperText="Please select activity type"
        >
         {types.map((option: Option) => (
  <MenuItem key={option.type} value={option.type}>
    {option.type}
  </MenuItem>
))}
        </TextField>
    <Button variant="text" onClick={onCreate}>
       Create Habit
       </Button>
       {habits.map((habit) => (
        <HabitCard key={habit.id} id={habit.id} name={habit.name} type={habit.type} />
      ))}
       {newHabit}
    </div>
  )
  }

  export default Habits;