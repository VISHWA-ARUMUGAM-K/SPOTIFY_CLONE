import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlay, IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";
export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  console.log(isPlaying);
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack></IoPlaySkipBack>
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause></FaPause> : <IoPlay></IoPlay>}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward></IoPlaySkipForward>
        </div>
      </div>
    </IconContext.Provider>
  );
}
