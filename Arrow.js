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
} from "react-360";

// 矢印のコンポーネント

const imgUrl = {
  //背景画像を配列に格納
  Entrance: "img/R0010006.JPG", //玄関
  Signboard: "img/R0010008.JPG", //あまじょう看板前
  Parkingplace: "img/R0010009.JPG", //駐車場
};

export default class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pageType: imgUrl.Signboard,
      pageType: imgUrl.Entrance,
    };
    Environment.setBackgroundImage(asset(imgUrl.Entrance));
  }

  //矢印クリック時の処理
  goToParking = () => {
    //駐車場へ
    Environment.setBackgroundImage(asset(imgUrl.Parkingplace));
    // pageType = await imgUrl.Parkingplace;
    this.setState({ pageType: imgUrl.Parkingplace });
  };
  goToEntrance = () => {
    //玄関へ
    Environment.setBackgroundImage(asset(imgUrl.Entrance));
    // pageType = await imgUrl.Entrance;
    this.setState({ pageType: imgUrl.Entrance });
  };
  goToSignboard = () => {
    //あまじょう看板前へ
    Environment.setBackgroundImage(asset(imgUrl.Signboard));
    // pageType = await imgUrl.Signboard;
    this.setState({ pageType: imgUrl.Signboard });
  };

  render() {
    if (this.state.pageType === imgUrl.Signboard) {
      //ページの種類があまじょう看板前の時
      console.log("This is Signboard!!");
      return (
        <View>
          <View style={[styles.arrowPanel, styles.signboard1]}>
            <VrButton
              onClick={() => {
                this.goToParking();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
          <View style={[styles.arrowPanel, styles.signboard2]}>
            <VrButton
              onClick={() => {
                this.goToEntrance();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
        </View>
      );
    } else if (this.state.pageType === imgUrl.Parkingplace) {
      //ページの種類が駐車場の時
      return (
        <View>
          <View style={[styles.arrowPanel, styles.parkingplace1]}>
            <VrButton
              onClick={() => {
                this.goToEntrance();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
          <View style={[styles.arrowPanel, styles.parkingplace2]}>
            <VrButton
              onClick={() => {
                this.goToSignboard();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
        </View>
      );
    } else if (this.state.pageType === imgUrl.Entrance) {
      //ページの種類が玄関だったとき
      return (
        <View>
          <View style={[styles.arrowPanel, styles.entrance1]}>
            <VrButton
              onClick={() => {
                this.goToSignboard();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
          <View style={[styles.arrowPanel, styles.entrance2]}>
            <VrButton
              onClick={() => {
                this.goToParking();
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
          <View style={[styles.arrowPanel, styles.entrance3]}>
            <VrButton
              onClick={() => {
                console.log("Ciicked!!!");
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
          <View style={[styles.arrowPanel, styles.entrance4]}>
            <VrButton
              onClick={() => {
                console.log("Ciicked!!!");
              }}
            >
              <Text style={styles.font}>This is arrow position</Text>
            </VrButton>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  arrowPanel: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  font: {
    fontSize: 20,
    color: "red",
  },
  signboard1: {
    //あまじょう看板前の矢印1
    transform: [
      { translateX: -500 },
      { translateY: -100 },
      { translateZ: -50 },
      { rotateY: 90 },
      { rotateX: -70 },
    ],
  },
  signboard2: {
    //あまじょう看板前の矢印2
    transform: [
      { translateX: 450 },
      { translateY: -100 },
      { translateZ: -150 },
      { rotateY: -70 },
      { rotateX: -70 },
    ],
  },
  parkingplace1: {
    //駐車場の矢印1
    transform: [
      { translateX: 400 },
      { translateY: -200 },
      { translateZ: 310 },
      { rotateY: -140 },
      { rotateX: -70 },
    ],
  },
  parkingplace2: {
    //駐車場の矢印2
    transform: [
      { translateX: 120 },
      { translateY: -150 },
      { translateZ: 550 },
      { rotateY: -140 },
      { rotateX: -70 },
      { rotateZ: -10 },
    ],
  },
  entrance1: {
    //玄関の矢印1
    transform: [
      { translateX: 400 },
      { translateY: -200 },
      { translateZ: -250 },
      { rotateY: -40 },
      { rotateX: -70 },
      { rotateZ: -20 },
    ],
  },
  entrance2: {
    //玄関の矢印2
    transform: [
      { translateX: 450 },
      { translateY: -130 },
      { translateZ: 70 },
      { rotateY: -100 },
      { rotateX: -70 },
    ],
  },
  entrance3: {
    //玄関の矢印3
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { translateZ: 600 },
      { rotateY: 180 },
      { rotateX: -70 },
    ],
  },
  entrance4: {
    //玄関の矢印4
    transform: [
      { translateX: -500 },
      { translateY: 100 },
      { translateZ: -100 },
      { rotateY: 90 },
      { rotateX: -80 },
      { rotateZ: -20 },
    ],
  },
});
