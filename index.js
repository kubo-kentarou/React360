import React from "react";
import {
  AppRegistry,
  asset,
  StyleSheet,
  Text,
  View,
  Image,
  VrButton,
  Animated,
  Environment,
  NativeModules,
} from "react-360";
import { Arrow } from "./Arrow";

import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import lodash from "lodash";

class BrowserBridge {
  constructor() {
    this._subscribers = {};
  }

  subscribe(handler) {
    const key = String(Math.random());
    this._subscribers[key] = handler;
    return () => {
      delete this._subscribers[key];
    };
  }

  notifyEvent(name, event) {
    lodash.forEach(this._subscribers, (handler) => {
      handler(name, event);
    });
  }
}

const browserBridge = new BrowserBridge();
BatchedBridge.registerCallableModule(BrowserBridge.name, browserBridge);
console.log(BrowserBridge.name, browserBridge);

export default class Hello360 extends React.Component {
  constructor(props) {
    super(props);
    (this.onBrowserEvent = this.onBrowserEvent.bind(this)),
      (this.state = {
        backgroundColor: new Animated.Value(0),
        gazed: false,
      });
  }

  componentWillMount() {
    this.unsubscribe = browserBridge.subscribe(this.onBrowserEvent);
  }

  onBrowserEvent(name, event) {
    // Do action on event here
    console.log("asdfadsfasdfadsfasdfas");
    this.goToParking();
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      delete this.unsubscribe;
    }
  }

  // componentDidMount() {
  //   this._changeBackgroundColor();
  // }

  _changeBackgroundColor() {
    this.state.backgroundColor.setValue(0);

    Animated.sequence([
      Animated.timing(this.state.backgroundColor, {
        toValue: 300,
        duration: 2000,
      }),

      Animated.timing(this.state.backgroundColor, {
        toValue: 0,
        duration: 2000,
      }),
    ]).start(this._changeBackgroundColor.bind(this));
  }

  // state = {
  //   imageUrl: ""
  // };

  // setGazed = () => {
  //   this.setState({ gazed: true });
  // };

  render() {
    let color = this.state.backgroundColor.interpolate({
      inputRange: [0, 150, 300],
      outputRange: [
        "rgba(1, 87, 155, 1.0)",
        "rgba(26, 35, 255, 1.0)",
        "rgba(38, 50, 56, 1.0)",
      ],
    });

    const { VideoModule } = NativeModules;

    return (
      <View>
        {/* <Animated.View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.greeting}>Hello World!!</Text>
        </Animated.View> */}
        {/* <VrButton
          style={styles.test_box}
          onClick={() => {
            VideoModule.createPlayer("Myplayer");
            VideoModule.play("Myplayer", {
              source: { url: "/static_assets/R0010004.mp4" },
              loop: true,
              muted: true,
            });
            Environment.setBackgroundVideo("Myplayer");

            setTimeout(() => {
              VideoModule.destroyPlayer("Myplayer");
              Environment.setBackgroundImage(asset("img/R0010008.JPG"));
              console.log("�v���C���[�j��");
            }, 19000);
          }}
        >
          <Text style={styles.text_sheet}>Play!</Text>
        </VrButton> */}
      </View>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.panel2}>
//         <Text style={styles.greeting}>This is test</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    transform: [
      { translateX: 200 },
      { translateY: -100 },
      { translateZ: 300 },
      { rotateY: 0 },
      { rotateX: 50 },
    ],
  },
  greeting: {
    fontSize: 30,
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
      { rotateX: -20 },
    ],
    opacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },

  position: {
    width: 1000,
    height: 1000,
    backgroundColor: "#000000",
    transform: [
      { translateX: 10 },
      { translateY: 10 },
      { translateZ: 10 },
      { rotateX: 10 },
      { rotateY: 10 },
      { rotateZ: 10 },
    ],
  },
  gre: {
    fontSize: 30,
    transform: [{ rotateY: -10 }, { translateZ: -100 }, { translateY: 100 }],
  },
  position2: {
    width: 1000,
    height: 1000,
    backgroundColor: "#000000",
    transform: [
      { translateX: -500 },
      { translateY: 100 },
      { translateZ: -800 },
    ],
  },

  image: {
    padding: 100,
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
    height: 400,
    transform: [
      { translateX: -500 },
      { translateY: 400 },
      { translateZ: -500 },
      { rotateX: -20 },
    ],
  },
  text_sheet: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "right",
    // fontfamily: "�����ӂ����"
  },
  test_box: {
    width: 60,
    height: 30,
    // justifyContent: "right",
    alignItems: "center",
    // padding: 20,
    // backgroundColor: "red",
    transform: [
      { translateX: -40 },
      { translateY: 915 },
      { translateZ: -20 },
      { rotateX: -20 },
    ],
    backgroundColor: "red",
  },
});

AppRegistry.registerComponent("Hello360", () => Hello360);
// AppRegistry.registerComponent("App", () => App);
AppRegistry.registerComponent("Arrow", () => Arrow);
// AppRegistry.registerComponent("custom360", () => custom360);
// AppRegistry.registerComponent("Raycaster", () => Raycaster);
