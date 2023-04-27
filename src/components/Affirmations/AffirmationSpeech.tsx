import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';
import StopCircleIcon from '@mui/icons-material/StopCircle';



const AffirmationSpeech = () => {
    const {state} = useLocation();
    const {entryId, user} = state;
    const [isRecording, setIsRecording] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');
    const [affirmations, setAffirmations] = useState<string[]>([]);
    const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

    const [showText, setShowText] = useState(true);



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

    setShowText(true);

    const timer = setTimeout(() => { // user alert of recognized speech, then dissolves
        setShowText(false);
      }, 3000);
       () => clearTimeout(timer);
       
    for (let i = 0; i < affirmations.length; i++) {
      const affirmation = affirmations[i].toLowerCase();
      if (transcript.toLowerCase().includes(affirmation)) {

        setCurrentAffirmationIndex((currentIndex) => currentIndex + 1);
        setRecognizedText(`Affirmation recognized: ${affirmations[i]}`);

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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <IconButton component="button" onClick={handleStartRecording} disabled={isRecording}>
            <MicIcon/>
            </IconButton>
            <IconButton component="button" onClick={handleStopRecording} disabled={!isRecording}>
            <StopCircleIcon/>
            </IconButton>
            </div>
         {(showText) && <p>{recognizedText}</p>}


      {currentAffirmation}

        </div>
        </div>
      );
}

export default AffirmationSpeech;