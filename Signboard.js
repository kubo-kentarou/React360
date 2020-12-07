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
  NativeModules
} from "react-360";
import Arrow from "./Arrow";

//奄情看板前

export default class Signboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          Trans: 1
        };
    }

    render(){
        console.log("TTTTTTTESTTTTTTTTT")
        const { VideoModule } = NativeModules;
        return (
            <View>
            <VrButton
            style={styles.test_box}
            onClick={async () => {
              VideoModule.createPlayer("Myplayer"); //ビデオプレイヤーを作る
              VideoModule.play("Myplayer", {
                source: { url: "/static_assets/R0010004.mp4" },
                loop: true,
                muted: true
              });
              Environment.setBackgroundVideo("Myplayer"); //背景をビデオに変える
              ({Trans : 0});
            //   Arrow.AAA(0);
  
              setTimeout(() => {
                VideoModule.destroyPlayer("Myplayer"); //ビデオプレイヤーを削除する
                Environment.setBackgroundImage(asset("img/R0010008.JPG")); //背景を任意の画像に戻す
                ({ Trans: 1 });//透明度を戻す
                
                // console.log(num);
  
                console.log("プレイヤー破棄");
              }, 19000);
            }}
          >
            <Text style={styles.text_sheet}>Play!</Text>
          </VrButton>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    text_sheet: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: "right",
        // opacity : Trans,
        // fontfamily : 'メイリオ',
      },
      test_box: {
        width: 60,
        height: 30,
        alignItems: "center",
        // opacity: Trans,

        transform: [
          { translateX: -40 },
          { translateY: -20 },
          { translateZ: -170 },
          { rotateX: -20 }
        ],
        backgroundColor: "black"
      }
})

// module.exports = Signboard;