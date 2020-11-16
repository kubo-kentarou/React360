import React from "react";
import VideoPlayer from "./VideoPlayer";

export default class VideoTest extends React.Component {
  render() {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [
        {
          src: "./test.mp4",
          type: "video/mp4"
        }
      ]
    };

    return (
      <div>
        <h1>test video</h1>
        <VideoPlayer options={videoJsOptions} />
      </div>
    );
  }
}
