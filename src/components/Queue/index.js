import React from "react";
import "./queue.css";
function Queue({ tracks, setCurrentIndex, HandleCurrentTrack }) {
  // console.log(tracks, setCurrentIndex);

  const queueList = tracks?.map((track, index) => (
    <div className="queue-item flex" onClick={() => setCurrentIndex(index)}>
      <p className="track-name">{track?.track?.name}</p>
      <p className="track-duration">{track?.track?.duration_ms}</p>
    </div>
  ));

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">{queueList}</div>
      </div>
    </div>
  );
}

export default Queue;
