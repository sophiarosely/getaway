import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from 'react';

const MusicBar = () =>{

  const testMusic = [
    {
      src: 'https://example.com/song1.mp3',
      artist: 'Artist 1',
      title: 'Song 1',
    },
    {
      src: 'https://example.com/song2.mp3',
      artist: 'Artist 2',
      title: 'Song 2',
    },
    {
      src: 'https://example.com/song3.mp3',
      artist: 'Artist 3',
      title: 'Song 3',
    },
  ];

  return (
 <div>
      <h1>MusicBar</h1>
      <AudioPlayer
        autoPlay={false}
        src={testMusic[0].src}
        header={testMusic[0].title}
        footer={testMusic[0].artist}
        showSkipControls={true}
        onClickNext={() => {
          console.log('Next');
        }}
        onClickPrevious={() => {
          console.log('Previous');
        }}
      />
    </div>
  );
  }

  export default MusicBar;