import React from "react";
import { Environment } from "react-360";
import { NativeModules } from "react-360";
// import { Player } from "react";

export default class Videos extends React.Component {
  // componentDidMount() {
  //   player.play();
  //   player.setLoop(true);
  //   player.setMuted();
  // }
  render() {
    const { VideoModule } = NativeModules;

    VideoModule.createPlayer("myplayer");

    // VideoModule.player("myplayer", {
    //   source: { url: asset("test.mp4") },
    //   stereo: "2DTB"
    // });

    VideoModule.play("myplayer", {
      source: { url: "/static_assets/R0010004.mp4" },
      loop: true,
      muted: true
    });

    // VideoModule.muted(true);

    Environment.setBackgroundVideo("myplayer");
    // return <View></View>;
    return <View></View>;
  }
}
