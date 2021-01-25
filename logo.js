//ロゴを降らせる処理を記述しています
const button = document.getElementById("logoButton");
console.log(button);
let bool = true;
let logof;

//コンテナを指定
const container = document.querySelector(".logo-container");

//logoを生成する関数
const createLogo = (logoClass, minSizeVal, maxSizeVal) => {
  const logoEl = document.createElement("span");
  logoEl.className = `logo ${logoClass}`;
  const minSize = minSizeVal;
  const maxSize = maxSizeVal;
  const size = Math.random() * (maxSize + 1 - minSize) + minSize;
  logoEl.style.width = `${size}px`;
  logoEl.style.height = `${size}px`;
  logoEl.style.left = Math.random() * 100 + "%";
  container.appendChild(logoEl);

  //一定時間経てばロゴを消す　8秒後に削除
  setTimeout(() => {
    logoEl.remove();
  }, 8000);
};

button.addEventListener("click", function () {
  if (bool === true) {
    bool = false;
    button.textContent = "満足したので消す";
    logof = setInterval(createLogo.bind(this, "logo-1", 10, 50), 500);
  } else {
    bool = true;
    clearInterval(logof);
    button.textContent = "ロゴを降らせる";
  }
});
