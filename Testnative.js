// import { Module } from "react-360-web";
// import lodash from "lodash";

// const eventToOb = (event) => {
//   const eventOb = {};
//   for (let key in event) {
//     const val = event[key];
//     if (!(lodash.isFunction(val) || lodash.isObject(val))) {
//       eventOb[key] = val;
//     }
//   }
//   return eventOb;
// };

// export default class Testnative extends Module {
//   constructor(ctx, overlayContainer) {
//     super("Testnative");
//     this._rnctx = ctx;
//     this._bridgeName = "BrowserBridge";
//     console.log("HELLO360");
//     overlayContainer();

//     window.onmousewheel = (event) => {
//       this._emit("onmousewheel", event);
//     };
//   }

//   //   onButtonClick() {
//   //     this._emit("nativeButtonClicked", event);
//   //   }

//   _emit(name, event) {
//     if (!this._rnctx) {
//       return;
//     }
//     const eventOb = eventToOb(event);
//     this._rnctx.callFunction(this._bridgeName, "notifyEvent", [name, eventOb]);
//   }
// }
