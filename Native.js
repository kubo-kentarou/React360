import React from "react";
import ReactDOM from "react-dom";
import OverlayScreen from "./2D";
import { Module } from "react-360-web";

const renderOverlay = () => {
  ReactDOM.render(<OverlayScreen />, document.getElementById("overlay"));
};

export default class SetOverlay extends Module {
  constructor(ctx) {
    super("SetOverlay");
    renderOverlay();
    this.ctx = ctx;
  }
}
