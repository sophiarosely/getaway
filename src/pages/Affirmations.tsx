import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormGroup } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

const Affirmations = () => {
  const [userMood, setUserMood] = useState('');
  const [affirmations, setAffirmations] = useState<string[]>([]);
  const [saveButton, setSaveButton] = useState<React.ReactNode | null>(null);

  const handleSubmit = (): void => {
    axios
      .get(`/affirmations/mood/${userMood}`)
      .then(({ data }) => setAffirmations(data))
      .catch((err) => console.error(err));

      setSaveButton(<Button
        variant='text'
        onClick={() => {
          handleSaveSubmit();
        }}>
        SAVE
      </Button>)
  };

  const handleSaveSubmit = (): void => {
    Swal.fire({
      title: 'Success!',
      text: 'Affirmation saved.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };



  return (
    <div id='parent'>
      <Link to="/affirmation-entries"><Button variant='text'>View Affirmations</Button></Link>
      <center>
        <h1>Affirmations</h1>
        <h2>What affirmations are you looking for today? </h2>
        <h3>Today, I am feeling...</h3>
        {/* <h6>You can express as much you want or enter a single word. It's up to you ☺ </h6> */}
        <FormGroup>
          <TextField
            id='outlined-multiline-static'
            label='Type here...'
            multiline
            rows={4}
            onChange={(e) => setUserMood(e.target.value)}
          />
          <Button variant='text' onClick={() => handleSubmit()}>
            Enter
          </Button>
        </FormGroup>
      </center>
      <div id='affirmations'>
        <center>
          <ul>
            {affirmations.map((affirmation: string, index: number) => {
              return <li key={index}>{affirmation}</li>;
            })}
          </ul>
        </center>
      </div>
   <center>{saveButton}</center>
    </div>
  );
};

export default Affirmations;
