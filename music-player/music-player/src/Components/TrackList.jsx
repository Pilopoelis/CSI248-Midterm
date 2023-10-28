import { useState } from "react";

function TrackList({ tracks, setCurrentTrack }) {
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  const handleSelect = (track) => {
    setCurrentTrack(track);
    setSelectedTrackId(track.id);
  };
  return (
    <ul>
      {tracks.map((track) => {
        return (
          <li
            key={track.id}
            onClick={() => handleSelect(track)}
            className={track.id === selectedTrackId ? "selected" : ""}
          >
            {track.artist.name} - {track.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TrackList;
