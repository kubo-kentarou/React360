import { Module } from "react-360-web";
import lodash from "lodash";

const eventToOb = (event) => {
  const eventOb = {};
  for (let key in event) {
    const val = event[key];
    if (!(lodash.isFunction(val) || lodash.isObject(val))) {
      eventOb[key] = val;
    }
  }
  return eventOb;
};

export default class Testnative extends Module {
  constructor(ctx) {
    super("Testnative");
    this._rnctx = ctx;
    this._bridgeName = "BrowserBridge";
    let commentarySwitch = false;

    // emitで名前選別のとき、
    returnEmit = (element, event) => {
      this._emit(element, event);
    };

    // 行先を指定して飛ぶための処理
    let btns = document.querySelectorAll(".answer");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener(
        "click",
        function (event) {
          console.log(event.target.id);
          returnEmit(event.target.id, event);
        },
        false
      );
    }

    // 解説探しゲームを開始
    document.getElementById("commentaryGame").onclick = (e) => {
      if (commentarySwitch === false) {
        alert("ゲーム開始");
        commentarySwitch = true;
        e.target.textContent = "解説探しを止める";
      } else {
        alert("ゲームを一時停止します。");
        commentarySwitch = false;
        e.target.textContent = "解説探しを再開する";
      }
    };
  }

  _emit(name, event) {
    if (!this._rnctx) {
      return;
    }
    const eventOb = eventToOb(event);
    this._rnctx.callFunction(this._bridgeName, "notifyEvent", [name, eventOb]);
  }
}
