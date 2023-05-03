import React, { useState, useEffect } from 'react';
import ThreeJS1 from './Three.JS/3JS(1)';
import ThreeJS2 from './Three.JS/3JS(2)';
import ThreeJS3 from './3JS(3)';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Meditation = () => {
  //creating state for each exercise to open/close
  const [exercise1Open, setExercise1Open] = useState(false);
  const [exercise2Open, setExercise2Open] = useState(false);
  const [exercise3Open, setExercise3Open] = useState(false);
  const [reflectionOpen, setReflectionOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showCards, setShowCards] = useState(false);


  const handleClick = () => {
    setShowCards(!showCards);
  };

  //handlers for opening and closing
  const handleExercise1Click = () => {
    setExercise1Open(!exercise1Open);
  };
  const handleExercise2Click = () => {
    setExercise2Open(!exercise2Open);
  };
  const handleExercise3Click = () => {
    setExercise3Open(!exercise3Open);
  };

  const handleExercise1Close = () => {
    setExercise1Open(false);
    setCurrentText("");
  }
  const handleExercise2Close = () => {
    setExercise2Open(false);
    setCurrentText("");
  }
  const handleExercise3Close = () => {
    setExercise3Open(false);
    setCurrentText("");
  }

  const handleReflectionClick = () => {
    setReflectionOpen(!reflectionOpen);
  };

  // *****************
  // *   THREE.JS    *
  // *****************
 // useEffect to update currentText based on time elapsed
 useEffect(() => {
  let interval: NodeJS.Timeout | undefined;
  let counter = 0;
  if (exercise1Open) {
    setCurrentText("Breathe In");
    interval = setInterval(() => {
      counter++;
      if (counter >= 5 && counter < 10) {
        setCurrentText("Hold");
      } else if (counter >= 10 && counter < 15) {
        setCurrentText("Breathe Out");
      } else if (counter >= 15) {
        counter = 0;
        setCurrentText("Breathe In");
      }
    }, 1000);
  }
  return () => clearInterval(interval);
}, [exercise1Open]);

useEffect(() => {
  let interval: NodeJS.Timeout | undefined;
  let counter = 0;
  if (exercise2Open) {
    setCurrentText("Breathe In");
    interval = setInterval(() => {
      counter++;
      if (counter >= 4 && counter < 11) {
        setCurrentText("Hold");
      } else if (counter >= 11 && counter < 19) {
        setCurrentText("Breathe Out");
      } else if (counter >= 19) {
        counter = 0;
        setCurrentText("Breathe In");
      }
    }, 1000);
  }
  return () => clearInterval(interval);
}, [exercise2Open]);

useEffect(() => {
  let interval: NodeJS.Timeout | undefined;
  let counter = 0;
  if (exercise3Open) {
    setCurrentText("Breathe In");
    interval = setInterval(() => {
      counter++;
      if (counter >= 4 && counter < 8) {
        setCurrentText("Breathe Out");
      } else if (counter >= 8) {
        counter = 0;
        setCurrentText("Breathe In");
      }
    }, 1000);
  }
  return () => clearInterval(interval);
}, [exercise3Open]);
  // *****************
  // *   THREE.JS    *
  // *****************

  return (
    <main className='meditation-container'>
<h1 style={{textAlign: "center", margin: "auto"}}>Meditation</h1>
<p style={{textAlign: "center", margin: "auto"}} >Welcome to the Meditation Station! If you're feeling stressed, anxious, or overwhelmed, you can come and enjoy some nice visualizations and go through various breathing exercises.</p>
      <article className="exercise-container">
        {/* <h2> Meditation Exercises</h2> */}
        <h2>Exercises</h2>
      <div className='exercise-box' onClick={handleExercise1Click}>
        5-5-5
      </div>
      <div className='exercise-box' onClick={handleExercise2Click}>
        4-7-8
      </div>
      <div className='exercise-box' onClick={handleExercise3Click}>
        Zen Breathing
      </div>
      </article>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{
        boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.3)",
        padding: "10px",
        margin: "10px",
        borderRadius: "40px",
        position: "absolute",
        top: "10px",
        right: "10px",
      }} onClick={handleClick}>Descriptions</div>
