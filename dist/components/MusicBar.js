var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
var MusicBar = function () {
    var testMusic = [
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
    var _a = useState(0), currentTrackIndex = _a[0], setCurrentTrackIndex = _a[1];
    var _b = useState(true), isOpen = _b[0], setIsOpen = _b[1];
    var handleNextTrack = function () {
        setCurrentTrackIndex((currentTrackIndex + 1) % testMusic.length);
    };
    var handlePreviousTrack = function () {
        setCurrentTrackIndex((currentTrackIndex - 1 + testMusic.length) % testMusic.length);
    };
    var toggleMusicBar = function () {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "MusicBar" }), _jsxs("button", __assign({ onClick: toggleMusicBar }, { children: [isOpen ? 'Close' : 'Open', " Music Bar"] })), isOpen && (_jsx(AudioPlayer, { style: { width: '50%' }, autoPlay: false, src: testMusic[currentTrackIndex].src, header: testMusic[currentTrackIndex].title, footer: testMusic[currentTrackIndex].artist, showSkipControls: true, onClickNext: handleNextTrack, onClickPrevious: handlePreviousTrack, className: "music-bar" }))] }));
};
export default MusicBar;
//# sourceMappingURL=MusicBar.js.map