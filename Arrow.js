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
  Environment
} from "react-360";

// 矢印のコンポーネント

const imgUrl = {
  //背景画像を配列に格納
  Entrance: "img/R0010005.JPG",
  Entrance2: "img/R0010006.JPG",
  Begin: "img/R0010007.JPG",
  Begin2: "img/R0010008.JPG",
  Parkingplace: "img/R0010009.JPG"
};

let back; //　背景の色
let position; //トランスフォームの値

export default class Arrow extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.back);
    this.state = {
      scene: 1
    };
    back = props.back; //背景の色を差別化するテスト
    position = props.position; //トランスフォームを差別化
  }
  onClick = () => {
    if (this.state.scene === 1) {
      this.setState({ scene: 2 });
      Environment.setBackgroundImage(asset(imgUrl.Parkingplace));
    } else {
      console.log(this.state.scene);
      this.setState({ scene: 1 });
      Environment.setBackgroundImage(asset(imgUrl.Entrance));
    }
  };

  render() {
    return (
      <View
        style={[
          styles.arrowPanel,
          { backgroundColor: back },
          { transform: position }
        ]}
      >
        <VrButton onClick={this.onClick}>
          <Text style={styles.font}>This is arrow position</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrowPanel: {
    width: 100,
    height: 100
  },
  font: {
    fontSize: 20,
    color: "red"
  }
});
