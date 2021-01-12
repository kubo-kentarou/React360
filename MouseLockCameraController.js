/**
 * Martin <i@martinpham.com>
 */

const DEFAULT_FOV = Math.PI / 6;
const HALF_PI = Math.PI / 2;

export default class MouseLockCameraController {
  _deltaPitch = 0;
  _deltaYaw = 0;
  _verticalFov = 0;
  _isPointerLocked = false;
  _frame = null;

  constructor(frame, fov = DEFAULT_FOV) {
    this._frame = frame;
    this._verticalFov = fov;

    document.addEventListener("pointerlockchange", (event) =>
      this._onPointerLockChange(event)
    );
    document.addEventListener("mousemove", (event) => this._onMouseMove(event));

    window.addEventListener(
      "message",
      (event) => {
        if (event.data.type === "MOUSE_LOCK_CAMERA_CONTROLLER_MESSAGE") {
          if (event.data.lock === true) {
            this._frame.requestPointerLock();
          } else if (event.data.lock === false) {
            document.exitPointerLock();
          }
        }
      },
      false
    );
  }

  _onPointerLockChange = (event) => {
    if (document.pointerLockElement === this._frame) {
      this._isPointerLocked = true;
    } else {
      this._isPointerLocked = false;
    }
  };

  _onMouseMove = (event) => {
    if (!this._isPointerLocked) {
      return;
    }
    const width = this._frame.clientWidth;
    const height = this._frame.clientHeight;
    const aspect = width / height;
    const deltaX = -(
      event.movementX ||
      event.mozMovementX ||
      event.webkitMovementX ||
      0
    );
    const deltaY = -(
      event.movementY ||
      event.mozMovementY ||
      event.webkitMovementY ||
      0
    );

    this._deltaPitch += (deltaX / width) * this._verticalFov * aspect;
    this._deltaYaw += (deltaY / height) * this._verticalFov;
    this._deltaYaw = Math.max(-HALF_PI, Math.min(HALF_PI, this._deltaYaw));
  };

  fillCameraProperties(positionArray, rotationArray) {
    // from facebook mouse-pan-controller
    if (this._deltaPitch === 0 && this._deltaYaw === 0) {
      return false;
    }

    // premultiply the camera rotation by the horizontal (pitch) rotation,
    // then multiply by the vertical (yaw) rotation

    const cp = Math.cos(this._deltaPitch / 2);
    const sp = Math.sin(this._deltaPitch / 2);
    const cy = Math.cos(this._deltaYaw / 2);
    const sy = Math.sin(this._deltaYaw / 2);

    const x1 = rotationArray[0];
    const y1 = rotationArray[1];
    const z1 = rotationArray[2];
    const w1 = rotationArray[3];

    const x2 = cp * x1 + sp * z1;
    const y2 = cp * y1 + sp * w1;
    const z2 = cp * z1 - sp * x1;
    const w2 = cp * w1 - sp * y1;

    const x3 = w2 * sy + x2 * cy;
    const y3 = y2 * cy + z2 * sy;
    const z3 = -y2 * sy + z2 * cy;
    const w3 = w2 * cy - x2 * sy;

    rotationArray[0] = x3;
    rotationArray[1] = y3;
    rotationArray[2] = z3;
    rotationArray[3] = w3;

    this._deltaPitch = 0;
    this._deltaYaw = 0;

    return true;
  }
}
