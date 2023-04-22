import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import LoopIcon from '@mui/icons-material/Loop';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MusicOffOutlinedIcon from '@mui/icons-material/MusicOffOutlined';


import React, { useState } from 'react';

const MusicBar = () =>{



  // *****************
  // *   PLAYLIST    *
  // *****************

  const playlists = [
    {
      title: 'Relax',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 1',
          title: 'Playlist1 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 2',
          title: 'Playlist1 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 3',
          title: 'Playlist1 Song 3',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 4',
          title: 'Playlist1 Song 4',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 5',
          title: 'Playlist1 Song 5',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 6',
          title: 'Playlist1 Song 6',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 7',
          title: 'Playlist1 Song 7',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 8',
          title: 'Playlist1 Song 8',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 9',
          title: 'Playlist1 Song 9',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 10',
          title: 'Playlist1 Song 10',
        },
      ],
    },
    {
      title: 'Sad',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 1',
          title: 'Playlist1 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 2',
          title: 'Playlist1 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 3',
          title: 'Playlist1 Song 3',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 4',
          title: 'Playlist1 Song 4',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 5',
          title: 'Playlist1 Song 5',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 6',
          title: 'Playlist1 Song 6',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 7',
          title: 'Playlist1 Song 7',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 8',
          title: 'Playlist1 Song 8',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 9',
          title: 'Playlist1 Song 9',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 10',
          title: 'Playlist1 Song 10',
        },
      ],
    },
    {
      title: 'Happy',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 1',
          title: 'Playlist1 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 2',
          title: 'Playlist1 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 3',
          title: 'Playlist1 Song 3',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 4',
          title: 'Playlist1 Song 4',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 5',
          title: 'Playlist1 Song 5',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 6',
          title: 'Playlist1 Song 6',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 7',
          title: 'Playlist1 Song 7',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 8',
          title: 'Playlist1 Song 8',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 9',
          title: 'Playlist1 Song 9',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 10',
          title: 'Playlist1 Song 10',
        },
      ],
    },
    {
      title: 'Mad',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 1',
          title: 'Playlist1 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 2',
          title: 'Playlist1 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 3',
          title: 'Playlist1 Song 3',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 4',
          title: 'Playlist1 Song 4',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 5',
          title: 'Playlist1 Song 5',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 6',
          title: 'Playlist1 Song 6',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 7',
          title: 'Playlist1 Song 7',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 8',
          title: 'Playlist1 Song 8',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 9',
          title: 'Playlist1 Song 9',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 10',
          title: 'Playlist1 Song 10',
        },
      ],
    },
    {
      title: 'Focus',
      songs: [
      {
      src: 'https://drive.google.com/uc?export=download&id=1y2cDB289XgTXMARrmi3p_KFzWhM2BQad',
      artist: 'Nova',
      title: 'Trees In The Wind',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1OYw6_JkpZ4VKVUEohSdd2FcQDCdVAK5F',
      artist: 'Elior',
      title: 'Discover',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1_ct1-EPG9tjGtkl9t04JVWln5162ZlPr',
      artist: 'Tenno',
      title: 'Daydreaming',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1185UJc9i6KP8BUi8Y-w2ig5LCWlaGj_z',
      artist: 'Flovry',
      title: 'First Heartbreak',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1ZNMRkv20M6LzBYxcP0y7k9s6nfsIWem6',
      artist: 'Softy',
      title: 'Lazy Afternoon',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1EOlzI4-SEl4oPaaqbDCKEOsnEANiPf-E',
      artist: 'Amies',
      title: 'Memory Lane',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1AFRu6SAAfJEIMdEQw4cGi9HhbLQ74kUc',
      artist: 'ChilledCow',
      title: 'Nova',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1c6nRoVvOw4jwsf2ZotyHGQvruc9YkXQw',
      artist: 'No Spirit',
      title: 'Running Out Of Time',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=1uVem858hkkzy79yxJw-F1_N4RC5J5tBt',
      artist: 'Chilled Cow',
      title: 'Snowman',
      },
      {
      src: 'https://drive.google.com/uc?export=download&id=15K4IW-KZaXiysU6v57FLYf-Qhs7Qu2El',
      artist: 'DaniSogen',
      title: 'Flowing',
      },
      ],
      },
  ];
  // *****************
  // *   PLAYLIST    *
  // *****************


