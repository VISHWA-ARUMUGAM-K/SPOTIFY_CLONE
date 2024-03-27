import React, { useState, useEffect, useContext } from "react";
import { IconContext } from "react-icons";
import apiclient from "../../spotify";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import { useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataContext";

export default function Library() {
  // const [playList, setPlaylist] = useState(null);
  const { playList, isLoading, setPlayListId, fetchPlaylist } =
    useContext(DataContext);

  // useEffect(() => {
  //   apiclient
  //     .get("me/playlists")
  //     .then((response) => {
  //       console.log(`response from the playlist is`);
  //       console.log(response.data.items);
  //       setPlaylist(response.data.items);
  //     })
  //     .catch((er) => console.log(`this is the error${er}`));
  // }, []);

  const navigate = useNavigate();

  // const playPlaylist = (id) => {
  //   navigate("/player", { state: { id: id } });
  // };

  return (
    <div className="screen-container">
      {!isLoading && (
        <div className="library-body">
          {playList?.map((playlist) => (
            <div
              className="playlist-card"
              key={playlist.id}
              // onClick={() => playPlaylist(playlist.id)}
              onClick={() => {
                fetchPlaylist(playlist.id);
                navigate("/player");
              }}
            >
              <img
                className="playlist-image"
                alt="playlist name"
                src={playlist?.images[0]?.url}
              ></img>

              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} songs</p>

              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "white" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
