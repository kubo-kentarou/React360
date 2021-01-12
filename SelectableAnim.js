// ページ内の選択可能な場所を分かりやすくするアニメーションの処理を書いている場所
// 対象物に関しての割り振りはprops.name(呼び出すときはthis.props.name)で行っている 例:看板なら"signboard"

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
          <View
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
    } else {
      return null;
    }
  }
}
