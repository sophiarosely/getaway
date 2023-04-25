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

  const handleExercise1Close = () => {
    setExercise1Open(false);
  }
  const handleExercise2Close = () => {
    setExercise2Open(false);
  }
  const handleExercise3Close = () => {
    setExercise3Open(false);
  }

  return (
    <div className="meditation-container">
    <h1>Meditation</h1>
    <div className="exercise-box" onClick={handleExercise1Click}>Exercise 1</div>
    <div className="exercise-box" onClick={handleExercise2Click}>Exercise 2</div>
    <div className="exercise-box" onClick={handleExercise3Click}>Exercise 3</div>

    {exercise1Open &&
      <div className="exercise-popup">
        <h2>Exercise 1</h2>
        <p>This is exercise 1</p>
        <button className="button" onClick={handleExercise1Close}>Close</button>
      </div>
    }

    {exercise2Open &&
      <div className="exercise-popup">
        <h2>Exercise 2</h2>
        <p>This is exercise 2</p>
        <button className="button" onClick={handleExercise2Close}>Close</button>
      </div>
    }

    {exercise3Open &&
      <div className="exercise-popup">
        <h2>Exercise 3</h2>
        <p>This is exercise 3</p>
        <button className="button" onClick={handleExercise3Close}>Close</button>
      </div>
    }
  </div>
);
  }

  export default Meditation;