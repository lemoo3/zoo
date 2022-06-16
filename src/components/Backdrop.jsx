import React, { useEffect } from "react";

const Backdrop = ({ activeColor, trackIndex, isPlaying }) => {


  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default Backdrop;
