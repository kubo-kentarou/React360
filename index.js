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

<<<<<<< HEAD
export default class react_360_hello extends React.Component {
  render() {
    const { VideoModule } = NativeModules;
    VideoModule.createPlayer("myplayer");
=======
export default class Hello360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0)
    };
  }

  // componentDidMount() {
  //   this._changeBackgroundColor();
  // }

  _changeBackgroundColor() {
    this.state.backgroundColor.setValue(0);

    Animated.sequence([
      Animated.timing(this.state.backgroundColor, {
        toValue: 300,
        duration: 2000
      }),

      Animated.timing(this.state.backgroundColor, {
        toValue: 0,
        duration: 2000
      })
    ]).start(this._changeBackgroundColor.bind(this));
  }

  // state = {
  //   imageUrl: ""
  // };

  render() {
    let color = this.state.backgroundColor.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [
        "rgba(1, 87, 155, 1.0)",
        "rgba(26, 35, 255, 1.0)",
        "rgba(38, 50, 56, 1.0)"
      ]
    });
    return (
      <View>
        <Animated.View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.greeting}>Hello World!!</Text>
          {/* {/* <VrButton
            style={styles.greetingBox}
            onClick={() =>
              this.setState({
                imageUrl: ""
              })
            }
          >
            <Text style={styles.greeting}>Hide</Text>
          </VrButton>
          <Image style={styles.image} source={{ uri: this.state.imageUrl }} />
          <VrButton
            style={styles.greetingBox}
            onClick={() =>
              this.setState({
                imageUrl: "test.jpg"
              })
            }
          >
            <Text style={styles.greeting}>Show</Text>
          </VrButton>
>>>>>>> 9ac0b49d2135129a96bc9f35948cb83cf65a5789

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

<<<<<<< HEAD
// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
=======
class App extends React.Component {
  render() {
    return (
      <View style={styles.panel2}>
        <Text style={styles.greeting}>this is test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1200,
    height: 600,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  panel2: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    // flexDirection: "row",
    backgroundColor: "black",
    transform: [
      { translateX: -500 },
      { translateY: 400 },
      { translateZ: -600 },
      { rotateX: -20 }
    ],
    opacity: 0.4,
    alignItems: "center",
    justifyContent: "center"
  },

  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  },
  position: {
>>>>>>> 9ac0b49d2135129a96bc9f35948cb83cf65a5789
    width: 1000,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
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
=======
    width: 1000,
    height: 400,
    transform: [
      { translateX: -500 },
      { translateY: 400 },
      { translateZ: -500 },
      { rotateX: -20 }
    ]
  }
});

AppRegistry.registerComponent("Hello360", () => Hello360);
AppRegistry.registerComponent("App", () => App);
>>>>>>> 9ac0b49d2135129a96bc9f35948cb83cf65a5789
