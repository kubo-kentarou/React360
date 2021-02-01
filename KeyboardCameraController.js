/**
 * Martin <i@martinpham.com>
 */

import { Vector3, Quaternion } from "three";
import { Module } from "react-360-web";

const SPEED = 0.2; //defaultは0.2
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
    console.log(distance);
    // console.log("quaternion is", this.quaternion);
    const v1 = new Vector3();
    v1.copy(axis).applyQuaternion(this.quaternion); //axisは直訳で「軸」 applyQuaternionって何？
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

// 方向転換用のネイティブモジュール
export class ArrowRotation extends Module {
  constructor(ctx) {
    super("ArrowRotation");
    this._ctx = ctx;
  }
  moveSignboard() {
    window.key._moveSignboard();
  }
  moveParkingplace() {
    window.key._moveParkingplace();
  }
  moveEntrance() {
    window.key._moveEntrance();
  }
  moveMultipurpose() {
    window.key._moveMultipurpose();
  }
  moveSecondfloor() {
    window.key._moveSecondfloor();
  }
  moveFirstgrade() {
    window.key._moveFirstgrade();
  }
  moveSecondgrade() {
    window.key._moveSecondgrade();
  }
}

export class KeyboardCameraController {
  _movingZ = 0;
  _movingX = 0;
  _movingY = 0;
  rotateX = 0;
  _movingY;

  _signboard = false;
  _parkingPlace = false;
  _entrance = false;
  _multiPurpose = false;
  _secondFloor = false;
  _firstGrade = false;
  _secondGrade = false;

  constructor() {
    window.key = this;
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
          } else if (event.data.direction === "ENTER") {
            this._rotate();
          }
        }
      },
      false
    );
  }

  // 場所移動のbooleanの処理

  _moveSignboard = () => {
    this._signboard = true;
  };
  _moveParkingplace = () => {
    this._parkingPlace = true;
  };
  _moveEntrance = () => {
    this._entrance = true;
  };
  _moveMultipurpose = () => {
    this._multiPurpose = true;
  };
  _moveSecondfloor = () => {
    this._secondFloor = true;
  };
  _moveFirstgrade = () => {
    this._firstGrade = true;
  };
  _moveSecondgrade = () => {
    this._secondGrade = true;
  };

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

  rotate = () => {
    this.rotateX = SPEED;
  };

  // _onKeyDown = (event) => {
  // }w

  _onKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 87) {
      //↑　W　前に進む
      this._moveForward();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      //↓　S　後ろに進む
      this._moveBackward();
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      //←　A　左へ動く
      this._moveLeft();
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      //→　D　右へ動く
      this._moveRight();
    } else if (event.keyCode === 32) {
      //Space
      this._jump();
    } else if (event.keyCode === 13) {
      this.rotate();
    }
  };

  fillCameraProperties(positionArray, rotationArray) {
    if (
      this._movingZ === 0 &&
      this._movingX === 0 &&
      this._movingY === 0 &&
      this.rotateX === 0 &&
      this._signboard === false &&
      this._parkingPlace === false &&
      this._entrance === false &&
      this._multiPurpose === false &&
      this._secondFloor === false &&
      this._firstGrade === false &&
      this._secondGrade === false
    ) {
      return false;
    }

    console.log("positionArray", positionArray, "rotationArray", rotationArray);
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

    // console.log(cameraObjectNotation);

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

    // あまじょう看板前に行った場合の向きの処理
    if (this._signboard === true) {
      rotationArray[0] = 0;
      rotationArray[1] = 0;
      rotationArray[2] = 0;
      rotationArray[3] = 1;
      this._signboard = false;
    }
    // 駐車場に行った場合の向きの処理
    if (this._parkingPlace === true) {
      rotationArray[0] = 0.005396443024124119;
      rotationArray[1] = -0.1192896732162943;
      rotationArray[2] = 0.000648379327831898;
      rotationArray[3] = 0.9928446161766151;
      this._parkingPlace = false;
    }
    // 玄関に行った場合の向きの処理
    if (this._entrance === true) {
      rotationArray[0] = -0.06040720195756299;
      rotationArray[1] = 0.6898516437304428;
      rotationArray[2] = 0.05795064112068326;
      rotationArray[3] = 0.71909484964625;
      this._entrance = false;
    }
    // 多目的室に行った場合の向きの処理
    if (this._multiPurpose === true) {
      rotationArray[0] = -0.014601607740753262;
      rotationArray[1] = 0.1365437243719079;
      rotationArray[2] = 0.0020128307161174815;
      rotationArray[3] = 0.9905243827885082;
      this._multiPurpose = false;
    }

    // 2階に行った場合の向きの処理
    if (this._secondFloor === true) {
      rotationArray[0] = 0.010164122904309686;
      rotationArray[1] = -0.1802285338123278;
      rotationArray[2] = -0.0018624643560562005;
      rotationArray[3] = -0.9835704842216063;
      this._secondFloor = false;
    }

    // 1年教室に行った場合の向きの処理
    if (this._firstGrade === true) {
      rotationArray[0] = 0.056440387851072985;
      rotationArray[1] = 0.13839930751305574;
      rotationArray[2] = 0.007900304329436931;
      rotationArray[3] = -0.9887354041858621;
      this._firstGrade = false;
    }

    // 2年教室に行った場合の向きの処理
    if (this._secondGrade === true) {
      rotationArray[0] = 0.008303955862903322;
      rotationArray[1] = -0.12008953512883601;
      rotationArray[2] = -0.001004523266126908;
      rotationArray[3] = -0.9927278271523;
      this._secondGrade = false;
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

    //ここからテスト
    if (this.rotateX !== 0) {
      // cameraObjectNotation.rotateX(this.rotateX);

      this.rotateX += this.rotateX;
      if (Math.abs(this.rotateX) >= MOVING_DISTANCE) {
        this.rotateX = 0;
      }
      // console.log("this is x", cameraObjectNotation.quaternion.x);

      // rotationArray[0] = -0.042966148030426546;
      // rotationArray[1] = 0.6145552205386361;
      // rotationArray[2] = 0.03355206420278277;
      // rotationArray[3] = 0.7869879605304428;

      rotationArray[0] = -0.04537065406775056;
      rotationArray[1] = -0.12987968791050647;
      rotationArray[2] = -0.005949404531739549;
      rotationArray[3] = 0.990473308576988;
    }

    return true;
  }
}

// export class impTest extends KeyboardCameraController {
//   constructor() {
//     console.log("This is extends");
//   }
// }
