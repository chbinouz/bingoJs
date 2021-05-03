import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./YoutubeMusic.css";
const YoutubeMusic = (props) => {
  return (
    <YouTubeIcon
      id="icon"
      onClick={() =>
        window.open(
          "https://www.youtube.com/watch?v=b2Zuro5owPg&ab_channel=Miros%C5%82awMi%C5%82ek"
        )
      }
    />
  );
};

export default YoutubeMusic;
