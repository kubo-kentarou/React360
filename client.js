// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
import { Environment, compositor, asset, getAssetURL } from "react-360";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("react_360_hello", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  r360.compositor.setBackground(r360.getAssetURL("chess-world.jpg"));

  // const player = r360.compositor.createVideoPlayer("myplayer");

  // player.setSource("/static_assets/R0010004.mp4", "2D");

  // r360.compositor.setBackgroundVideo("myplayer");
  // player.setLoop(true);
  // player.play();
}

window.React360 = { init };
