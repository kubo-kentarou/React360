// 各要素にホバー時にHTMLを#commentaryに描写し、内容を説明するファイル

import React from "react";
import ReactDOM from "react-dom";
import { Module } from "react-360-web";

window.mountTime = {
  //描写したかどうか
  SIGNBOARD: { signboard: true, narrowRoad: true, parkingPath: true },
  PARKINGPLACE: { parkingPlace: true, reflected: true, building: true },
  ENTRANCE: { vendingMachine: true, shoeBox: true, handWashFacilities: true },
  MULTIPURPOSE: { xmas: true, equipment: true, microwave: true },
  SECONDFLOOR: { bench: true, disinfection: true, typhoon: true },
  FIRSTGRADE: { stove: true, solderingIron: true, screen: true },
  SECONDGRADE: { poster: true, darts: true, monitor: true },
};

// class="new"を実際に削除する処理
const removeNew = () => {
  let parent = document.getElementById("commentary");
  let child = parent.firstChild;
  child.classList.remove("new");
};

// マウントをすでにされたかどうかを調べ、されているならclass="new"を削除する
const addNew = (val) => {
  if (val === "signboard" && mountTime.SIGNBOARD.signboard === false) {
    console.log(mountTime.SIGNBOARD);
    removeNew();
  } else if (val === "narrowRoad" && mountTime.SIGNBOARD.narrowRoad === false) {
    removeNew();
  } else if (
    val === "parkingPath" &&
    mountTime.SIGNBOARD.parkingPath === false
  ) {
    removeNew();
  } else if (
    val === "parkingPlace" &&
    mountTime.PARKINGPLACE.parkingPlace === false
  ) {
    removeNew();
  } else if (
    val === "reflected" &&
    mountTime.PARKINGPLACE.reflected === false
  ) {
    removeNew();
  } else if (val === "building" && mountTime.PARKINGPLACE.building === false) {
    removeNew();
  } else if (
    val === "vendingMachine" &&
    mountTime.ENTRANCE.vendingMachine === false
  ) {
    removeNew();
  } else if (val === "shoeBox" && mountTime.ENTRANCE.shoeBox === false) {
    removeNew();
  } else if (
    val === "handWashFacilities" &&
    mountTime.ENTRANCE.handWashFacilities === false
  ) {
    removeNew();
  } else if (val === "xmas" && mountTime.MULTIPURPOSE.xmas === false) {
    removeNew();
  } else if (
    val === "equipment" &&
    mountTime.MULTIPURPOSE.equipment === false
  ) {
    removeNew();
  } else if (
    val === "microwave" &&
    mountTime.MULTIPURPOSE.microwave === false
  ) {
    removeNew();
  } else if (val === "bench" && mountTime.SECONDFLOOR.bench === false) {
    removeNew();
  } else if (
    val === "disinfection" &&
    mountTime.SECONDFLOOR.disinfection === false
  ) {
    removeNew();
  } else if (val === "typhoon" && mountTime.SECONDFLOOR.typhoon === false) {
    removeNew();
  } else if (val === "stove" && mountTime.FIRSTGRADE.stove === false) {
    removeNew();
  } else if (
    val === "solderingIron" &&
    mountTime.FIRSTGRADE.solderingIron === false
  ) {
    removeNew();
  } else if (val === "screen" && mountTime.FIRSTGRADE.screen === false) {
    removeNew();
  } else if (val === "poster" && mountTime.SECONDGRADE.poster === false) {
    removeNew();
  } else if (val === "darts" && mountTime.SECONDGRADE.darts === false) {
    removeNew();
  } else if (val === "monitor" && mountTime.SECONDGRADE.monitor === false) {
    removeNew();
  }
};

