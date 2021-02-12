// ハンバーガーメニューを作成しています。

const nButton = document.getElementById("nav-button");
const lnav = document.getElementById("l-nav");
const rnav = document.getElementById("r-nav");

const gamebtn = document.getElementById("commentaryGame");
const answerbtn = document.getElementById("solution");

// ハンバーガーメニューを開くための矢印を取得
const kakkol = document.getElementById("kakko-l");
const kakkor = document.getElementById("kakko-r");

// ホバー時の取扱説明のための取得
const instructions = document.getElementById("Instructions");
const kakkoinstructions = document.getElementById("kakko-Instructions");

// 進捗状況のためdocumentの取得
let signboardVal = document.getElementById("signboardVal");
let parkingVal = document.getElementById("parkingVal");
let entranceVal = document.getElementById("entranceVal");
let secondFloorVal = document.getElementById("secondFloorVal");
let firstGradeVal = document.getElementById("firstGradeVal");
let secondGradeVal = document.getElementById("secondGradeVal");
let multipurposeVal = document.getElementById("multipurposeVal");

// 全体カウント用の変数
let overallCount = 0;

const progress = (obj, val) => {
  let counta = 0;
  for (let place in obj) {
    if (obj[place] === false) {
      counta += 1;
    }
  }
  val.textContent = `${counta} / 3`;
  // if (counta === 3) {
  //   val.previousElementSibling.classList.add("complete");
  //   overallCount += 1;
  //   if (overallCount === 7) {
  //     setTimeout(() => {
  //       alert("おめでとうございます！すべて発見しました。");
  //     }, 1000);
  //   }
  // }
};

// 粒子アニメーション(particles.js)を初期化し、一時停止しておく
let particles = Particles.init({
  selector: ".background",
  maxParticles: 70,
  sizeVariations: 5,
  color: ["#00bbdd", "#404B69", "#DBEDF3"],
  connectParticles: true,
});
particles.pauseAnimation();

// マウスが左に来た時にイベントを発火させたい！

// kakkoinstructions.addEventListener("mouseenter", () => {
//   instructions.textContent =
//     "このメニューは解説探しゲームやロゴを降らせることができます。 使うにはホバーしてください。";
//   setTimeout(() => {
//     instructions.textContent = "";
//   }, 6000);
// });

// 左のメニュー
kakkol.addEventListener("mouseenter", (e) => {
  lnav.classList.add("on"); //クラス追加(開いた状態にする)
  particles.resumeAnimation(); //粒子アニメーション開始
});
document.addEventListener("mousemove", (e) => {
  if (e.pageX > 450) {
    lnav.classList.remove("on"); //クラス削除(menuを閉じる)
    particles.pauseAnimation(); //粒子アニメーション一時停止
  }
});

// 右のメニュー
kakkor.addEventListener("mouseenter", (e) => {
  rnav.classList.add("on");
  // instructions.textContent = "各場所に直接移動できます。";
  // setTimeout(() => {
  //   instructions.textContent = "";
  // }, 3000);
});
document.addEventListener("mousemove", (e) => {
  if (e.pageX <= 885) {
    rnav.classList.remove("on");
    return;
  }
});

// document.addEventListener("mousemove", (e) => {
// if (e.pageX >= 1356) {
//   rnav.classList.add("on");
//   document.addEventListener("mousemove", (e) => {
//     if (e.pageX <= 885) {
//       rnav.classList.remove("on");
//       return;
//     }
//   });
// } else if (e.pageX <= 10) {
//   lnav.classList.add("on");
//   particles.resumeAnimation();
//   document.addEventListener("mousemove", (e) => {
//     if (e.pageX > 450) {
//       lnav.classList.remove("on");
//       particles.pauseAnimation();
//       return;
//     }
//   });
// }
// });

lnav.addEventListener("mouseenter", (e) => {
  progress(mountTime.SIGNBOARD, signboardVal);
  progress(mountTime.PARKINGPLACE, parkingVal);
  progress(mountTime.ENTRANCE, entranceVal);
  progress(mountTime.SECONDFLOOR, secondFloorVal);
  progress(mountTime.FIRSTGRADE, firstGradeVal);
  progress(mountTime.SECONDGRADE, secondGradeVal);
  progress(mountTime.MULTIPURPOSE, multipurposeVal);
});

gamebtn.addEventListener("click", () => {
  // answerbtn.style.display = "block";
  answerbtn.classList.toggle("add");
});
