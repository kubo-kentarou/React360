// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance, Surface } from "react-360-web";
import SetOverlay from "./Native";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new SetOverlay()],
    ...options,
  });

  r360._cameraPosition = [0, 0, 0]; //[x, y, z], default list [0, 0, 0]
  console.log("bundle:", bundle);
  console.log("parent", parent);
  console.log("options", options);

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
  r360.renderToLocation(
    r360.createRoot("App", {
      /* initial props */
    }),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground("./static_assets/img/R0010008.JPG");

  //矢印の表示
  r360.renderToLocation(
    r360.createRoot("Arrow", {}),
    r360.getDefaultLocation()
  );
}

window.React360 = { init };
