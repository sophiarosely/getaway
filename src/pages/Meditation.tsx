import React, { useState } from 'react';
import Reflections from './Reflections';
import Torus from './Torus';
import Torus1 from './Three';
import Torus2 from './Three2';

const Meditation = () =>{
  //creating state for each exercise to open/close
  const [exercise1Open, setExercise1Open] = useState(false);
  const [exercise2Open, setExercise2Open] = useState(false);
  const [exercise3Open, setExercise3Open] = useState(false);
  const [reflectionOpen, setReflectionOpen] = useState(false);

  //handlers for opening and closing
  const handleExercise1Click = () => {
    setExercise1Open(!exercise1Open);
  }
  const handleExercise2Click = () => {
    setExercise2Open(!exercise2Open);
  }
  const handleExercise3Click = () => {
    setExercise3Open(!exercise3Open);
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

  const handleReflectionClick = () => {
    setReflectionOpen(!reflectionOpen);
  }

  // *****************
  // *   THREE.JS    *
  // *****************


  // *****************
  // *   THREE.JS    *
  // *****************

  return (
    <div className="meditation-container">
    <h1>Meditation</h1>
    <div className="exercise-box" onClick={handleExercise1Click}>Exercise 1</div>
    <div className="exercise-box" onClick={handleExercise2Click}>Exercise 2</div>
    <div className="exercise-box" onClick={handleExercise3Click}>Exercise 3</div>
    {/* <button onClick={handleReflectionClick}>Reflections</button>
      {reflectionOpen && <Reflections />} */}
      {exercise1Open &&
      <div className="exercise-popup">
       <div> <Torus /> </div>
        <button className="exercise-button" onClick={handleExercise1Close}>Complete</button>
      </div>
    }

    {exercise2Open &&
      <div className="exercise-popup">
        <h2>Exercise 2</h2>
        <p> <Torus1 /></p>
        <button className="exercise-button" onClick={handleExercise2Close}>Complete</button>
      </div>
    }

    {exercise3Open &&
      <div className="exercise-popup">
        <h2>Exercise 3</h2>
        <p> <Torus2 /> </p>
        <button className="exercise-button" onClick={handleExercise3Close}>Complete</button>
      </div>
    }
  </div>
);
  }

  export default Meditation;