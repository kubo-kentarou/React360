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
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import SpotLight from "SpotLight";
import PointLight from "PointLight";
// import LinearGradient from "react-native-linear-gradient";
// import { KeyboardCameraController } from "./KeyboardCameraController";
import { SelectableAnim } from "./SelectableAnim";

import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import lodash from "lodash";

// 矢印のコンポーネント
const imgUrl = {
  //背景画像を配列に格納
  Entrance: "img/R0010006.JPG", //玄関
  Signboard: "img/R0010008.JPG", //あまじょう看板前
  Parkingplace: "img/R0010009.JPG", //駐車場
  Multipurpose: "img/R0010013.JPG", //多目的室
  Secondfloor: "img/R0010012.JPG", //2階
  Firstgrade: "img/R0010010.JPG", //1年教室
  Secondgrade: "img/R0010015.JPG", //2年教室

  Videoplay: "/static_assets/R0010004.mp4", //ビデオ再生中
};

const arrowImg = {
  //矢印の画像、行先の名前画像のURL
  url: "./static_assets/img/yazirushi_up1.png", //↑の画像
  parkingUrl: "./static_assets/img/parking.png",
  entranceUrl: "./static_assets/img/genkan.png",
  signboardUrl: "./static_assets/img/kanban.png",
  _1f_roukaUrl: "./static_assets/img/1f_rouka.png",
  _2fUrl: "./static_assets/img/2f.png",
  firstUrl: "./static_assets/img/kyousitu1.png",
  secondUrl: "./static_assets/img/kyousitu2.png",
  multiUrl: "./static_assets/img/tamokuteki.png",
};

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

