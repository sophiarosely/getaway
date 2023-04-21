import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
  ];
  // *****************
  // *   PLAYLIST    *
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
      <h1>MusicBar</h1>
      <button onClick={toggleMusicBar}>{isOpen ? 'Close' : 'Open'} Music Bar</button>
      {isOpen && (
       <>
          <AudioPlayer
            style={{ width: '50%' }}
            layout='horizontal'
            autoPlay={false}
            src={playlists[currentPlaylistIndex].songs[currentTrackIndex].src}
            header={playlists[currentPlaylistIndex].songs[currentTrackIndex].title}
            footer={playlists[currentPlaylistIndex].songs[currentTrackIndex].artist}
            showSkipControls={true}
            onClickNext={handleNextTrack}
            onClickPrevious={handlePreviousTrack}
            // customProgressBarSection={
            //   [
            //     RHAP_UI.PROGRESS_BAR,
            //     RHAP_UI.CURRENT_TIME,
            //     <div>/</div>,
            //     RHAP_UI.DURATION
            //   ]
            // }
            customAdditionalControls={
              [
                RHAP_UI.LOOP,
                <><label htmlFor="playlist-select">Playlist:</label><select id="playlist-select" value={currentPlaylistIndex} onChange={handlePlaylistSelect}>
                  {playlists.map((playlist, index) => (
                    <option key={index} value={index}>{playlist.title}</option>
                  ))}
                </select></>
              ]
            }
            className="music-bar"
          />
        </>
      )}
    </div>
  );
  }

  export default MusicBar;
