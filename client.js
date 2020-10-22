// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  testPanel2 = new Surface(2000, 2000, Surface.SurfaceShape.Cylinder);
  testPanel2.setAngle(0, 0);

  testPanel1 = new Surface(1500, 1500, Surface.SurfaceShape.Flat);
  testPanel1.setAngle(0, 0);

  r360.renderToLocation(
    r360.createRoot("Test", {
      /* initial props */
    }),
    // testPanel1
    r360.getDefaultLocation()
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("Hello360", {
      /* initial props */
    }),
    // r360.getDefaultSurface()
    testPanel2
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("test.jpg"));
}

window.React360 = { init };
