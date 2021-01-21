window.onload = function () {
  let load = document.getElementById("load");
  load.classList.add("loader");
  // alert(
  //   "このWEBサイトは詳細説明の場所に目の前の看板のような白い球、\nまたは黒い球が周りを動いています。ぜひ探してみてください。"
  // );

  setTimeout("stopload()", 1000);
};

function stopload() {
  let load = document.getElementById("load");
  load.classList.remove("loader");
}
