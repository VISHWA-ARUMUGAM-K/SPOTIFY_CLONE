import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Queue from "../../components/Queue";
import SongCard from "../../components/SongCard";
import apiclient from "../../spotify";
import "../player/player.css";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";
import DataContext from "../../Context/DataContext";
export default function Player() {
  const location = useLocation();
  // const [tracks, setTracks] = useState([]);
  // const [currenttrack, setCurrentTrack] = useState({});
  // const [currentIndex, setCurrentIndex] = useState(0);
  //need to use context api to display the tracks at same time
  // const { isLoading } = useContext(DataContext);
  const { tracks, currenttrack, isLoading, currentIndex, setCurrentIndex, HandleCurrentTrack } = useContext(DataContext);

  // useEffect(() => {
  //   if (location.state) {
  //     apiclient
  //       .get("/playlists/" + location.state?.id + "/tracks")
  //       .then((res) => {
  //         setTracks(res.data.items);

  //         setCurrentTrack(res.data.items[0].track);
  //       });
  //   }
  // }, [location.state]);

  // useEffect(() => {
  //   try {
  //     setCurrentTrack(tracks[currentIndex].track);
  //   } catch (e) {}
  // }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      {!tracks.length > 0 && <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>No playlist selected.Select a playlist to get started</h1>}
      {tracks.length > 0 && !isLoading && (
        <div className="left-player-body">
          <AudioPlayer currenttrack={currenttrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}></AudioPlayer>
          <Widgets artistID={currenttrack?.album?.artists[0]?.id}></Widgets>
        </div>
      )}
      {tracks.length > 0 && !isLoading && (
        <div className="right-player-body">
          <SongCard album={currenttrack?.album}></SongCard>
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} HandleCurrentTrack={HandleCurrentTrack}></Queue>
        </div>
      )}
    </div>
  );
}
