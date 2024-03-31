import { createContext, useState, useEffect } from "react";
import apiclient from "../spotify";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [playList, setPlayList] = useState(null);
  const [playListId, setPlayListId] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currenttrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  useEffect(() => {
    try {
      setCurrentTrack(tracks[currentIndex].track);
    } catch (e) {}
  }, [currentIndex, tracks]);

  useEffect(() => {
    const fetchFullPlaylist = async () => {
      setIsLoading(true);
      try {
        await apiclient
          .get("me/playlists")
          .then((response) => {
            setPlayList(response.data.items);
          })
          .catch((er) => console.log(`this is the error${er}`));
      } finally {
        setIsLoading(false);
      }
    };
    fetchFullPlaylist();
  }, []);

  const fetchPlaylist = async (id) => {
    try {
      await apiclient.get("/playlists/" + id + "/tracks").then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    } finally {
      console.log("id changed", id);
    }
  };

  const HandleCurrentTrack = (index) => {
    setCurrentIndex(index);
    setCurrentTrack(tracks[index].track);
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   try {
  //     setCurrentTrack(tracks[currentIndex].track);
  //   } catch (e) {
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [currentIndex, tracks]);
  return (
    <DataContext.Provider
      value={{
        tracks,
        currenttrack,
        isLoading,
        playList,
        token,
        setPlayListId,
        currentIndex,
        setCurrentIndex,
        fetchPlaylist,
        HandleCurrentTrack,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
