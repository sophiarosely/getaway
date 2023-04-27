import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'


const AffirmationSpeech = () => {
    const {state} = useLocation();
    const {entryId, user} = state;
    const [isRecording, setIsRecording] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');
    const [affirmations, setAffirmations] = useState<string[]>([]);
    const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);
    console.log(entryId, user)
    console.log(affirmations, 'here')

    useEffect(() => {
        axios
        .get(`/affirmations/retrieve/${user}/${entryId}`)
        .then(({ data }) => setAffirmations(data.affirmationList.split('/n')))
        .catch((err) => console.error(err))

    }, [])

    const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log('Speech recognition started');
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    console.log('Speech recognition result:', transcript);
    setRecognizedText(transcript);
    checkAffirmation(transcript);
  };

  recognition.onend = () => {
    console.log('Speech recognition ended');
    setIsRecording(false);
  };

  recognition.onerror = (event: any) => {
    console.error('Speech recognition error:', event.error);
    setRecognizedText(`Error: ${event.error}`);
    setIsRecording(false);
  };

  const checkAffirmation = (transcript: string) => {
    transcript += '.'
    for (let i = 0; i < affirmations.length; i++) {
      const affirmation = affirmations[i].toLowerCase();
      if (transcript.toLowerCase().includes(affirmation)) {
        console.log('Affirmation recognized:', affirmations[i]);
        setRecognizedText(`Affirmation recognized: ${affirmations[i]}`);
        setCurrentAffirmationIndex((currentIndex) => currentIndex + 1);
      }
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    recognition.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    recognition.stop();
  };

  const currentAffirmation = affirmations[currentAffirmationIndex];


    return (
        <div>
            <IconButton component="button" onClick={handleStartRecording} disabled={isRecording}>
            <MicIcon/>
            </IconButton>
            <IconButton component="button" onClick={handleStopRecording} disabled={!isRecording}>
            <StopCircleIcon/>
            </IconButton>
          <p>{recognizedText}</p>


          <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper variant="outlined" elevation={24} style={{ width: '800px', height: '600px' }}>

      <Typography variant="body1" component="p" color="black">
      {currentAffirmation}
      </Typography>
      </Paper>
    </Box>
        </div>
      );
}

export default AffirmationSpeech;