import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from 'react';

const MusicBar = () =>{

  const playlists = [
    {
      title: 'Playlist 1',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 1',
          title: 'Playlist1 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 2',
          title: 'Playlist1 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 3',
          title: 'Playlist1 Song 3',
        },
      ],
    },
    {
      title: 'Playlist 2',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 1',
          title: 'Playlist2 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 2',
          title: 'Playlist2 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 3',
          title: 'Playlist2 Song 3',
        },
      ],
    },
    {
      title: 'Playlist 3',
      songs: [
        {
          src: 'https://drive.google.com/uc?export=download&id=14-K4ANI1yIFelWlFxXFS9OBaN4ndIJJk',
          artist: 'Artist 1',
          title: 'Playlist3 Song 1',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=1Lv5LudP7RxxbI9s-IO-7BBY0wJJPHj5H',
          artist: 'Artist 2',
          title: 'Playlist3 Song 2',
        },
        {
          src: 'https://drive.google.com/uc?export=download&id=19D4PXYw8nwkoF0o0yqCCAwiDCm-sQXYN',
          artist: 'Artist 3',
          title: 'Playlist3 Song 3',
        },
      ],
    },
  ];

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
      <h1>MusicBar</h1>
      <button onClick={toggleMusicBar}>{isOpen ? 'Close' : 'Open'} Music Bar</button>
      {isOpen && (
        <>
          <div>
            <label htmlFor="playlist-select">Select a playlist:</label>
            <select id="playlist-select" value={currentPlaylistIndex} onChange={handlePlaylistSelect}>
              {playlists.map((playlist, index) => (
                <option key={index} value={index}>{playlist.title}</option>
              ))}
            </select>
          </div>
          <AudioPlayer
            style={{ width: '50%' }}
            autoPlay={false}
            src={playlists[currentPlaylistIndex].songs[currentTrackIndex].src}
            header={playlists[currentPlaylistIndex].songs[currentTrackIndex].title}
            footer={playlists[currentPlaylistIndex].songs[currentTrackIndex].artist}
            showSkipControls={true}
            onClickNext={handleNextTrack}
            onClickPrevious={handlePreviousTrack}
            className="music-bar"
          />
        </>
      )}
    </div>
  );
  }

  export default MusicBar;
