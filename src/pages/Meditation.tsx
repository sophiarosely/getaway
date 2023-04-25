import React, { useState } from 'react';

const Meditation = () =>{
  //creating state for each exercise to open/close
  const [exercise1Open, setExercise1Open] = useState(false);
  const [exercise2Open, setExercise2Open] = useState(false);
  const [exercise3Open, setExercise3Open] = useState(false);

  //handlers for opening and closing
  const handleExercise1Click = () => {
    setExercise1Open(true);
  }
  const handleExercise2Click = () => {
    setExercise2Open(true);
  }
  const handleExercise3Click = () => {
    setExercise3Open(true);
  }

  const closeAllExercises = () => {
    setExercise1Open(false);
    setExercise2Open(false);
    setExercise3Open(false);
  }

  return (
    <div>
    <h1>Meditation</h1>
    <div onClick={handleExercise1Click}>Exercise 1</div>
    <div onClick={handleExercise2Click}>Exercise 2</div>
    <div onClick={handleExercise3Click}>Exercise 3</div>

    {exercise1Open &&
        <div>
          <h2>Exercise 1</h2>
          <p>This is exercise 1</p>
          <button onClick={closeAllExercises}>Close</button>
        </div>
      }

      {exercise2Open &&
        <div>
          <h2>Exercise 2</h2>
          <p>This is exercise 2</p>
          <button onClick={closeAllExercises}>Close</button>
        </div>
      }

      {exercise3Open &&
        <div>
          <h2>Exercise 3</h2>
          <p>This is exercise 3</p>
          <button onClick={closeAllExercises}>Close</button>
        </div>
      }
    </div>
  )
  }

  export default Meditation;