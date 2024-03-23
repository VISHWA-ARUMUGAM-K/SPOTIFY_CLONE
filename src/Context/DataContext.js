import { createContext, useState, useEffect } from "react";
import apiclient from "../spotify";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [playList, setPlaylist] = useState(null);
  const [playListId, setPlayListId] = useState("");
  const [token, setToken] = useState("");

  console.log(`playlist id is ${playListId}`);

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

  return (
    <DataContext.Provider value={{ playList, token, setPlayListId }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
