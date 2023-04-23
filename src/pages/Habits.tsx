import React, { useState, useEffect, useContext } from 'react';
import HabitCard from '../components/Habits/Habitcard';
import HabitCreate from  '../components/Habits/HabitCreate'
import { UserContext, UserContextType } from '../App';
import axios from 'axios';
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';

interface Habits {
  id: number;
  habit_type: string;
  habit_name: string;
  habit_createdAt: string;
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
 const [showHabitCreate, setShowHabitCreate] = useState(false);

  useEffect(() => {
    if (userId) {
      axios
        .post('habits/list', { data: { googleId: userId.toString() } })
        .then((response) => setHabits(response.data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

 const handleCreate = () => {
 axios
        .post('habits/list', { data: { googleId: userId.toString() } })
        .then((response) => setHabits(response.data))
        .catch((error) => console.error(error));
  };


  const handleDelete = (habitId: number) => {
    setHabits((prevHabits) =>
      prevHabits.filter((habit) => habit.id !== habitId)
    );
  };
   const handleNewHabit = () => {
    setShowHabitCreate(true); // set state variable to true to show HabitCreate
  }

  return (
    <div>
      <h1>Bad Habits</h1>
   <Button onClick={handleNewHabit}>New Habit</Button> 
      {showHabitCreate && <HabitCreate handleCreate={() => handleCreate()} />} 
      {habits.map((habit) => (
        <HabitCard key={habit.id}
         userId={userId}
          id={habit.id} 
          habit_name={habit.habit_name}
           habit_type={habit.habit_type}
           habit_createdAt={habit.habit_createdAt}
           onDelete={() => handleDelete(habit.id)} />
      ))}
      {newHabit}
    </div>
  );
};

export default Habits;
