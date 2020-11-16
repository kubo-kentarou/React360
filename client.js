// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance, Surface } from "react-360-web";
// import { Module } from "react-360-web";
import SetOverlay from "./Native";

// export default class MyModule extends Module {
//   constructor(ctx) {
//     super("MyModule");
//     this._ctx = ctx;
//   }
// }

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    // nativeModules: [ctx => new SetOverlay(ctx)],
    nativeModules: [new SetOverlay()],
    ...options
  });

  r360._cameraPosition = [0, 0, 0]; //[x, y, z], default list [0, 0, 0]
  console.log("bundle:", bundle);
  console.log("parent", parent);
  console.log("options", options);

  testPanel1 = new Surface(100, 100, Surface.SurfaceShape.Surface);
  testPanel1.setAngle(-Math.PI / 2, 0); // 左に90度

  testPanel2 = new Surface(100, 100, Surface.SurfaceShape.Surface);
  testPanel2.setAngle(Math.PI / 2, 0); // 右に90度

  // r360.renderToLocation(
  //   r360.createRoot("Test", {
  //     /* initial props */
  //   }),
  //   // testPanel1
  //   r360.getDefaultLocation()
  // );

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot("Hello360", {
      /* initial props */
    }),
    r360.getDefaultLocation()
    // testPanel2
  );
  r360.renderToLocation(
    r360.createRoot("App", {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot("Arrow", {
      back: "blue",
      position: [
        { translateX: 800 },
        { translateY: -100 },
        { translateZ: -300 },
        { rotateY: -30 }
      ]
    }),
    r360.getDefaultLocation()
    // testPanel1
  );

  r360.renderToLocation(
    r360.createRoot("Arrow", {
      back: "green",
      position: [
        { translateX: -800 },
        { translateY: 0 },
        { translateZ: -100 },
        { rotateY: 90 }
      ]
    }),
    r360.getDefaultLocation()
    // testPanel2
  );

  // Load the initial environment
  r360.compositor.setBackground("./static_assets/img/R0010008.JPG");
}

window.React360 = { init };
