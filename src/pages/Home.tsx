import MusicBar from '../components/MusicBar';
import NavBar from '../components/NavBar';
import React from 'react';
import { useEffect, useContext, useState } from 'react';
import CheckIn from '../components/CheckIn/CheckIn';
import HabitHome from  '../components/Habits/HabitHome'
import { UserContext, UserContextType } from '../App';
import SavedPaintings from '../components/SavedPaintings'
import axios from 'axios';


   interface home {
  id: number;
  habit_type: string;
  habit_name: string;
  habit_createdAt: string;
}

const Home = () => {
  const { userName, userId }: UserContextType = useContext(UserContext) ?? { userName: null, userId: null };;
   console.log(userName, userId)

   const [habits, setHabits] = useState<home[]>([]);

     useEffect(() => {
    if (userId) {
      axios
        .post('habits/list', { data: { googleId: userId.toString() } })
        .then((response) => setHabits(response.data))
        .catch((error) => console.error(error));
    }
  }, [userId]);
// console.log(habits)

  return (
    <div style={{ textAlign: 'center' }}>
  <CheckIn />
  <div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '100px'
    }}
  />
      <div
      style={{
        textAlign: 'center',
        letterSpacing: '0.5em'
      }}
    >
      {/* replace all this with the actual functionality when the time comes */}
      <h2>AFFIRMATIONS</h2>
      <div style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#788ACA',
      backgroundColor:'#CCD7FF',
      width: '70%',
      height: '250px',
      textAlign:'center',
      marginBottom:'100px',
      padding:'30px'
    }}>
      <h3>May 14th 2023</h3>
<p>This is the affirmation ya know</p>
      </div>
      </div>
      <div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '100px'
    }}
  />
      <div
      style={{
        textAlign: 'center',
        letterSpacing: '0.5em'
      }}
    >
      {/* replace all this with the actual functionality when the time comes */}
      <h2 >HABITS</h2>
      <div style={{

      borderRadius:'40px',
      margin:'60px auto',
      color: '#788ACA',
      backgroundColor:'#CCD7FF',
      width: '70%',
      minHeight: '250px',
      textAlign:'center',
      marginBottom:'250px',
      padding:'30px'
    }}>
      <h3>HABIT CHARTS</h3>
       <div  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {habits.slice(0, 4).map((habit) => (
        <HabitHome key={habit.id}
          habit_name={habit.habit_name}
           habit_type={habit.habit_type}
           habit_createdAt={habit.habit_createdAt}
           id={habit.id}
           />
      ))}
      </div>
      {/* <HabitCreate></HabitCreate> */}
      </div>
      <div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '100px'
    }}
  />
      <SavedPaintings/>
      <div
    style={{
      borderRadius:'40px',
      margin:'60px auto',
      color: '#5C6B9E',
      backgroundColor:'#5C6B9E',
      width: '70%',
      height: '7px',
      textAlign:'center',
      marginBottom: '100px'
    }}
  />
      </div>
    </div>
  );
};

export default Home;
