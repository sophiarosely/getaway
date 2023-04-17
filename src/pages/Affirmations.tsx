import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { FormGroup } from "@mui/material";
import axios from 'axios';

const Affirmations = () => {
  const [userMood, setUserMood] = useState('');
  const [affirmations, setAffirmations] = useState('');

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
    <TextField
    id="standard-basic"
    label=""
    variant="standard"
    onChange={(e) => setUserMood(e.target.value)}
     />
     <Button
     variant="text"
     onClick={() => handleSubmit()}>
      Enter</Button>
    </center>
    <div id="affirmations">
      {affirmations}
    </div>

    </div>
  )
  }

  export default Affirmations;