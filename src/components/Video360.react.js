import React from "react";
import {
  StyleSheet,
  Text,
  View,
  asset,
  Environment,
  VrButton,
  Video
} from "react-360";
import {
  default as VideoModule,
  VideoPlayerInstance,
  type,
  VideoStatusEvent
} from "VideoModule";
import MediaAppTemplateVideoScreen from "MediaAppTemplateVideoScreen.react";

type Players = {
  scene: VideoPlayerInstance,
  screen: VideoPlayerInstance
};

const TRANSITION_TIME = 2000;

class Video360 extends React.Component {
  _players: Players;
  _nextPlayers: Players;
  _preloadJob: ?Promise<void>;
  _preloading: boolean = false;
  state = {
    inTransition: false,
    sound: false,
    player: null
  };

  componentWillMount() {
    this._players = {
      scene: VideoModule.createPlayer(),
      screen: VideoModule.createPlayer()
    };
    this._nextPlayers = {
      scene: VideoModule.createPlayer(),
      screen: VideoModule.createPlayer()
    };
    this._renderScene(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._renderScene(nextProps);
  }

  _preloadVideo(player, source) {
    // Video can be preloaded by calling `play()`
    // on a video player that is not attached to the environment or a screen
    // with `muted=true` and `autoPlay=false`.
    // Here we are swaping two sets of video players, one set for displaying
    // another set for preloading.
    // You can listen to the 'onVideoStatusChanged' event to check when
    // the loading is done.
    // let player;
    return new Promise((resolve, reject) => {
      const onVideoLoadedSubscription = player.addListener(
        "onVideoStatusChanged",
        (event: VideoStatusEvent) => {
          if (event.status === "ready") {
            player.removeSubscription(onVideoLoadedSubscription);
            resolve();
          }
        }
      );
      this.setState({ player });
      // player.play({
      //   source: source,
      //   muted: false,
      //   autoPlay: false,
      // });
    });
  }

  _preloadScene(data) {
    const promises = [];
    Environment.preloadBackgroundImage(asset("chess-world.jpg"), {
      format: "2D"
    });
    promises.push(Promise.resolve());
    if (data.screen) {
      promises.push(this._preloadVideo(this._nextPlayers.screen, data.screen));
    }
    return Promise.all(promises);
  }

  _renderScene(nextProps) {
    const data = nextProps.currentScene;
    this._preloading = true;
    const loadScene = () => {
      this._preloading = false;
      // video player clean up work
      this._players.scene.stop();
      this._players.screen.stop();
      // swap the players for next preload
      const temp = this._players;
      this._players = this._nextPlayers;
      this._nextPlayers = temp;
      this.setState({ inTransition: true });
      setTimeout(() => {
        this.setState({ inTransition: false });
      }, TRANSITION_TIME);
      this._players.screen.resume();
      // preload next scene
      const nextData = nextProps.nextScene;
      this._preloadJob = this._preloadScene(nextData);
    };

    if (this._preloadJob != null) {
      this._preloadJob.then(loadScene);
    } else {
      this._preloadScene(data).then(loadScene);
    }
  }

  render() {
    const showScreen = !!(
      !this._preloading &&
      !this.state.inTransition &&
      this.props.currentScene.screen
    );
    return (
      // style={[styles.container]}
      <View>
        <Video
          source={asset("360Video_Sample.mp4", { format: "mp4" })}
          playerState={this.state.playerState}
          loop={true}
          muted={true}
          autoPlay={true}
        >
          {/* <VrButton
            onClick={() => {
              this.state.player.play({
                source: { url: asset("banana.mp4").uri },
                muted: false,
                autoPlay: true
              });
            }}
          > */}
          {/* <Text style={[styles.test_font]}>Play!</Text> */}
          {/* </VrButton> */}
          <MediaAppTemplateVideoScreen
            player={this._players.screen._player}
            style={styles.screen}
            visible={showScreen}
          />
        </Video>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#ffffff",
    textAlign: "center"
  },
  screen: {
    width: 720,
    height: 480
  }
});

module.exports = Video360;
