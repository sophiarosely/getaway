import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const CheckIn = () => {
  // What do I want to happen on click?

  // state for showing feeling
  const [userFeelings, SetUserFeelings] = useState('');
  // state for showing success display
  const [showAlert, setShowAlert] = useState(false);

  const FeelingSelector = (e: any) => {
    console.log(e.target.textContent);
    SetUserFeelings(e.target.textContent);
    if (e.target.textContent === 'High Energy, Pleasant') {
      console.log('Blue');
    } else if (e.target.textContent === 'High Energy, Unpleasant') {
      console.log('Red');
    } else if (e.target.textContent === 'Low Energy, Pleasant') {
      console.log('Green');
    } else if (e.target.textContent === 'Low Energy, Unpleasant') {
      console.log('Yellow');
    }
  };

  return (
    <div
      style={{
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h1>How are you feeling this check in?</h1>
      <ButtonGroup
        variant='contained'
        aria-label='outlined primary button group'
        orientation='vertical'
      >
        <Button
          onClick={FeelingSelector}
          sx={{ background: 'blue', color: 'white' }}
        >
          High Energy, Pleasant
        </Button>
        <Button
          onClick={FeelingSelector}
          sx={{ background: 'red', color: 'white' }}
        >
          High Energy, Unpleasant
        </Button>
        <Button
          onClick={FeelingSelector}
          sx={{ background: 'green', color: 'black' }}
        >
          Low Energy, Pleasant
        </Button>
        <Button
          onClick={FeelingSelector}
          sx={{ background: 'yellow', color: 'black' }}
        >
          Low Energy, Unpleasant
        </Button>
      </ButtonGroup>
      <p style={{ fontWeight: 'bold' }}>Your feelings are: {userFeelings}</p>
      <p>If correct, click the submit button.</p>
      <p>If not, select the correct choice.</p>
      <Button
        variant='outlined'
        onClick={() => {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000); // hide alert after 3 seconds
        }}
      >
        Submit feeling!
      </Button>
      {showAlert && (
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            maxWidth: '25rem',
          }}
        >
          <Alert
            severity='success'
            color='success'
            style={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            <AlertTitle>Success</AlertTitle>
            Successfully submitted user feelings of {userFeelings}!
          </Alert>
        </div>
      )}
    </div>
  );
};

export default CheckIn;
