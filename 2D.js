import React from "react";
import { onclick } from "./Button";

const OverlayScreen = () => (
  <div className="inner" onClick={onclick}>
    <p className="text">あまじょう看板前へ</p>
  </div>
);

// const onclickSignboard = () => {
//   alert("aaaaaaaa");
// };
//onClickを外部へ持っていき、Arrow内のgoTo~をimportできるようにしたい

export default OverlayScreen;