// *****************
// *  AUDIO ICONS  *
// *****************
const customIcons = {
  play: <PlayArrowOutlinedIcon style={{ color: '#B19CD9' }} />,
  pause: <PauseOutlinedIcon style={{ color: '#B19CD9' }} />,
  rewind: <FastRewindIcon style={{ color: '#B19CD9' }} />,
  forward: <FastForwardIcon style={{ color: '#B19CD9' }} />,
  previous: <SkipPreviousOutlinedIcon style={{ color: '#B19CD9' }} />,
  next: <SkipNextOutlinedIcon style={{ color: '#B19CD9' }} />,
  loop: <LoopIcon style={{ color: '#B19CD9' }} />,
  loopOff: <ReplayOutlinedIcon style={{ color: '#B19CD9' }} />,
  volume: <VolumeUpIcon style={{ color: '#B19CD9' }} />,
  volumeMute: <VolumeOffIcon style={{ color: '#B19CD9' }} />,
};
// *****************
// *  AUDIO ICONS  *
// *****************


  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextTrack = () => {
    const currentPlaylist = playlists[currentPlaylistIndex];
    const nextIndex = (currentPlaylist.songs.length + currentTrackIndex + 1) % currentPlaylist.songs.length;
    setCurrentTrackIndex(nextIndex);
  };

  const handlePreviousTrack = () => {
    const currentPlaylist = playlists[currentPlaylistIndex];
    const previousIndex = (currentPlaylist.songs.length + currentTrackIndex - 1) % currentPlaylist.songs.length;
    setCurrentTrackIndex(previousIndex);
  };

  const handlePlaylistSelect = (event: { target: { value: string; }; }) => {
    const playlistIndex = parseInt(event.target.value);
    setCurrentPlaylistIndex(playlistIndex);
    setCurrentTrackIndex(0); // set the first song of the selected playlist as the current track
  };

  const toggleMusicBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <div
       style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0'
        }}>
      <span onClick={toggleMusicBar}> {isOpen ? <MusicOffOutlinedIcon style={{ fontSize: 40 }} /> : <MusicNoteOutlinedIcon style={{ fontSize: 40 }} />} </span>
       </div>
      {isOpen && (
       <>
          <AudioPlayer
           className="music-bar"
          style={{
            width: '95%',
            margin:'40px',
            borderRadius:'30px',
            backgroundColor:'#FFFFFF',
            letterSpacing:"0.3em",
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.3)',
            color: '#B19CD9'
          }}
            layout='horizontal'
            autoPlay={false}
            src={playlists[currentPlaylistIndex].songs[currentTrackIndex].src}
            header={playlists[currentPlaylistIndex].songs[currentTrackIndex].title}
            footer={playlists[currentPlaylistIndex].songs[currentTrackIndex].artist}
            showSkipControls={true}
            onEnded={handleNextTrack}
            onClickNext={handleNextTrack}
            onClickPrevious={handlePreviousTrack}
            customAdditionalControls={
              [
                RHAP_UI.LOOP,
                <><label htmlFor="playlist-select">Playlist:</label><select id="playlist-select" value={currentPlaylistIndex} onChange={handlePlaylistSelect}>
                  {playlists.map((playlist, index,) => (
                    <option key={index} value={index}>{playlist.title}</option>
                  ))}
                </select></>
              ]}
            customIcons={customIcons}
          />
        </>
      )}
    </div>
  );
  }

  export default MusicBar;
