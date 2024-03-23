import React from "react";
import "./AlbumImage.css";
function AlbumImage({ url }) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art"></img>
      <div className="albumImage-shadow">
        <img src={url} alt="shadow" className="albumImage-shadow"></img>
      </div>
    </div>
  );
}

export default AlbumImage;
