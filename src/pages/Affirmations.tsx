import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { FormGroup } from "@mui/material";
import axios from 'axios';

const Affirmations = () => {
  const [userMood, setUserMood] = useState('');
  const [affirmations, setAffirmations] = useState<string[]>([]);

  const handleSubmit = (): void => {
    axios.get(`/affirmations/mood/${userMood}`)
    .then(({ data }) => setAffirmations(data))
    .catch((err) => console.error(err))
  }

  return (
    <div>
    <center><h1>Affirmations</h1>
    <h2>What affirmations are you looking for today? </h2>
    <h3>Today, I am feeling...</h3>
    {/* <h6>You can express as much you want or enter a single word. It's up to you ☺ </h6> */}
    <FormGroup>
      <TextField
          id="outlined-multiline-static"
          label="Type here..."
          multiline
          rows={4}
          onChange={(e) => setUserMood(e.target.value)}
        />
     <Button
     variant="text"
     onClick={() => handleSubmit()}>
      Enter</Button>
      </FormGroup>
    </center>
    <div id="affirmations">
    <ul>
  {affirmations.map((affirmation: string, index: number) => {
    return (
      <li key={index}>
        {affirmation}
      </li>
    );
  })}
</ul>
    </div>

    </div>
  )
  }

  export default Affirmations;