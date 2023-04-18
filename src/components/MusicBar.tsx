import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from 'react';

const MusicBar = () =>{

  const testMusic = [
    {
      src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
      artist: 'Artist 1',
      title: 'Song 1',
    },
    {
      src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
      artist: 'Artist 2',
      title: 'Song 2',
    },
    {
      src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
      artist: 'Artist 3',
      title: 'Song 3',
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % testMusic.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + testMusic.length) % testMusic.length);
  };

  const toggleMusicBar = () => {
    setIsOpen(!isOpen);
  };

  return (
 <div>
      <h1>MusicBar</h1>
      <button onClick={toggleMusicBar}>{isOpen ? 'Close' : 'Open'} Music Bar</button>
      {isOpen && ( <AudioPlayer
      style={{ width: '50%' }}
        autoPlay={false}
        src={testMusic[currentTrackIndex].src}
        header={testMusic[currentTrackIndex].title}
        footer={testMusic[currentTrackIndex].artist}
        showSkipControls={true}
        onClickNext={handleNextTrack}
        onClickPrevious={handlePreviousTrack}
        className="music-bar"
      />
      )}
    </div>
  );
  }

  export default MusicBar;