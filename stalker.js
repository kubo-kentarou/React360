//マウスストーカ―の処理。動かすときはindex.htmlのid="stalker"を解放するように

// const stalker = document.getElementById("stalker");

// document.addEventListener("mousemove", function (e) {
//   stalker.style.transform =
//     "translate(" + e.clientX + "px, " + e.clientY + "px)";
// });

/*座標の取得*/

// var testXY = function () {
//   var hover = document.getElementById("");
//   var ele = document.getElementById("stalker");
//   var bounds = ele.getBoundingClientRect();
//   var x = window.pageXOffset + bounds.left;
//   var y = window.pageYOffset + bounds.top;
//   console.log("Testパネルの座標　X:" + x + "　　 Y: " + y);
// if (x <= 650 && y <= 300) {
//   //左上
//   ele.style.background = "red";
// } else if (x <= 650 && y >= 300) {
//   //左下
//   ele.style.background = "blue";
// } else if (x > 650 && y <= 300) {
//   //右上
//   ele.style.background = "yellow";
// } else {
//   //右下
//   ele.style.background = "white";
// }
// };
// setInterval(testXY, 1000);

// window.addEventListener("load", init);
// function init() {
//   const width = 1300;
//   const height = 600;

//   console.log(width, height);

//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector("#container"),
//   });
//   renderer.setSize(width, height);
// }

// window.addEventListener("DOMContentLoaded", init);

// function init() {
//   const width = screen.width;
//   const height = screen.height;

//   // レンダラーを作成
//   const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector("#myCanvas"),
//   });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(width, height);

//   // シーンを作成
//   const scene = new THREE.Scene();

//   // カメラを作成
//   const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
//   camera.position.set(0, 0, 1000);
//   camera.rotation.y = 3;

//   // 箱を作成
//   const geometry = new THREE.BoxGeometry(500, 500, 500);
//   const material = new THREE.MeshStandardMaterial({
//     color: 0x0000ff,
//   });
//   const box = new THREE.Mesh(geometry, material);
//   scene.add(box);

//   // 平行光源
//   const light = new THREE.DirectionalLight(0xffffff);
//   light.intensity = 2; // 光の強さを倍に
//   light.position.set(1, 1, 1);
//   // シーンに追加
//   scene.add(light);

//   // 初回実行
//   tick();

//   function tick() {
//     requestAnimationFrame(tick);

//     // 箱を回転させる
//     box.rotation.y += 0.01;
//     // box.rotation.y += 0.01;
//     // camera.rotation.y -= 0.01;

//     // レンダリング
//     renderer.render(scene, camera);
//   }
// }
