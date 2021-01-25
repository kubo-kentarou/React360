// ハンバーガーメニューを作成しています。

const nButton = document.getElementById("nav-button");
const nav = document.getElementById("nav");

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
document.addEventListener("mousemove", (e) => {
  if (e.pageX <= 30) {
    nav.classList.add("on");
    particles.resumeAnimation();
    document.addEventListener("mousemove", (e) => {
      if (e.pageX > 450) {
        nav.classList.remove("on");
        particles.pauseAnimation();
        return;
      }
    });
  }
});

nav.addEventListener("mouseenter", (e) => {
  progress(mountTime.SIGNBOARD, signboardVal);
  progress(mountTime.PARKINGPLACE, parkingVal);
  progress(mountTime.ENTRANCE, entranceVal);
  progress(mountTime.SECONDFLOOR, secondFloorVal);
  progress(mountTime.FIRSTGRADE, firstGradeVal);
  progress(mountTime.SECONDGRADE, secondGradeVal);
  progress(mountTime.MULTIPURPOSE, multipurposeVal);
});
