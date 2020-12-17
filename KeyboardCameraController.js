/**
 * Martin <i@martinpham.com>
 */

import { Vector3, Quaternion } from "three";

const SPEED = 0.2;
const MOVING_DISTANCE = 100;
const JUMP_HEIGHT = 30;

class ObjectNotation {
  position = null;
  quaternion = null;

  constructor(position, quaternion) {
    this.position = position;
    this.quaternion = quaternion;
  }

  translateOnAxis = (axis, distance) => {
    const v1 = new Vector3();

    v1.copy(axis).applyQuaternion(this.quaternion);

    this.position.add(v1.multiplyScalar(distance));
  };

  translateX = (distance) => {
    this.translateOnAxis(new Vector3(1, 0, 0), distance);
  };
  translateY = (distance) => {
    this.translateOnAxis(new Vector3(0, 1, 0), distance);
  };
  translateZ = (distance) => {
    this.translateOnAxis(new Vector3(0, 0, 1), distance);
  };
}

export default class KeyboardCameraController {
  _movingZ = 0;
  _movingX = 0;
  _movingY = 0;
  //   _rotateX = 0;

  constructor() {
    document.addEventListener("keydown", (event) => this._onKeyDown(event));
    // document.addEventListener('up', (event) => this._onKeyUp(event));

    window.addEventListener(
      "message",
      (event) => {
        if (event.data.type === "KEYBOARD_CAMERA_CONTROLLER_MESSAGE") {
          if (event.data.direction === "UP") {
            this._moveForward();
          } else if (event.data.direction === "DOWN") {
            this._moveBackward();
          } else if (event.data.direction === "LEFT") {
            this._moveLeft();
          } else if (event.data.direction === "RIGHT") {
            this._moveRight();
          } else if (event.data.direction === "SPACE") {
            this._jump();
          }

          //   else if (event.data.direction === "ENTER") {
          //     this._rotate();
          //   }
        }
      },
      false
    );
  }

  _moveForward = () => {
    this._movingZ = -SPEED;
  };

  _moveBackward = () => {
    this._movingZ = SPEED;
  };

  _moveLeft = () => {
    this._movingX = -SPEED;
  };

  _moveRight = () => {
    this._movingX = SPEED;
  };

  _jump = () => {
    this._movingY = SPEED;
  };

  //   _rotate = () => {
  //     this._rotateX = SPEED;
  //     console.log("clicked!!");
  //   };

  // _onKeyDown = (event) => {
  // }w

  _onKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 87) {//↑　W　前に進む
      this._moveForward();
    } else if (event.keyCode === 40 || event.keyCode === 83) {//↓　S　後ろに進む
      this._moveBackward();
    } else if (event.keyCode === 37 || event.keyCode === 65) {//←　A　左へ動く
      this._moveLeft();
    } else if (event.keyCode === 39 || event.keyCode === 68) {//→　D　右へ動く
      this._moveRight();
    } else if (event.keyCode === 32) {//Space
      this._jump();
    }

    else if (event.keyCode === 13) {//Enter
      // this._rotate();
      console.log("aaaaaas")
    }
  };

  fillCameraProperties(positionArray, rotationArray) {
    if (this._movingZ === 0 && this._movingX === 0 && this._movingY === 0) {
      return false;
    }

    const quaternion = new Quaternion(
      rotationArray[0],
      rotationArray[1],
      rotationArray[2],
      rotationArray[3]
    );
    const position = new Vector3(
      positionArray[0],
      positionArray[1],
      positionArray[2]
    );

    const cameraObjectNotation = new ObjectNotation(position, quaternion);
    console.log(cameraObjectNotation);

    if (this._movingZ !== 0) {
      cameraObjectNotation.translateZ(this._movingZ);

      this._movingZ += this._movingZ;
      if (Math.abs(this._movingZ) >= MOVING_DISTANCE) {
        this._movingZ = 0;
      }

      positionArray[0] = cameraObjectNotation.position.x;
      // positionArray[1] = cameraObjectNotation.position.y; // i don't want to fly
      positionArray[2] = cameraObjectNotation.position.z;
    }

    if (this._movingX !== 0) {
      cameraObjectNotation.translateX(this._movingX);

      this._movingX += this._movingX;
      if (Math.abs(this._movingX) >= MOVING_DISTANCE) {
        this._movingX = 0;
      }

      positionArray[0] = cameraObjectNotation.position.x;
      // positionArray[1] = cameraObjectNotation.position.y; // i don't want to fly
      positionArray[2] = cameraObjectNotation.position.z;
    }

    if (this._movingY !== 0) {
      cameraObjectNotation.translateY(this._movingY);

      this._movingY += this._movingY;
      if (Math.abs(this._movingY) >= JUMP_HEIGHT) {
        this._movingY = -SPEED;
      }

      positionArray[1] = cameraObjectNotation.position.y; // i just want to fly

      if (positionArray[1] < 0) {
        // i don't want go to hell

        this._movingY = 0;
        positionArray[1] = 0;
      }
    }

    // if (this._rotateX !== 0) {
    //   cameraObjectNotation.rotateX(this._rotateX);

    //   this._rotateX += this._rotateX;
    //   if (Math.abs(this._rotateX) >= JUMP_HEIGHT) {
    //     this._rotateX = -SPEED;
    //   }

    //   rotationArray[0] = cameraObjectNotation.quaternion.x; // i just want to fly

    //   if (rotationArray[0] < 0) {
    //     // i don't want go to hell

    //     this._rotateX = 0;
    //     rotationArray[0] = 0;
    //   }
    // }

    return true;
  }
}
