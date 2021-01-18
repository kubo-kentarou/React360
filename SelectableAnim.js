// ページ内の選択可能な場所を分かりやすくするアニメーションの処理を書いている場所
// 対象物に関しての割り振りはprops.name(呼び出すときはthis.props.name)で行っている 例:看板なら"signboard"

// 現在の状況　-------------------------------
// 駐車場:　　１
// 玄関:　　　３
// 看板前:　　３
// ２階:　　　０
// １年教室:　０
// ２年教室:　０
// 多目的室:　０
// ------------------------------------------

import React from "react";
import { Animated, NativeModules, View } from "react-360";

export class SelectableAnim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAnimX: new Animated.Value(0), //選択可能場所の値X
      selectAnimY: new Animated.Value(100), //選択可能場所の値Y
      selectedOpacity: new Animated.Value(0), //選択時の範囲のアニメーションの値
    };
  }

  _selectableLocation() {
    //ページ内の選択可能な場所を分かりやすくするアニメーション XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    Animated.sequence([
      Animated.timing(this.state.selectAnimX, {
        toValue: 100,
        duration: 1000,
      }),

      Animated.timing(this.state.selectAnimY, {
        toValue: 0,
        duration: 1000,
      }),

      Animated.timing(this.state.selectAnimX, {
        toValue: 0,
        duration: 1000,
      }),

      Animated.timing(this.state.selectAnimY, {
        toValue: 100,
        duration: 1000,
      }),
    ]).start(this._selectableLocation.bind(this));
  }

  //   _selectedLocation() {
  //     //選択時の選択可能範囲のアニメーション(opacity) XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //     Animated.sequence([
  //       Animated.timing(this.state.selectedOpacity, {
  //         toValue: 30,
  //         duration: 3000,
  //       }),

  //       Animated.timing(this.state.selectedOpacity, {
  //         toValue: 0,
  //         duration: 3000,
  //       }),
  //     ]).start();
  //   }
  componentDidMount() {
    this._selectableLocation();
  }

  render() {
    const { Hovercontents } = NativeModules;
    // //選択時の選択可能範囲のopacityの値変換
    // let SelectedOpacityValue = this.state.selectedOpacity.interpolate({
    //   inputRange: [0, 30],
    //   outputRange: [0, 0.3],
    // });

    if (this.props.name === "signboard") {
      //あまじょう看板前　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //あまじょう看板前の「看板」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-70, 160],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 140],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 5 },
              { height: 5 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: -200 },
                ],
              },
            ]}
          />
          <Animated.View
            style={[
              { backgroundColor: "white" },
              //   { opacity: SelectedOpacityValue },
              { opacity: 0 },
              { width: 230 },
              { height: 40 },
              {
                transform: [
                  { translateX: -70 },
                  { translateY: 140 },
                  { translateZ: -200 },
                ],
              },
            ]}
            onEnter={async () => {
              Hovercontents.OnhoverSignboard1();
              //   this._selectedLocation();
            }}
          />
        </View>
      );
    } else if (this.props.name === "narrowRoad") {
      //あまじょう看板前の「狭い道」のアニメーションの値
      let SelectableValueZ = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-60, 210],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [-116, 0],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: 500 },
                  { translateY: SelectableValueY },
                  { translateZ: SelectableValueZ },
                  { rotateY: 70 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "white" },
              { opacity: 0 },
              { width: 400 },
              { height: 150 },
              {
                transform: [
                  { translateX: 500 },
                  { translateY: 0 },
                  { translateZ: 80 },
                  { rotateY: 60 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSignboard2();
            }}
          />
        </View>
      );
    } else if (this.props.name === "parkingPath") {
      //あまじょう看板前の「駐車場への道」のアニメーションの値
      let SelectableValueZ = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-100, 0],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [250, 350],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: -800 },
                  { translateY: SelectableValueY },
                  { translateZ: SelectableValueZ },
                  { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "white" },
              { opacity: 0 },
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: -800 },
                  { translateY: 350 },
                  { translateZ: -50 },
                  { rotateY: 90 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSignboard3();
            }}
          />
        </View>
      );
    } else if (this.props.name === "parkingPlace") {
      //駐車場　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //駐車場の「駐車場」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-150, 600],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [-75, 75],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 10 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: -600 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "white" },
              { opacity: 0 },
              { width: 750 },
              { height: 150 },
              {
                transform: [
                  { translateX: -150 },
                  { translateY: 75 },
                  { translateZ: -600 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverParkingplace1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "vendingMachine") {
      //玄関　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

      //玄関の「自販機」のアニメーションの値
      let SelectableValueZ = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [90, 410],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [170, 450],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: -400 },
                  { translateY: SelectableValueY },
                  { translateZ: SelectableValueZ },
                  { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "white" },
              { opacity: 0 },
              { width: 230 },
              { height: 200 },
              {
                transform: [
                  { translateX: -400 },
                  { translateY: 400 },
                  { translateZ: 180 },
                  { rotateY: 70 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverEntrance1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "shoeBox") {
      //玄関の「靴箱」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-120, -60],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [320, 420],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: 580 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "white" },
              { opacity: 0 },
              { width: 60 },
              { height: 100 },
              {
                transform: [
                  { translateX: -120 },
                  { translateY: 420 },
                  { translateZ: 580 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverEntrance2();
            }}
          />
        </View>
      );
    } else if (this.props.name === "handWashFacilities") {
      //玄関の「手洗い場」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 280],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [420, 530],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: 580 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 180 },
              { height: 100 },
              {
                transform: [
                  { translateX: 100 },
                  { translateY: 530 },
                  { translateZ: 580 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverEntrance3();
            }}
          />
        </View>
      );
    } else if (this.props.name === "xmas") {
      //多目的室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //多目的室の「クリスマス会」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-680, -300],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [-20, 200],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "white" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: -200 },
                  { rotateY: 50 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0.7 },
              { width: 300 },
              { height: 220 },
              {
                transform: [
                  { translateX: -680 },
                  { translateY: 200 },
                  { translateZ: -200 },
                  // { rotateY: 50 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverMultipurpose1();
            }}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}
