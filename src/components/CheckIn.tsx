import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const CheckIn = () => {
  // What do I want to happen on click?

  const [userFeelings, SetUserFeelings] = useState('');

  const FeelingSelector = (e: any) => {
    console.log(e.target.textContent);
    SetUserFeelings(e.target.textContent);
  };

  return (
    <div>
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
      <p>Your feelings are: {userFeelings}</p>
      <p>If correct, click the submit button.</p>
      <Button
        variant='outlined'
        onClick={() => {
          alert(`Thank you for your submission! You feel: ${userFeelings}`);
        }}
      >
        Submit feeling!
      </Button>
    </div>
  );
};

export default CheckIn;
