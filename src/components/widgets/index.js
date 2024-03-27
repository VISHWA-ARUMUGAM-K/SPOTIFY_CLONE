import React, { useEffect, useState } from "react";
import "./widgets.css";
import apiclient from "../../spotify";
import WidgetCard from "./widgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  // console.log(similar, featured, newRelease);
  // console.log(artistID);

  useEffect(() => {
    if (artistID) {
      apiclient
        .get(`/artists/${artistID}/related-artists`)
        .then((res) => {
          const a = res.data.artists.splice(0, 3);
          console.log(a);
          setSimilar(a);
        })
        .catch((err) => console.log(err));

      apiclient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data.playlists.items.splice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.log(err));

      apiclient
        .get(`browse/new-releases`)
        .then((res) => {
          const a = res.data.albums.items.splice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.log(err));
    }
  }, [artistID]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar artists" similar={similar} />
      <WidgetCard title="Made for You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}
