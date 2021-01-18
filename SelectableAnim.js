// ページ内の選択可能な場所を分かりやすくするアニメーションの処理を書いている場所
// 対象物に関しての割り振りはprops.name(呼び出すときはthis.props.name)で行っている 例:看板なら"signboard"

//1ページ　３つくらいほしい

// 現在の状況　-------------------------------
// 駐車場:　　１
// 玄関:　　　３
// 看板前:　　３
// ２階:　　　０
// １年教室:　０
// ２年教室:　０
// 多目的室:　１　　クリスマス会要修正
// ------------------------------------------

import React from "react";
import { Animated, NativeModules, View } from "react-360";

export class SelectableAnim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAnimX: new Animated.Value(0), //選択可能場所の値X
      selectAnimY: new Animated.Value(100), //選択可能場所の値Y
      selectAnimXa: new Animated.Value(100), //別の選択可能場所の値X
      selectAnimYa: new Animated.Value(0), //別の選択可能場所の値Y
      selectedOpacity: new Animated.Value(0), //選択時の範囲のアニメーションの値
    };
  }

  _selectableLocation() {
    //ページ内の選択可能な場所を分かりやすくするアニメーション XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    Animated.parallel([
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
      ]),
      //同時に動くと気持ち悪いのでもう一つ
      Animated.sequence([
        Animated.timing(this.state.selectAnimXa, {
          toValue: 0,
          duration: 1000,
        }),

        Animated.timing(this.state.selectAnimYa, {
          toValue: 100,
          duration: 1000,
        }),

        Animated.timing(this.state.selectAnimXa, {
          toValue: 100,
          duration: 1000,
        }),

        Animated.timing(this.state.selectAnimYa, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ]).start(this._selectableLocation.bind(this));
  }

  componentDidMount() {
    this._selectableLocation();
  }

  render() {
    const { Hovercontents } = NativeModules;

    if (this.props.name === "signboard") {
      //あまじょう看板前　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //あまじょう看板前の「看板」のアニメーションの値
      let SelectableValueX = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [-70, 160],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [500, 545],
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
              { backgroundColor: "green" },
              { opacity: 0 },
              { width: 230 },
              { height: 40 },
              {
                transform: [
                  { translateX: -70 },
                  { translateY: 545 },
                  { translateZ: -200 },
                ],
              },
            ]}
            onEnter={async () => {
              Hovercontents.OnhoverSignboard1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "narrowRoad") {
      //あまじょう看板前の「狭い道」のアニメーションの値
      let SelectableValueZ = this.state.selectAnimX.interpolate({
        inputRange: [0, 100],
        outputRange: [120, 220],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [300, 400],
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
                  { translateX: 600 },
                  { translateY: SelectableValueY },
                  { translateZ: SelectableValueZ },
                  { rotateY: 70 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "green" },
              { opacity: 0 },
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: 600 },
                  { translateY: 400 },
                  { translateZ: 180 },
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
        outputRange: [0, -100],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [600, 700],
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
              { backgroundColor: "green" },
              { opacity: 0 },
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: -800 },
                  { translateY: 700 },
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
        outputRange: [-175, 625],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [325, 525],
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
              { backgroundColor: "green" },
              { opacity: 0 },
              { width: 750 },
              { height: 150 },
              {
                transform: [
                  { translateX: -150 },
                  { translateY: 500 },
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
        outputRange: [-500, -350],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [300, 420],
      });

      return (
        <View style={{ transform: [{ rotateY: 60 }] }}>
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
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: -400 },
                  { translateY: 400 },
                  { translateZ: -400 },
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
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [700, 950],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [200, 300],
      });

      return (
        <View style={{ transform: [{ rotateY: -80 }, { rotateZ: 2 }] }}>
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
                  { translateZ: 400 },
                  { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 250 },
              { height: 100 },
              {
                transform: [
                  { translateX: 700 },
                  { translateY: 290 },
                  { translateZ: 400 },
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
        outputRange: [-590, -250],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [330, 480],
      });

      return (
        <View style={{ transform: [{ rotateY: 88 }] }}>
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
                  { translateZ: 0 },
                  { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 370 },
              { height: 150 },
              {
                transform: [
                  { translateX: -590 }, //ここがz
                  { translateY: 480 }, //ここがy
                  { translateZ: 0 }, //ここがx
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
        outputRange: [-150, -50],
      });
      let SelectableValueY = this.state.selectAnimY.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 200],
      });

      return (
        <View style={{ transform: [{ rotateY: 55 }] }}>
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
                  { translateZ: -500 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: -150 },
                  { translateY: 200 },
                  { translateZ: -500 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverMultipurpose1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "bench") {
      // 2階　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //2階の「ベンチ」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [-200, 0],
      });
      let SelectableValueZ = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [-550, -800],
      });

      return (
        <View style={{ transform: [{ rotateY: 60 }] }}>
          <Animated.View
            style={[
              { backgroundColor: "black" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: 200 },
                  { translateZ: SelectableValueZ },
                  // { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 200 },
              { height: 200 },
              {
                transform: [
                  { translateX: -200 },
                  { translateY: 290 },
                  { translateZ: -700 },
                  { rotateX: -80 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSecondfloor1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "disinfection") {
      //2階の「消毒液」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [105, 205],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [680, 790],
      });

      return (
        <View style={{ transform: [{ rotateY: 60 }] }}>
          <Animated.View
            style={[
              { backgroundColor: "black" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: 300 },
                  // { rotateY: 90 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 100 },
              { height: 110 },
              {
                transform: [
                  { translateX: 105 },
                  { translateY: 790 },
                  { translateZ: 300 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSecondfloor2();
            }}
          />
        </View>
      );
    } else if (this.props.name === "stove") {
      // 1年教室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //1年教室の「ストーブ」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [-58, 17],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [105, 180],
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
                  { translateZ: -600 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 75 },
              { height: 75 },
              {
                transform: [
                  { translateX: -58 },
                  { translateY: 180 },
                  { translateZ: -600 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverFirstgrade1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "poster") {
      // 2年教室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      //2年教室の「あまじょうポスター」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [-138, -20],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [15, 180],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "black" },
              { width: 5 },
              { height: 5 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: 200 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 118 },
              { height: 165 },
              {
                transform: [
                  { translateX: -138 },
                  { translateY: 180 },
                  { translateZ: 200 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSecondgrade1();
            }}
          />
        </View>
      );
    } else if (this.props.name === "darts") {
      //2年教室の「ダーツ」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [410, 510],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "black" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: -700 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 100 },
              { height: 100 },
              {
                transform: [
                  { translateX: 0 },
                  { translateY: 510 },
                  { translateZ: -700 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSecondgrade2();
            }}
          />
        </View>
      );
    } else if (this.props.name === "monitor") {
      //2年教室の「モニター」のアニメーションの値
      let SelectableValueX = this.state.selectAnimXa.interpolate({
        inputRange: [0, 100],
        outputRange: [-420, -300],
      });
      let SelectableValueY = this.state.selectAnimYa.interpolate({
        inputRange: [0, 100],
        outputRange: [410, 510],
      });

      return (
        <View>
          <Animated.View
            style={[
              { backgroundColor: "black" },
              { width: 8 },
              { height: 8 },
              { borderRadius: 50 },
              {
                transform: [
                  { translateX: SelectableValueX },
                  { translateY: SelectableValueY },
                  { translateZ: -700 },
                ],
              },
            ]}
          />
          <View
            style={[
              { backgroundColor: "blue" },
              { opacity: 0 },
              { width: 120 },
              { height: 100 },
              {
                transform: [
                  { translateX: -420 },
                  { translateY: 510 },
                  { translateZ: -700 },
                ],
              },
            ]}
            onEnter={() => {
              Hovercontents.OnhoverSecondgrade3();
            }}
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }
}
