// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
<<<<<<< HEAD
import { Environment, compositor, asset, getAssetURL } from "react-360";
=======
import SetOverlay from "./Native";
>>>>>>> 9ac0b49d2135129a96bc9f35948cb83cf65a5789

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    // nativeModules: [ctx => new SetOverlay(ctx)],
    ...options
  });

<<<<<<< HEAD
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("react_360_hello", {
      /* initial props */
    }),
    r360.getDefaultSurface()
=======
  r360._cameraPosition = [0, 500, 100]; //[x, y, z], default ist [0, 0, 0]
  console.log("bundle:", bundle);
  console.log("parent", parent);
  console.log("options", options);

  testPanel2 = new Surface(2000, 2000, Surface.SurfaceShape.Surface);
  testPanel2.setAngle(0, 0);

  testPanel1 = new Surface(1500, 1500, Surface.SurfaceShape.Flat);
  testPanel1.setAngle(0, 0);

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
>>>>>>> 9ac0b49d2135129a96bc9f35948cb83cf65a5789
  );

  r360.compositor.setBackground(r360.getAssetURL("chess-world.jpg"));

  // const player = r360.compositor.createVideoPlayer("myplayer");

  // player.setSource("/static_assets/R0010004.mp4", "2D");

  // r360.compositor.setBackgroundVideo("myplayer");
  // player.setLoop(true);
  // player.play();
}

window.React360 = { init };
