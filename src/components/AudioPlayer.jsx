// import React, { useState, useEffect, useRef,TouchEvent } from "react";
import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import { UserAgent } from "react-useragent";


/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */

const AudioPlayer = ({ track }) => {

  
  // State 
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Destructure for conciseness
  const { title, image, audioSrc } = track;

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
  };

  //コンポーネントの更新時
  //[isPlaying]依存変数に変更があった場合のみに指定した処理が実行される
  useEffect(() => {
    const source = audioRef.current;
    if (isPlaying) {
      source.play();
      console.log(source);
      // sound.play();
      // startTimer();
      source.addEventListener('ended', () => setIsPlaying(false));
      //クリーンアップ
      return () => {
        source.removeEventListener('ended', () => setIsPlaying(false));
      };
    } else {
      source.pause();
    }
  }, [isPlaying]);
  
  //初期化
  useEffect(() => {
    const source = audioRef.current;
    return () => {
      source.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const changeIsPlaying = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }else{
      setIsPlaying(true);
    }
  };

  return (
    <div className="audio-player">
      <div className="track-info">
      <UserAgent render={({ ua }) => {
        return ua.mobile ? 
        <img
        className={ hovered ? 'artwork hover' : 'artwork'}
          src={image}
          alt={`${title}`}
          onTouchStart={() => changeIsPlaying()}
          onMouseEnter={() => {
            //マウスホバー時に色変更
            setHovered(true);
          }}
          onMouseLeave={() => {
            //マウスホバー終了時に色を戻す
            setHovered(false);
          }}
        /> : 
        <img
        className={ hovered ? 'artwork hover' : 'artwork'}
          src={image}
          alt={`${title}`}
          onClick={() => changeIsPlaying()}
          onMouseEnter={() => {
            //マウスホバー時に色変更
            setHovered(true);
          }}
          onMouseLeave={() => {
            //マウスホバー終了時に色を戻す
            setHovered(false);
          }}
        />;
      }} />
      
        <h2 className="title">
          <AudioControls
            isPlaying={isPlaying}
            onPlayPauseClick={setIsPlaying}
          />
          {title}
        </h2>
      </div>
    </div>
  );
};

export default AudioPlayer;
