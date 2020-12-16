import React from "react";
import ReactDOM from "react-dom";
import OverlayScreen from "./2D";
import { Module } from "react-360-web";

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

  testcallback(id) {
    this._ctx.invokeCallback(id, 1);
  }
}