// #commentaryを消した時、newを外すための条件を設定する処理
const mounted = (string) => {
  if (string === "signboard") {
    mountTime.SIGNBOARD.signboard = false;
  } else if (string === "narrowRoad") {
    mountTime.SIGNBOARD.narrowRoad = false;
  } else if (string === "parkingPath") {
    mountTime.SIGNBOARD.parkingPath = false;
  } else if (string === "parkingPlace") {
    mountTime.PARKINGPLACE.parkingPlace = false;
  } else if (string === "reflected") {
    mountTime.PARKINGPLACE.reflected = false;
  } else if (string === "building") {
    mountTime.PARKINGPLACE.building = false;
  } else if (string === "vendingMachine") {
    mountTime.ENTRANCE.vendingMachine = false;
  } else if (string === "shoeBox") {
    mountTime.ENTRANCE.shoeBox = false;
  } else if (string === "handWashFacilities") {
    mountTime.ENTRANCE.handWashFacilities = false;
  } else if (string === "xmas") {
    mountTime.MULTIPURPOSE.xmas = false;
  } else if (string === "equipment") {
    mountTime.MULTIPURPOSE.equipment = false;
  } else if (string === "microwave") {
    mountTime.MULTIPURPOSE.microwave = false;
  } else if (string === "bench") {
    mountTime.SECONDFLOOR.bench = false;
  } else if (string === "disinfection") {
    mountTime.SECONDFLOOR.disinfection = false;
  } else if (string === "typhoon") {
    mountTime.SECONDFLOOR.typhoon = false;
  } else if (string === "stove") {
    mountTime.FIRSTGRADE.stove = false;
  } else if (string === "solderingIron") {
    mountTime.FIRSTGRADE.solderingIron = false;
  } else if (string === "screen") {
    mountTime.FIRSTGRADE.screen = false;
  } else if (string === "poster") {
    mountTime.SECONDGRADE.poster = false;
  } else if (string === "darts") {
    mountTime.SECONDGRADE.darts = false;
  } else if (string === "monitor") {
    mountTime.SECONDGRADE.monitor = false;
  }
};

export default class Hovercontents extends Module {
  constructor(ctx) {
    super("Hovercontents");
    this._ctx = ctx;
  }

  //あまじょう看板前　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverSignboard1() {
    //あまじょうの看板について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");

