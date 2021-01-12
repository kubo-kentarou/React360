// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance, Surface } from "react-360-web";
import SetOverlay from "./Native";
import Hovercontents from "./Hovercontents";
import { KeyboardCameraController } from "./KeyboardCameraController";

// export const impTest = (value) => { //clientとArrowの橋渡し
//   console.log("hello360");
//   console.log("value is", value);
//   impValue = value;
//   console.log("impValue is", impValue);
// };

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      (ctx) => new SetOverlay(ctx),
      (ctx) => new Hovercontents(ctx),
    ],
    ...options,
  });

  const test = 1;

  // r360._cameraPosition = [0, 0, 0]; //[x, y, z], default list [0, 0, 0]
  // if (impValue === 3) {
  //   r360._cameraQuat = [
  //     -0.04537065406775056,
  //     -0.12987968791050647,
  //     -0.005949404531739549,
  //     0.990473308576988,
  //   ];
  // }

  r360.controls.addCameraController(new KeyboardCameraController());

  console.log("position", r360._cameraPosition);

  console.log("bundle:", bundle);
  console.log("parent", parent);
  console.log("options", options);
  console.log("r360", r360);

  // console.log("最後のマウス位置", r360.controls.raycasters[1]);
  // console.log("rotation", r360.compositor_environment.panoMeshQuat);

  // testPanel1 = new Surface(100, 100, Surface.SurfaceShape.Surface);
  // testPanel1.setAngle(-Math.PI / 2, 0); // 左に90度

  // testPanel2 = new Surface(100, 100, Surface.SurfaceShape.Surface);
  // testPanel2.setAngle(Math.PI / 2, 0); // 右に90度

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

  //矢印の表示
  r360.renderToLocation(
    r360.createRoot("Arrow", {}),
    r360.getDefaultLocation()
  );
}

window.React360 = { init };