</div>
<figure style={{ display: 'flex', justifyContent: 'center' }}>
      {showCards && (
      <><Card className='cards' sx={{ maxWidth: 345, backgroundColor: '#D1A1C0', margin: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                5-5-5 Breathing Technique
              </Typography>
              <Typography variant="body1" component="p">
              <br></br>   For this meditation exercise, focus on taking one breath at a time and being in the present moment.
              </Typography>
              <Typography variant="body1" component="p">
              <br></br> Step 1 - Inhale slowly through your nose for 5 seconds
              </Typography>
              <Typography variant="body1" component="p">
                Step 2 - Hold your breath for 5 seconds
              </Typography>
              <Typography variant="body1" component="p">
                Step 3 - Release the breath through your mouth for 5 seconds
              </Typography>
              <Typography variant="body1" component="p">
                Step 4 - Repeat as needed
              </Typography>
            </CardContent>
          </Card><Card className='cards' sx={{ maxWidth: 345, backgroundColor: '#D1A1C0', margin: '10px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  4-7-8 Breathing Technique
                </Typography>
                <Typography variant="body1" component="p">
                <br></br> For this meditation exercise, it's important to maintain the 4-7-8 ratio through the steps.
                </Typography>
                <Typography variant="body1" component="p">
                <br></br>  Step 1 - Breath in through the nose for 4 seconds
                </Typography>
                <Typography variant="body1" component="p">
                  Step 2 - Hold your breath for a count of 7 seconds
                </Typography>
                <Typography variant="body1" component="p">
                  Step 3 - Exhale through your mouth for a total of 8 seconds
                </Typography>
                <Typography variant="body1" component="p">
              <br></br> * If you're finding it difficult to hold your breath for that long, try the 5-5-5 meditation exercise instead!
                </Typography>
              </CardContent>
            </Card><Card className='cards' sx={{ maxWidth: 345, backgroundColor: '#D1A1C0', margin: '10px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Zen Breathing
                </Typography>
                <Typography variant="body1" component="p">
                <br></br>  This is an un-timed technique that requires visualizing your breath.
                </Typography>
                <Typography variant="body1" component="p">
                <br></br>  Step 1 - Find a comfortable position, sitting or laying down
                </Typography>
                <Typography variant="body1" component="p">
                  Step 2 - Become aware of your breathing, paying attention to how you exhale and inhale
                </Typography>
                <Typography variant="body1" component="p">
                  Step 3 - Slow down your breathing
                </Typography>
                <Typography variant="body1" component="p">
                  Step 4 - Visualize your breath entering and leaving your lungs. You can put your hand against your chest to become aware of the raising and lowering
                </Typography>
                <Typography variant="body1" component="p">
                  Step 5 - Repeat as needed
                </Typography>
              </CardContent>
            </Card></> )}
</figure>

      {exercise1Open &&
      <div className="exercise-popup">
        <div className="exercise-popup-text">{currentText}</div>
       <div> <ThreeJS1 /> </div>
        <button className="exercise-button" onClick={handleExercise1Close}>Complete</button>
      </div>
    }
    {exercise2Open &&
      <div className="exercise-popup">
        <div className="exercise-popup-text">{currentText}</div>
        <p> <ThreeJS2 /></p>
        <button className="exercise-button" onClick={handleExercise2Close}>Complete</button>
      </div>
    }
    {exercise3Open &&
      <div className="exercise-popup">
        <div className="exercise-popup-text" >{currentText}</div>
        <p> <ThreeJS3 /> </p>
        <button className="exercise-button" onClick={handleExercise3Close}>Complete</button>
      </div>
    }
  </main>
);
  }

export default Meditation;
