import React from "react";
import { ImVolumeMedium, ImVolumeMute } from 'react-icons/im';


const AudioControls = ({
  isPlaying,
  onPlayPauseClick
}) => (
  <div className="audio-controls">

    {isPlaying ? (
      <button
        type="button"
        className="pause"
        // onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <ImVolumeMedium className="play" /> 
      </button>
    ) : (
      <button
        type="button"
        className="play"
        // onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <ImVolumeMute className="mute" /> 
         
      </button>
    )}

  </div>
);

export default AudioControls;