import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  VrButton,
  Environment
} from "react-360";
// import Video360 from "./src/components/Video360.react";
// import Videos from "./src/components/Videos.js";
import { NativeModules } from "react-360";
import { VideoModule } from "VideoModule";

export default class react_360_hello extends React.Component {
  render() {
    const { VideoModule } = NativeModules;
    VideoModule.createPlayer("myplayer");

    return (
      <View style={styles.panel}>
        <VrButton
          onClick={() => {
            VideoModule.play("myplayer", {
              source: { url: "/static_assets/R0010004.mp4" },
              loop: true,
              muted: true
            });
            Environment.setBackgroundVideo("myplayer");
          }}
        >
          <Text style={styles.test_text}>Play!</Text>
        </VrButton>
      </View>
    );
  }
}

// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  test_text: {
    fontSize: 60,
    color: "#ffffff",
    textAlign: "center"
  }
});

// register the root component
AppRegistry.registerComponent("react_360_hello", () => react_360_hello);
