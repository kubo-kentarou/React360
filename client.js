// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance, Surface } from "react-360-web";
import SetOverlay from "./Native";
import Hovercontents from "./Hovercontents";
import Testnative from "./Testnative";
import {
  KeyboardCameraController,
  ArrowRotation,
} from "./KeyboardCameraController";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      (ctx) => new SetOverlay(ctx),
      (ctx) => new Hovercontents(ctx),
      (ctx) => new Testnative(ctx),
      (ctx) => new ArrowRotation(ctx),
    ],
    ...options,
  });

  const test = 1;

  // r360._cameraPosition = [0, 0, 0]; //[x, y, z], default list [0, 0, 0]
  r360.controls.addCameraController(new KeyboardCameraController());
  console.log("position", r360._cameraPosition);

  console.log("bundle:", bundle);
  console.log("parent", parent);
  console.log("options", options);
  console.log("r360", r360);

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot("Hello360", {
      /* initial props */
    }),
    r360.getDefaultLocation()
    // testPanel2
  );
  // r360.renderToLocation(
  //   r360.createRoot("App", {
  //     /* initial props */
  //   }),
  //   r360.getDefaultLocation()
  // );

  // Load the initial environment
  r360.compositor.setBackground("./static_assets/img/R0010008.JPG");
  // r360.controls.clearRaycasters();
  // r360.controls.addRaycaster(SimpleRaycaster);

  //矢印の表示
  r360.renderToLocation(
    r360.createRoot("Arrow", {}),
    r360.getDefaultLocation(),
    // new Location([0,-30,-200])
  );

  //お試し
  // const location = new Location([0, -1, -2]);
  // r360.renderToLocation(
  //   r360.createRoot('iPhone'),
  //   location,
  // )
  // r360.renderToLocation(r360.createRoot("Arrow"), new Location([0,-30,-200]));
  // const location = new Location([0, -3, -8]);
  // r360.renderToSurface(
  //   r360.createRoot('Model'),
  //   r360.getDefaultSurface()
  // );
}

window.React360 = { init };
