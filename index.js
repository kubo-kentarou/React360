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
  // AmbientLight,
  // PointLight,
  // DirectionalLight,
  // SpotLight,
  Model,
  PointLight,
  // Entity,
} from "react-360";
import { Arrow } from "./Arrow";
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import SpotLight from 'SpotLight';
// import { SpotLight } from "react-vr";
// import Model from "./Model";

export default class Hello360 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // backgroundColor: new Animated.Value(0),
      // gazed: false,
      lightType:0,
      rotate: 0,
    };
  }

  // componentDidMount() {
  //   this._changeBackgroundColor();
  // }

  // _changeBackgroundColor() {
  //   this.state.backgroundColor.setValue(0);

  //   Animated.sequence([
  //     Animated.timing(this.state.backgroundColor, {
  //       toValue: 300,
  //       duration: 2000,
  //     }),

  //     Animated.timing(this.state.backgroundColor, {
  //       toValue: 0,
  //       duration: 2000,
  //     }),
  //   ]).start(this._changeBackgroundColor.bind(this));
  // }

  // state = {
  //   imageUrl: ""
  // };

  // setGazed = () => {
  //   this.setState({ gazed: true });
  // };

  render() {
    // let color = this.state.backgroundColor.interpolate({
    //   inputRange: [0, 150, 300],
    //   outputRange: [
    //     "rgba(1, 87, 155, 1.0)",
    //     "rgba(26, 35, 255, 1.0)",
    //     "rgba(38, 50, 56, 1.0)",
    //   ],
    // });
    // console.log("sssss",module);


    return (
      <View>
        {/* style = {{
          transform:[{translate: [0,0,-5]}], layoutOrigin: [0.5,0.5,0], position:'absolute', alignItems:'center',
        }}>
          {(this.state.lightType%4)===0 && <AmbientLight/>}
          {(this.state.lightType%4)===1 && (<PointLight style ={{color: 'red', transform:[{translate: [0, 10, -5]}]}}/>)}
          {(this.state.lightType%4)===2 && (<DirectionalLight style = {{color: 'green'}}/>)}
          {(this.state.lightType%4)===3 && (<SpotLight style = {{color: 'blue', transform:[{translate:[0,10,-5]}]}} angle = {60}/>)} */}
          {/* <SpotLight style = {{color: 'white', transform:[{translate:[-53,-70,20]}]}} /> */}
          <AmbientLight intensity = {1.0} color={"#ffffff"} />
          <PointLight intensity = {1} style={{transform: [{translate:[10,30,3]}]}} />
          <Entity
            style = {{transform:[{scale:[1,1,1]}, {rotateX: 0},{rotateY: 0}, {translate:[0,-50,-1]}]}}
            lit = {true}
            source = {{gltf2: asset('')}}
            // source = {{
            //   obj: asset('battel.obj'),
            //   mtl: asset('battel.mtl')
            // }}
            />
        {/* <AmbientLight />
          <PointLight style={{color: 'green', transform:[{translate:[5, 5.5, 20]}]}}/>
            <Entity
              source = {{
                // obj: asset('bugatti.obj'),
                // mtl: asset('bugatti.mtl')
                obj: asset('iPhone 6.obj'),
                mtl: asset('iPhone 6.mtl')
              }}
              // texture = {asset('iphone-6-02 (1).jpg')}
              lit={true}
              style={styles.iphone}
            ></Entity> */}
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
  iphone:{
    transform:[
      // { translateX: 0},
      // { translateY: 0},
      // { translateZ: -200},
      { scaleX: 1},
      { scaleY: 1},
      { scaleZ: 1},
      // { rotateX: 0},
      // { rotateY: 0},
      // { rotateZ: 0},
      // { translate: [0, 0, 50] },
      { translate: [10, -0.01, -10] }, //iphone
      // { rotateY: this.rotation}
    ],
  }
});

AppRegistry.registerComponent("Hello360", () => Hello360);
// AppRegistry.registerComponent("App", () => App);
AppRegistry.registerComponent("Arrow", () => Arrow);
// AppRegistry.registerComponent("custom360", () => custom360);
// AppRegistry.registerComponent("Raycaster", () => Raycaster);
// AppRegistry.registerComponent("Model", () => Model);
