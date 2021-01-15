import React from "react";
import ReactDOM from "react-dom";
import { Module } from "react-360-web";

const OverlayScreen = () => (
  // <div className="inner">
  //   <p className="text">あまじょう看板前へ</p>
  // </div>
  <div id="Test">テストテキスト</div>
);

const renderOverlay = () => {
  const elm = document.getElementById("overlay");
  ReactDOM.render(<OverlayScreen />, elm);
};

export default class SetOverlay extends Module {
  constructor(ctx) {
    super("SetOverlay");
    renderOverlay();
    this._ctx = ctx;
  }
}
