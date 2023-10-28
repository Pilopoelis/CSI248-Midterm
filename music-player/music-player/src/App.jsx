import SearchBar from "./Components/SearchBar";
import TrackList from "./Components/TrackList";
import Player from "./Components/Player";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const searchTracks = async (searchValue) => {
    // const axios = require("axios");
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/infos",
      headers: {
        "X-RapidAPI-Key": "908c9d395cmsh7d43773bd077236p1e493fjsnd079291257d0",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTracks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchTracks} />
      <TrackList tracks={tracks} setCurrentTrack={setCurrentTrack} />
      <Player track={currentTrack} />
    </div>
  );
}

export default App;
