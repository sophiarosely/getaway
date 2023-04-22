import React, { useState, useEffect, useContext } from 'react';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import { UserContext, UserContextType } from '../../App';
interface Habits {
  id: number;
  habit_type: string;
  habit_name: string;
  habit_createdAt: string;
}
type Option = {
  type: string;
};


// This will have charts and a calaneder to see how the following  is going
const HabitCreate = () =>{
  const { userName, userId }: UserContextType = useContext(UserContext) ?? { userName: null, userId: null };;

const types:Option[] = [
  {
    type: "Exercise"
  }, {
    type: "Eating"
  }, {
    type: "Focus"
  }, {
    type: "Choices"
  }
]
  const [habits, setHabits] = useState<Habits[]>([]);
  const [newHabit, setNewHabit] = useState<string>('');
  const [type, setType] = useState<string>(types[0].type);

const onCreate = (): void => {
    const data = {
      habit_name: newHabit,
      googleId: userId?.toString(),
      habit_type: type,
    };
    axios
      .post('habits/newHabit', { data })
      .then((response) => {
        console.log(response.data);
        axios
          .post('habits/list', { data: { googleId: userId?.toString() } })
          .then((response) => setHabits(response.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.log(error);
      });
    setType(types[0].type);
    setNewHabit('');
  };

  const handleDelete = (habitId: number) => {
    setHabits((prevHabits) =>
      prevHabits.filter((habit) => habit.id !== habitId)
    );
  };

  return (
    <div>Hi
      <Card>
     <TextField
        required
        id='outlined-required'
        label='Required'
        helperText='Enter Tracking'
        value={newHabit}
        onChange={(event) => setNewHabit(event.target.value)}
      />
      <TextField
        id='outlined-select-currency'
        select
        label='Select'
        onChange={(event) => setType(event.target.value)}
        value={type}
        helperText='Please select activity type'
      >
        {types.map((option: Option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </TextField>
      <Button variant='text' onClick={onCreate}>
        Create Habit
      </Button>
</Card>
    </div>
  );
};

export default HabitCreate;
