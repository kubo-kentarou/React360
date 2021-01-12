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
// import { impTest } from "./client";
// import { impTest } from "./KeyboardCameraController";
// import { impVariable } from "./KeyboardCameraController";
// import { KeyboardCameraController } from "./KeyboardCameraController";
import { SelectableAnim } from "./SelectableAnim";
// import { testFunc, goToParking } from "./GoToProcess";

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

  Videoplay: "ビデオ再生中",
};

const arrowImg = {
  //矢印の画像、行先の名前画像のURL
  url: "./static_assets/img/yazirushi_up1.png",
  parkingUrl: "./static_assets/img/parking.png",
  entranceUrl: "./static_assets/img/genkan.png",
  signboardUrl: "./static_assets/img/kanban.png",
  _1f_roukaUrl: "./static_assets/img/1f_rouka.png",
  _2fUrl: "./static_assets/img/2f.png",
  firstUrl: "./static_assets/img/kyousitu1.png",
  secondUrl: "./static_assets/img/kyousitu2.png",
};


export class Arrow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: imgUrl.Signboard,
      // pageType: imgUrl.Parkingplace,
      // pageType: imgUrl.Entrance,
      opacityName: new Animated.Value(1000), //1000は透明を示している
      translateName: new Animated.Value(0),
      hoverStatus: true,
      identifi: 1000, //1000は透明を示している
      dropShift: false, //ドロップダウンリストの表示非表示
      time: {}, //ドロップダウンリストのタイマー処理を記述する(clearTimeoutのため)
      Trans: 1
    };
  }

  //矢印クリック時の処理 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  goToParking = () => {
    // impTest(3);//clientとArrowの橋渡し
    // impTest(true);

    //駐車場へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Parkingplace));
    this.setState({ pageType: imgUrl.Parkingplace });
    // const value = [
    //   -0.04537065406775056,
    //   -0.12987968791050647,
    //   -0.005949404531739549,
    //   0.990473308576988,
    // ];
    // KeyboardCameraController.key(value);
  };
  goToEntrance = () => {
    //玄関へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Entrance));
    this.setState({ pageType: imgUrl.Entrance });
  };
  goToSignboard = () => {
    //あまじょう看板前へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Signboard));
    this.setState({ pageType: imgUrl.Signboard });
  };
  //Video
  VideoFunction = () =>{
    const { VideoModule } = NativeModules;
    VideoModule.createPlayer("Myplayer"); //ビデオプレイヤーを作る
    VideoModule.play("Myplayer", {
      source: { url: "/static_assets/R0010004.mp4" },
        loop: true,
        muted: true
      });
      Environment.setBackgroundVideo("Myplayer"); //背景をビデオに変える

      setTimeout(() => {
        VideoModule.destroyPlayer("Myplayer"); //ビデオプレイヤーを削除する
        Environment.setBackgroundImage(asset("img/R0010008.JPG")); //背景を任意の画像に戻す
          this.setState({ Trans: 1 });//透明度を戻す
          console.log("プレイヤー破棄");
      }, 19000);
  }
  // //Hide
  // static HideFunction = () =>{
  //   this.setState({Trans : 0});
  //   setTimeout(() => {
  //     this.setState({ Trans: 1 });
  //   }, 19000);
  //   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
  // }

  goToMultipurpose = () => {
    //多目的室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Multipurpose));
    this.setState({ pageType: imgUrl.Multipurpose });
  };

  goToSecondfloor = () => {
    //2階へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Secondfloor));
    this.setState({ pageType: imgUrl.Secondfloor });
  };

  goToFirstgrade = () => {
    //1年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Firstgrade));
    this.setState({ pageType: imgUrl.Firstgrade });
  };

  goToSecondgrade = () => {
    //2年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Environment.setBackgroundImage(asset(imgUrl.Secondgrade));
    this.setState({ pageType: imgUrl.Secondgrade });
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

  render() {
    let opacityValue = this.state.opacityName.interpolate({
      inputRange: [0, 50, 100, 1000], //1000は透明を示している
      outputRange: [0.3, 0.6, 1, 0], //透明度.3, .6, 1を示す
    });
    let translateValue = this.state.translateName.interpolate({
      inputRange: [0, 100],
      outputRange: [150, 200], //translateYを150から200まで動かす
    });

    if (this.state.pageType === imgUrl.Signboard) {
      //ページの種類があまじょう看板前の時 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      return (
        <View>
          {/* <VrButton 
            style={[styles.test_box, {opacity: this.state.Trans}]}
            onClick={() => {
              this.setState({Trans : 0});
              this.VideoFunction();
              exports.HideFunction = () =>{
                this.setState({Trans: 0});
                setTimeout(() => {
                  this.setState({Trans:1});
                },19000);
              }
            }}
          >
            <Text style={styles.text_sheet}>Play!</Text>
          </VrButton> */}
          <SelectableAnim name="signboard" />
          <SelectableAnim name="narrowRoad" />
          <View style={{ transform: [{ translateY: 190 }] }}>
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
          <View style={{ transform: [{ translateY: 190 }] }}>
            <VrButton
              style={[styles.signboard2, { width: 100 , opacity: this.state.Trans}]}
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
                source={{ uri: arrowImg._1f_roukaUrl }}
              />
            ) : (
              <Image
                style={[styles.arrowName, { opacity: 0 }]}
                source={{ uri: arrowImg._1f_roukaUrl }}
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
                source={{ uri: arrowImg.parkingUrl }}
              />
            </View>
          ) : (
            <Image
              style={[styles.arrowName, { opacity: 0 }]}
              source={{ uri: arrowImg.parkingUrl }}
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
                  {/* <Text
                    style={[
                      { color: "red" },
                      { fontSize: 30 },
                      {
                        transform: [
                          { translateX: -350 },
                          { translateY: 250 },
                          { translateZ: -500 },
                          { rotateY: 50 },
                        ],
                      },
                    ]}
                  >
                    THIS IS TEST TEXT
                  </Text> */}
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
        </View>
      );
    } else if (this.state.pageType === imgUrl.Firstgrade) {
      // ページの種類が1年教室の時 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
        </View>
      );
    } else if (this.state.pageType === imgUrl.Secondgrade) {
      // ページの種類が2年教室だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
        </View>
      );
    } else if (this.state.pageType === imgUrl.Multipurpose) {
      // ページの種類が多目的室だったとき XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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
        </View>
      );
    }
  }
}

// export const arrowTest = () => {
//   window.arrowComponent.goToEntrance();
// };

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
});

