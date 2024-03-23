import React from "react";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import "./SongCard.css";
function SongCard({ album }) {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url}></AlbumImage>
      <AlbumInfo album={album}></AlbumInfo>
    </div>
  );
}

export default SongCard;
