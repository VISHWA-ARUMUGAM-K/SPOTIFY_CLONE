import React, { useEffect, useRef, useState } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";

import Controls from "./controls";
import WaveAnimation from "./waveAnimation";
// import { clear } from "@testing-library/user-event/dist/clear";

function Audioplayer({ currenttrack, currentIndex, setCurrentIndex, total }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgess] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;
  // let name = currenttrack.name;
  // name = name.toUpperCase();

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));
  // const audioRef = useRef(new Audio(audioSrc));

  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentpercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgess(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgess(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZeros = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  const artists = [];

  currenttrack?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentpercentage}
          isPlaying={isPlaying}
          image={currenttrack?.album?.images[0]?.url}
          size={300}
          color="#c96850"
        ></ProgressCircle>
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currenttrack.name}</p>
        <p className="song-artist">{artists.join(" | ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZeros(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying}></WaveAnimation>
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          ></Controls>
        </div>
      </div>
    </div>
  );
}

export default Audioplayer;