const { ArrowRotation } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export class Arrow extends React.Component {
  constructor(props) {
    super(props);
    (this.onBrowserEvent = this.onBrowserEvent.bind(this)),
      (this.state = {
        // pageType: imgUrl.Signboard,
        // pageType: imgUrl.Parkingplace,
        // pageType: imgUrl.Entrance,
        // pageType: imgUrl.Secondfloor,
        // pageType: imgUrl.Firstgrade,
        pageType: imgUrl.Secondgrade,
        // pageType: imgUrl.Multipurpose,

        opacityName: new Animated.Value(1000), //1000は透明を示している
        translateName: new Animated.Value(0),
        rotation: new Animated.Value(0),
        hoverStatus: true,
        identifi: 1000, //1000は透明を示している
        dropShift: false, //ドロップダウンリストの表示非表示
        time: {}, //ドロップダウンリストのタイマー処理を記述する(clearTimeoutのため)
        commentaryGame: false, //解説探しゲームをするかどうかのstate
        solution: false, //解説探しゲームの点を透明化するかのboolean
      });
    this.goToSecondgrade();
  }

  componentWillMount() {
    this.unsubscribe = browserBridge.subscribe(this.onBrowserEvent);
  }

  onBrowserEvent(name, event) {
    // Do action on event here
    console.log("name", name, "event", event);
    if (
      name === "signboard" ||
      name === "o-signboard" ||
      name === "signboardVal"
    ) {
      this.goToSignboard();
    } else if (
      name === "parkingPlace" ||
      name === "o-parkingplace" ||
      name === "parkingVal"
    ) {
      this.goToParking();
    } else if (
      name === "entrance" ||
      name === "o-entrance" ||
      name === "entranceVal"
    ) {
      this.goToEntrance();
    } else if (
      name === "secondFloor" ||
      name === "o-secondfloor" ||
      name === "secondFloorVal"
    ) {
      this.goToSecondfloor();
    } else if (
      name === "firstGrade" ||
      name === "o-firstgrade" ||
      name === "firstGradeVal"
    ) {
      this.goToFirstgrade();
    } else if (
      name === "secondGrade" ||
      name === "o-secondgrade" ||
      name === "secondGradeVal"
    ) {
      this.goToSecondgrade();
    } else if (
      name === "multiPurpose" ||
      name === "o-multipurpose" ||
      name === "multipurposeVal"
    ) {
      this.goToMultipurpose();
    }

    if (name === "commentaryGame") {
      if (this.state.commentaryGame === false) {
        this.setState({ commentaryGame: true });
      } else {
        this.setState({ commentaryGame: false });
        this.setState({ solution: false });
      }
      // console.log(this.state.commentaryGame);
    }
    if (name === "solution") {
      if (this.state.solution === false) {
        this.setState({ solution: true });
        console.log(this.state.solution);
      } else {
        this.setState({ solution: false });
        console.log(this.state.solution);
      }
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
      delete this.unsubscribe;
    }
  }

  //矢印クリック時の処理 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  goToParking = () => {
    //駐車場へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Parkingplace)); //背景画像を変えている処理
    this.setState({ pageType: imgUrl.Parkingplace }); //矢印の配置セットを変更している処理
    ArrowRotation.moveParkingplace(); //移動後のカメラの向きを指定している処理
  };
  goToEntrance = () => {
    //玄関へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Entrance));
    this.setState({ pageType: imgUrl.Entrance });
    ArrowRotation.moveEntrance();
  };
  goToSignboard = () => {
    //あまじょう看板前へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Signboard));
    this.setState({ pageType: imgUrl.Signboard });
    ArrowRotation.moveSignboard();
  };

  goToMultipurpose = () => {
    //多目的室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Multipurpose));
    this.setState({ pageType: imgUrl.Multipurpose });
    ArrowRotation.moveMultipurpose();
  };

  goToSecondfloor = () => {
    //2階へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Secondfloor));
    this.setState({ pageType: imgUrl.Secondfloor });
    ArrowRotation.moveSecondfloor();
  };

  goToFirstgrade = () => {
    //1年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Firstgrade));
    this.setState({ pageType: imgUrl.Firstgrade });
    ArrowRotation.moveFirstgrade();
  };

  goToSecondgrade = () => {
    //2年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Secondgrade));
    this.setState({ pageType: imgUrl.Secondgrade });
    ArrowRotation.moveSecondgrade();
  };

  //矢印の名前表示のアニメーション XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  _hoverName() {
    this.state.opacityName.setValue(0);
    this.state.translateName.setValue(0);

    if (this.state.hoverStatus == true) {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(this.state.opacityName, {
            toValue: 100,
            duration: 1000,
          }),

          Animated.timing(this.state.opacityName, {
            toValue: 0,
            duration: 1000,
          }),
        ]),

        Animated.sequence([
          Animated.timing(this.state.translateName, {
            toValue: 100,
            duration: 1000,
          }),

          Animated.timing(this.state.translateName, {
            toValue: 0,
            duration: 1000,
          }),
        ]),
      ]).start(this._hoverName.bind(this));
    } else {
      this.state.opacityName.setValue(1000); //透明化
    }
  }

  async _enterArrow() {
    //enter時の処理
    await this.setState({ hoverStatus: true });
    this._hoverName(); //アニメーション呼び出し
  }
  async _exitArrow() {
    //exit時の処理
    await this.setState({ hoverStatus: false });
    this._hoverName(); //アニメーション(ifによる透明化)呼び出し
  }

  async dropList() {
    //ドロップダウンリストの表示非表示 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    await this.setState({ dropShift: true });
    // console.log(this.state.dropShift);
    this.setState({
      time: setTimeout(() => {
        this.setState({ dropShift: false });
        // console.log(this.state.dropShift);
      }, 3000),
    });
  }
  goToVideoplay = () => {
    //ビデオ再生時に表示される(二年教室)
    this.setState({ pageType: imgUrl.Videoplay });
    this.VideoFunction();
  };
  //Video
  VideoFunction = () => {
    this.setState({ pageType: imgUrl.Videoplay });
    const { VideoModule } = NativeModules;
    VideoModule.createPlayer("Myplayer"); //ビデオプレイヤーを作る
    VideoModule.play("Myplayer", {
      source: { url: "/static_assets/R0010004.mp4" },
      loop: false,
      muted: true,
    });
    Environment.setBackgroundVideo("Myplayer"); //背景をビデオに変える
    this.setState({ trans: 1 });
    setTimeout(() => {
      VideoModule.destroyPlayer("Myplayer"); //ビデオプレイヤーを削除する
      Environment.setBackgroundImage(asset(imgUrl.Secondgrade)); //背景を任意の画像に戻す
      this.setState({ pageType: imgUrl.Secondgrade });
      // this.goToEntrance();
      this.setState({ Trans: 1 });
      console.log("プレイヤー破棄");
    }, 19000); //19000

    //開店アニメーション
    // Animated.timing(this.rotation,{toValue:360, duration:6000}).start();
  };
  _rotation() {
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {
      toValue: 360,
      duration: 6000,
    }).start(this._rotation.bind(this));
  }

  componentDidMount() {
    this._rotation();
  }

  render() {
    let opacityValue = this.state.opacityName.interpolate({
      inputRange: [0, 50, 100, 1000], //1000は透明を示している
      outputRange: [0.3, 0.6, 1, 0], //透明度0.3, 0.6, 1, 0を示す
    });
    let translateValue = this.state.translateName.interpolate({
      inputRange: [0, 100],
      outputRange: [150, 200], //translateYを150から200まで動かす
    });

    let rValue = this.state.rotation.interpolate({
      inputRange: [0, 360],
      outputRange: [0, 360],
    });

    if (this.state.pageType === imgUrl.Signboard) {
      //ページの種類があまじょう看板前の時 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <View>
            <VrButton
              style={[styles.signboard1, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToParking();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 1 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
            {this.state.identifi == 1 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: -700 },
                      { translateY: translateValue },
                      { translateZ: -60 },
                      { rotateY: 80 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.parkingUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg.parkingUrl }}
              />
            )}
          </View>
          <View style={{ transform: [{ translateY: 180 }] }}>
            <VrButton
              style={[styles.signboard2, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToEntrance();
              }}
              onEnter={() => {
                this.setState({ identifi: 2 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>

            {this.state.identifi == 2 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: 450 },
                      { translateY: translateValue },
                      { translateZ: -160 },
                      { rotateY: -70 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.entranceUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg.entranceUrl }}
              />
            )}
          </View>
          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="signboard" condition="transparent" />
                <SelectableAnim name="narrowRoad" condition="transparent" />
                <SelectableAnim name="parkingPath" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="signboard" />
                <SelectableAnim name="narrowRoad" />
                <SelectableAnim name="parkingPath" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="signboard" noGame="true" />
              <SelectableAnim name="narrowRoad" noGame="true" />
              <SelectableAnim name="parkingPath" noGame="true" />
            </View>
          )}
        </View>
      );
    } else if (this.state.pageType === imgUrl.Parkingplace) {
      //ページの種類が駐車場の時 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <VrButton
            style={[styles.parkingplace1, { width: 100 }]}
            onClick={() => {
              this.setState({ identifi: 1000 });
              this.goToEntrance();
            }}
            onEnter={async () => {
              await this.setState({ identifi: 1 });
              console.log(this.state.identifi);
              this._enterArrow();
            }}
            onExit={() => {
              this.setState({ identifi: 1000 });
              this._exitArrow();
            }}
          >
            <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
          </VrButton>
          {this.state.identifi == 1 ? (
            <Animated.Image
              style={[
                styles.arrowName,
                { opacity: opacityValue },
                {
                  transform: [
                    { translateX: 400 },
                    { translateY: translateValue },
                    { translateZ: 320 },
                    { rotateY: -120 },
                  ],
                },
              ]}
              source={{ uri: arrowImg.entranceUrl }}
            />
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg.entranceUrl }}
            />
          )}

          <View style={{ transform: [{ translateY: 190 }] }}>
            <VrButton
              style={[styles.parkingplace2, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToSignboard();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 2 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
            {this.state.identifi == 2 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: 120 },
                      { translateY: translateValue },
                      { translateZ: 440 },
                      { rotateY: -150 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.signboardUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg.signboardUrl }}
              />
            )}
          </View>
          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="parkingPlace" condition="transparent" />
                <SelectableAnim name="reflected" condition="transparent" />
                <SelectableAnim name="building" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="parkingPlace" />
                <SelectableAnim name="reflected" />
                <SelectableAnim name="building" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="parkingPlace" noGame="true" />
              <SelectableAnim name="reflected" noGame="true" />
              <SelectableAnim name="building" noGame="true" />
            </View>
          )}
        </View>
      );
    } else if (this.state.pageType === imgUrl.Entrance) {
      //ページの種類が玄関だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <VrButton
            style={[styles.entrance1, { width: 100 }]}
            onClick={() => {
              this.setState({ identifi: 1000 });
              this.goToSignboard();
            }}
            onEnter={async () => {
              await this.setState({ identifi: 1 });
              console.log(this.state.identifi);
              this._enterArrow();
            }}
            onExit={() => {
              this.setState({ identifi: 1000 });
              this._exitArrow();
            }}
          >
            <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
          </VrButton>
          {this.state.identifi == 1 ? (
            <Animated.Image
              style={[
                styles.arrowName,
                { opacity: opacityValue },
                {
                  transform: [
                    { translateX: 400 },
                    { translateY: translateValue },
                    { translateZ: -270 },
                    { rotateY: -60 },
                  ],
                },
              ]}
              source={{ uri: arrowImg.signboardUrl }}
            />
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg.signboardUrl }}
            />
          )}

          <View style={{ transform: [{ translateY: 200 }] }}>
            <VrButton
              style={[styles.entrance2, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToParking();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 2 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
            {this.state.identifi == 2 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: 450 },
                      { translateY: translateValue },
                      { translateZ: 110 },
                      { rotateY: -110 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.parkingUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg.parkingUrl }}
              />
            )}
          </View>

          <View style={{ transform: [{ translateY: 350 }] }}>
            <VrButton
              style={[styles.entrance3, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToMultipurpose();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 3 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
            {this.state.identifi == 3 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: -100 },
                      { translateY: translateValue },
                      { translateZ: 600 },
                      { rotateY: 180 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.multiUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg.multiUrl }}
              />
            )}
          </View>

          <View style={{ transform: [{ translateY: 550 }] }}>
            <VrButton
              style={[styles.entrance4, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToSecondfloor();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 4 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
            {this.state.identifi == 4 ? (
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: -500 },
                      { translateY: translateValue },
                      { translateZ: -100 },
                      { rotateY: 60 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg._2fUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg._2fUrl }}
              />
            )}

            {this.state.commentaryGame == true ? (
              this.state.solution == true ? (
                <View>
                  <SelectableAnim
                    name="vendingMachine"
                    condition="transparent"
                  />
                  <SelectableAnim name="shoeBox" condition="transparent" />
                  <SelectableAnim
                    name="handWashFacilities"
                    condition="transparent"
                  />
                </View>
              ) : (
                <View>
                  <SelectableAnim name="vendingMachine" />
                  <SelectableAnim name="shoeBox" />
                  <SelectableAnim name="handWashFacilities" />
                </View>
              )
            ) : (
              <View>
                <SelectableAnim name="vendingMachine" noGame="true" />
                <SelectableAnim name="shoeBox" noGame="true" />
                <SelectableAnim name="handWashFacilities" noGame="true" />
              </View>
            )}
          </View>
        </View>
      );
    } else if (this.state.pageType === imgUrl.Secondfloor) {
      //ページの種類が2階だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <VrButton
            style={[styles.secondfloor1, { width: 100 }]}
            onClick={() => {
              this.setState({ identifi: 1000 });
              this.goToEntrance();
            }}
            onEnter={async () => {
              await this.setState({ identifi: 1 });
              console.log(this.state.identifi);
              this._enterArrow();
            }}
            onExit={() => {
              this.setState({ identifi: 1000 });
              this._exitArrow();
            }}
          >
            <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
          </VrButton>
          {this.state.identifi == 1 ? (
            <View style={{ transform: [{ translateY: -100 }] }}>
              <Animated.Image
                style={[
                  styles.arrowName,
                  { opacity: opacityValue },
                  {
                    transform: [
                      { translateX: 300 },
                      { translateY: translateValue },
                      { translateZ: -60 },
                      { rotateY: -80 },
                    ],
                  },
                ]}
                source={{ uri: arrowImg.entranceUrl }}
              />
            </View>
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg.entranceUrl }}
            />
          )}

          <View style={{ transform: [{ translateY: 190 }] }}>
            <VrButton
              style={[styles.secondfloor2, { width: 100 }]}
              onEnter={() => {
                this.setState({ identifi: 2 });
                console.log(this.state.identifi);
                this._enterArrow();
                this.dropList();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>

            {this.state.dropShift === true ? (
              <View>
                <VrButton
                  onClick={() => {
                    this.goToFirstgrade();
                  }}
                  onEnter={() => {
                    clearTimeout(this.state.time);
                  }}
                  onExit={() => {
                    this.dropList();
                  }}
                >
                  <Image
                    style={[
                      { width: 150 },
                      { height: 100 },
                      { backgroundColor: "black" },
                      {
                        transform: [
                          { translateX: -350 },
                          { translateY: 250 },
                          { translateZ: -500 },
                          { rotateY: 50 },
                        ],
                      },
                    ]}
                    source={{ uri: arrowImg.firstUrl }}
                  />
                </VrButton>
                <VrButton
                  onClick={() => {
                    this.goToSecondgrade();
                  }}
                  onEnter={() => {
                    clearTimeout(this.state.time);
                  }}
                  onExit={() => {
                    this.dropList();
                  }}
                >
                  <Image
                    style={[
                      { width: 150 },
                      { height: 100 },
                      { backgroundColor: "black" },
                      {
                        transform: [
                          { translateX: -350 },
                          { translateY: 250 },
                          { translateZ: -500 },
                          { rotateY: 50 },
                        ],
                      },
                    ]}
                    source={{ uri: arrowImg.secondUrl }}
                  />
                </VrButton>
              </View>
            ) : (
              <View>
                <Image
                  style={[
                    { opacity: 0 },
                    { width: 150 },
                    { height: 100 },
                    { backgroundColor: "black" },
                    {
                      transform: [
                        { translateX: -350 },
                        { translateY: 250 },
                        { translateZ: -500 },
                        { rotateY: 50 },
                      ],
                    },
                  ]}
                  source={{ uri: arrowImg.firstUrl }}
                />
                <Image
                  style={[
                    { opacity: 0 },
                    { width: 150 },
                    { height: 100 },
                    { backgroundColor: "black" },
                    {
                      transform: [
                        { translateX: -350 },
                        { translateY: 250 },
                        { translateZ: -500 },
                        { rotateY: 50 },
                      ],
                    },
                  ]}
                  source={{ uri: arrowImg.secondUrl }}
                />
              </View>
            )}
          </View>
          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="bench" condition="transparent" />
                <SelectableAnim name="disinfection" condition="transparent" />
                <SelectableAnim name="typhoon" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="bench" />
                <SelectableAnim name="disinfection" />
                <SelectableAnim name="typhoon" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="bench" noGame="true" />
              <SelectableAnim name="disinfection" noGame="true" />
              <SelectableAnim name="typhoon" noGame="true" />
            </View>
          )}
        </View>
      );
    } else if (this.state.pageType === imgUrl.Firstgrade) {
      // ページの種類が1年教室の時 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <View style={{ transform: [{ translateY: 20 }] }}>
            <VrButton
              style={[styles.firstgrade1, { width: 100 }]}
              onClick={() => {
                this.setState({ identifi: 1000 });
                this.goToSecondfloor();
              }}
              onEnter={async () => {
                await this.setState({ identifi: 1 });
                console.log(this.state.identifi);
                this._enterArrow();
              }}
              onExit={() => {
                this.setState({ identifi: 1000 });
                this._exitArrow();
              }}
            >
              <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
            </VrButton>
          </View>
          {this.state.identifi == 1 ? (
            <Animated.Image
              style={[
                styles.arrowName,
                { opacity: opacityValue },
                {
                  transform: [
                    { translateX: -500 },
                    { translateY: translateValue },
                    { translateZ: 0 },
                    { rotateY: 90 },
                  ],
                },
              ]}
              source={{ uri: arrowImg._2fUrl }}
            />
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg._2fUrl }}
            />
          )}
          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="stove" condition="transparent" />
                <SelectableAnim name="solderingIron" condition="transparent" />
                <SelectableAnim name="screen" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="stove" />
                <SelectableAnim name="solderingIron" />
                <SelectableAnim name="screen" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="stove" noGame="true" />
              <SelectableAnim name="solderingIron" noGame="true" />
              <SelectableAnim name="screen" noGame="true" />
            </View>
          )}
        </View>
      );
    } else if (this.state.pageType === imgUrl.Secondgrade) {
      // ページの種類が2年教室だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <VrButton
            style={[styles.VrPlay_button, { opacity: this.state.Trans }]}
            onClick={async () => {
              this.setState({ Trans: 0 });
              this.goToVideoplay();
            }}
          >
            <Image
              style={styles.play_button}
              source={{ uri: "./static_assets/img/movie_start.png" }}
            />
          </VrButton>

          <VrButton
            style={[styles.secondgrade1, { width: 100 }]}
            onClick={() => {
              this.setState({ identifi: 1000 });
              this.goToSecondfloor();
            }}
            onEnter={async () => {
              await this.setState({ identifi: 1 });
              console.log(this.state.identifi);
              this._enterArrow();
            }}
            onExit={() => {
              this.setState({ identifi: 1000 });
              this._exitArrow();
            }}
          >
            <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
          </VrButton>
          {this.state.identifi == 1 ? (
            <Animated.Image
              style={[
                styles.arrowName,
                { opacity: opacityValue },
                {
                  transform: [
                    { translateX: 350 },
                    { translateY: translateValue },
                    { translateZ: 15 },
                    { rotateY: -90 },
                  ],
                },
              ]}
              source={{ uri: arrowImg._2fUrl }}
            />
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg._2fUrl }}
            />
          )}
          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="poster" condition="transparent" />
                <SelectableAnim name="darts" condition="transparent" />
                <SelectableAnim name="monitor" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="poster" />
                <SelectableAnim name="darts" />
                <SelectableAnim name="monitor" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="poster" noGame="true" />
              <SelectableAnim name="darts" noGame="true" />
              <SelectableAnim name="monitor" noGame="true" />
            </View>
          )}

          <AmbientLight intensity={1.0} color={"#ffffff"} />
          <PointLight
            intensity={2}
            style={{ transform: [{ translate: [10, 30, 3] }] }}
          />
          <AnimatedEntity
            style={{
              transform: [
                { scale: [10, 10, 10] },
                { rotateX: 0 },
                { rotateY: 0 },
                { rotateZ: rValue },
                { translate: [70, -32, -50] },
              ],
            }}
            lit={true}
            source={{ gltf2: asset("Amazon_danbo4.glb") }}
          />
        </View>
      );
    } else if (this.state.pageType === imgUrl.Multipurpose) {
      // ページの種類が多目的室だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          <VrButton
            style={[styles.multipurpose1, { width: 100 }]}
            onClick={() => {
              this.setState({ identifi: 1000 });
              this.goToEntrance();
            }}
            onEnter={async () => {
              await this.setState({ identifi: 1 });
              console.log(this.state.identifi);
              this._enterArrow();
            }}
            onExit={() => {
              this.setState({ identifi: 1000 });
              this._exitArrow();
            }}
          >
            <Image style={styles.arrowPanel} source={{ uri: arrowImg.url }} />
          </VrButton>
          {this.state.identifi == 1 ? (
            <Animated.Image
              style={[
                styles.arrowName,
                { opacity: opacityValue },
                {
                  transform: [
                    { translateX: -400 },
                    { translateY: translateValue },
                    { translateZ: 180 },
                    { rotateY: 142 },
                  ],
                },
              ]}
              source={{ uri: arrowImg.entranceUrl }}
            />
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg.entranceUrl }}
            ></Image>
          )}

          {this.state.commentaryGame == true ? (
            this.state.solution == true ? (
              <View>
                <SelectableAnim name="xmas" condition="transparent" />
                <SelectableAnim name="equipment" condition="transparent" />
                <SelectableAnim name="microwave" condition="transparent" />
              </View>
            ) : (
              <View>
                <SelectableAnim name="xmas" />
                <SelectableAnim name="equipment" />
                <SelectableAnim name="microwave" />
              </View>
            )
          ) : (
            <View>
              <SelectableAnim name="xmas" noGame="true" />
              <SelectableAnim name="equipment" noGame="true" />
              <SelectableAnim name="microwave" noGame="true" />
            </View>
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  arrowPanel: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  arrowName: {
    width: 200,
    height: 100,
  },
  font: {
    fontSize: 20,
    color: "red",
  },
  // signboard1: {
  //   //あまじょう看板前の矢印1
  //   transform: [
  //     { translateX: -500 },
  //     { translateY: -100 },
  //     { translateZ: -50 },
  //     { rotateY: 90 },
  //     { rotateX: -70 },
  //   ],
  // },
  signboard1: {
    //あまじょう看板前の矢印1
    transform: [
      { translateX: -700 },
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
      { translateY: -100 },
      { translateZ: 270 },
      { rotateY: -140 },
      { rotateX: -70 },
    ],
  },
  parkingplace2: {
    //駐車場の矢印2
    transform: [
      { translateX: 150 },
      { translateY: -130 },
      { translateZ: 400 },
      { rotateY: -140 },
      { rotateX: -70 },
      { rotateZ: -10 },
    ],
  },
  entrance1: {
    //玄関の矢印1
    transform: [
      { translateX: 300 },
      { translateY: -100 },
      { translateZ: -200 },
      { rotateY: -40 },
      { rotateX: -70 },
      { rotateZ: -20 },
    ],
  },
  entrance2: {
    //玄関の矢印2
    transform: [
      { translateX: 300 },
      { translateY: -100 },
      { translateZ: 60 },
      { rotateY: -90 },
      { rotateX: -75 },
      { rotateZ: -15 },
    ],
  },
  entrance3: {
    //玄関の矢印3
    transform: [
      { translateX: -50 },
      { translateY: -50 },
      { translateZ: 400 },
      { rotateY: 180 },
      { rotateX: -70 },
    ],
  },
  entrance4: {
    //玄関の矢印4
    transform: [
      { translateX: -450 },
      { translateY: -100 },
      { translateZ: -100 },
      { rotateY: 90 },
      { rotateX: -70 },
      { rotateZ: -15 },
    ],
  },
  secondfloor1: {
    //2階の矢印1
    transform: [
      { translateX: 300 },
      { translateY: -200 },
      { translateZ: -60 },
      { rotateY: 40 },
      { rotateX: 100 },
      { rotateZ: -18 },
    ],
  },
  secondfloor2: {
    //2階の矢印2
    transform: [
      { translateX: -350 },
      { translateY: -100 },
      { translateZ: -500 },
      { rotateY: 60 },
      { rotateZ: -90 },
    ],
  },
  firstgrade1: {
    transform: [
      { translateX: -400 },
      { translateY: -130 },
      { translateZ: 0 },
      { rotateY: 90 },
      { rotateX: -70 },
      { rotateZ: 5 },
    ],
  },
  secondgrade1: {
    transform: [
      { translateX: 350 },
      { translateY: -100 },
      { rotateY: -90 },
      { rotateX: -70 },
      { rotateZ: -5 },
    ],
  },
  multipurpose1: {
    transform: [
      { translateX: -200 },
      { translateY: -60 },
      { translateZ: 80 },
      { rotateY: 142 },
      { rotateZ: 92 },
    ],
  },
  VrPlay_button: {
    // backgroundColor:"blue",
    width: 45,
    height: 20,

    transform: [{ translateX: -95 }, { translateY: 50 }, { translateZ: 1200 }],
  },
  play_button: {
    // backgroundColor:"red",
    width: 400,
    height: 200,

    transform: [
      { translateX: -400 },
      { translateY: 70 },
      { translateZ: -300 },
      { rotateY: -200 },
    ],
  },
  text_sheet: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "right",
    // opacity : Trans,
    // fontfamily : 'メイリオ',
  },
  buttonContainer: {
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#4C64FF",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
  },
  iphone: {
    transform: [
      { translateX: 0 },
      { translateY: 200 },
      { translateZ: -100 },
      { scaleX: 1 },
      { scaleY: 1 },
      { scaleZ: 1 },
      { rotateX: 90 },
      { rotateY: 90 },
      { rotateZ: 0 },
    ],
    color: "red",
  },
});
