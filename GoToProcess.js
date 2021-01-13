//goToの処理を別コンポーネントとして保存し、nativemoduleから呼び出セル用にする処理（現時点でボツ）

// import React from "react";
// import {
//   AppRegistry,
//   asset,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   VrButton,
//   Animated,
//   Environment,
//   NativeModules,
// } from "react-360";

// const imgUrl = {
//   //背景画像を配列に格納
//   Entrance: "img/R0010006.JPG", //玄関
//   Signboard: "img/R0010008.JPG", //あまじょう看板前
//   Parkingplace: "img/R0010009.JPG", //駐車場
//   Multipurpose: "img/R0010013.JPG", //多目的室
//   Secondfloor: "img/R0010012.JPG", //2階
//   Firstgrade: "img/R0010010.JPG", //1年教室
//   Secondgrade: "img/R0010015.JPG", //2年教室
// };

// export function testFunc() {
//   console.log("成功しました。");
// }
// //矢印クリック時の処理 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// export const goToParking = () => {
//   //駐車場へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Parkingplace));
//   //   this.setState({ pageType: imgUrl.Parkingplace });
//   // const value = [
//   //   -0.04537065406775056,
//   //   -0.12987968791050647,
//   //   -0.005949404531739549,
//   //   0.990473308576988,
//   // ];
//   // KeyboardCameraController.key(value);
// };
// goToEntrance = () => {
//   //玄関へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Entrance));
//   this.setState({ pageType: imgUrl.Entrance });
// };
// goToSignboard = () => {
//   //あまじょう看板前へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Signboard));
//   this.setState({ pageType: imgUrl.Signboard });
// };

// goToMultipurpose = () => {
//   //多目的室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Multipurpose));
//   this.setState({ pageType: imgUrl.Multipurpose });
// };

// goToSecondfloor = () => {
//   //2階へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Secondfloor));
//   this.setState({ pageType: imgUrl.Secondfloor });
// };

// goToFirstgrade = () => {
//   //1年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Firstgrade));
//   this.setState({ pageType: imgUrl.Firstgrade });
// };

// goToSecondgrade = () => {
//   //2年教室へ XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//   Environment.setBackgroundImage(asset(imgUrl.Secondgrade));
//   this.setState({ pageType: imgUrl.Secondgrade });
// };