    ReactDOM.render(
      <div className="new">
        <h2 className="t-signboard type">学校の看板</h2>
        <p>
          これが奄美情報処理専門学校の看板です。この写真では汚れてしまっていますが、
        </p>
        <p>最近では愛校作業により、とてもきれいに生まれ変わっています。</p>
        <p>一度、見に来てみてはいかがでしょうか？</p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>

        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("signboard");
    document.addEventListener("click", function () {
      mounted("signboard");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  OnhoverSignboard2() {
    //あまじょうの狭い道について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-narrowRoad type" id="leng">
          狭い道
        </h2>
        <p>ここは奄美情報処理専門学校の通学路です。</p>
        <p>主に車や原付、自転車で通う学生が多いのですが、</p>
        <p>通学路は狭いので車で来た時には対向車に注意しましょう。</p>
        <p>(狭い道での運転技術は飛躍的に高まります。)</p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>

        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("narrowRoad");
    document.addEventListener("click", function () {
      mounted("narrowRoad");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  OnhoverSignboard3() {
    //駐車場への道について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="type t-parkingPath"> 駐車場への道</h2>
        <p> 車で通学する際にはこの道を先に進んで駐車場へ行きます。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("parkingPath");
    document.addEventListener("click", function () {
      mounted("parkingPath");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //駐車場　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverParkingplace1() {
    //駐車場について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-parkingPlace type"> 駐車場</h2>
        <p> 学生用の駐車場が完備されていて車での通学が可能です。</p>
        <p>
          自転車などを置くスペースもあるので、自転車・バイクでの通学もできます。
        </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("parkingPlace");
    document.addEventListener("click", function () {
      mounted("parkingPlace");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverParkingplace2() {
    //チーム防人について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-reflected type"> チーム防人</h2>
        <p>我々、チーム防人です。</p>
        <p>
          割と車が通る場所だったので遠くへ隠れられず背を向けた状態になっています。
        </p>
        <p>
          実はチームメンバーは3人です。もう1人は車の後ろにいて残念な事に視認できません。
        </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("reflected");
    document.addEventListener("click", function () {
      mounted("reflected");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverParkingplace3() {
    //建物について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-building type"> 建物</h2>
        <p>
          こちらの建物は「ユーアイ自立支援の会」さん
          なので、あまじょうではありません。
        </p>
        <p>あまじょうはこの建物の裏側にあります。</p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("building");
    document.addEventListener("click", function () {
      mounted("building");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //玄関　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverEntrance1() {
    //自動販売機について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-vendingMachine type"> 自販機</h2>
        <p> １階玄関には、自販機が２台設置されています。</p>
        <p>
          休み時間に自由に購入することが可能です。たまにお金を入れても飲み物が出てこない！！というトラブルがあったり…
        </p>
        <p>そんなときは職員室にいる先生にご相談ください。</p>
        <p>
          （入れてほしい飲み物があったら学長に相談すれば検討してくれるかも！？）
        </p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("vendingMachine");
    document.addEventListener("click", function () {
      mounted("vendingMachine");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverEntrance2() {
    //靴箱について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-shoeBox type">靴箱</h2>
        <p>学生用の靴箱です。</p>
        <p>ここでスリッパに履き替えて２階へ上がってください。 </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("shoeBox");
    document.addEventListener("click", function () {
      mounted("shoeBox");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverEntrance3() {
    //手洗い場について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-handWashFacilities type">手洗い場</h2>
        <p>学生や教員が手を洗う場所です。</p>
        <p>
          この学校は建物自体が保育園だったので、かなり腰の位置の低い手洗い場です。
        </p>
        <p>足腰の強化に役立ちそうです。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("handWashFacilities");
    document.addEventListener("click", function () {
      mounted("handWashFacilities");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //多目的室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverMultipurpose1() {
    //クリスマス会について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-xmas type">クリスマス会</h2>
        <p>この写真を撮影した時期はちょうどクリスマス会前だったので</p>
        <p>プレゼントが準備されています。</p>
        <p> 学生主体で準備・運営をして毎年大盛り上がりの行事です。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("xmas");
    document.addEventListener("click", function () {
      mounted("xmas");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverMultipurpose2() {
    //備品について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-equipment type">調理器具</h2>
        <p>あまじょうは様々な備品があります。</p>
        <p>調理器具やスポーツ用品、さらに釣り竿まで</p>
        <p>学生のイベントを支えてくれています。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("equipment");
    document.addEventListener("click", function () {
      mounted("equipment");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverMultipurpose3() {
    //電子レンジなどについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-microwave type">電子レンジなどについて</h2>
        <p>
          多目的室には電子レンジやオーブントースター、冷蔵庫が備え付けられています。
        </p>
        <p>電子レンジは2階にもあり、寒い日などは弁当を温める学生も多いです。</p>
        <p>一方、冷蔵庫にはお酒が入っていることも…</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("microwave");
    document.addEventListener("click", function () {
      mounted("microwave");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //2階　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverSecondfloor1() {
    //ベンチについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-bench type"> 休憩スペース（ベンチ）</h2>
        <p>階段を上ってすぐのところには、テーブルとベンチがあります。</p>
        <p>休憩時間におしゃべりをしたり飲食をしたり自由に使用できます。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("bench");
    document.addEventListener("click", function () {
      mounted("bench");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondfloor2() {
    //消毒液について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-disinfection type">消毒液</h2>
        <p>本校も感染症対策を行っております。</p>
        <p>寒いときも換気を忘れず、学生の意識も高めです。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("disinfection");
    document.addEventListener("click", function () {
      mounted("disinfection");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondfloor3() {
    //台風対策について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-typhoon type">台風対策</h2>
        <p>こちらの窓の下のほうで見えている四角いものは新聞紙です。</p>
        <p>台風対策で窓の隙間に詰めて割れないようにしています。</p>
        <p>もちろん教員、学生全員で行います。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("typhoon");
    document.addEventListener("click", function () {
      mounted("typhoon");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //1年教室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverFirstgrade1() {
    //ストーブについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-stove type"> ストーブ</h2>
        <p>各教室にストーブがあります。</p>
        <p>冬の寒い日はストーブの前にみんなが集まります。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("stove");
    document.addEventListener("click", function () {
      mounted("stove");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverFirstgrade2() {
    //はんだこてについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-solderingIron type"> はんだこて</h2>
        <p>見えにくいですがここには「はんだこて」があります。</p>
        <p>1年次のハードウェアの授業で使用します。</p>
        <p>コツが必要ですが、慣れるととても楽しいです。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("solderingIron");
    document.addEventListener("click", function () {
      mounted("solderingIron");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverFirstgrade3() {
    //スクリーンについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-screen type"> スクリーン</h2>
        <p>ここにはスクリーンがあります。</p>
        <p>主に授業で先生が画面共有して説明してくださいます。</p>
        <p>たまに、大画面でゲームを接続してみんなでやることもあります。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("screen");
    document.addEventListener("click", function () {
      mounted("screen");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  //2年教室　XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  OnhoverSecondgrade1() {
    //あまじょうポスターについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-poster type"> あまじょうポスター</h2>
        <p>あまじょうのポスターです。</p>
        <p>
          校内、校外様々なところに貼られているので見つけてQRを読み込んでみてください！
        </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("poster");
    document.addEventListener("click", function () {
      mounted("poster");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondgrade2() {
    //ダーツについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-darts type"> ダーツ</h2>
        <p>２年教室には、ダーツや麻雀など休み時間にみんなで遊べる</p>
        <p>道具もそろっています！</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("darts");
    document.addEventListener("click", function () {
      mounted("darts");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondgrade3() {
    //モニターについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div className="new">
        <h2 className="t-monitor type"> モニター</h2>
        <p>２年生になると卒業制作などの作業が多くなるので</p>
        <p>1人1台モニターを使用しています。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    addNew("monitor");
    document.addEventListener("click", function () {
      mounted("monitor");
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
}
