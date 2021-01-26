// 各要素にホバー時にHTMLを#commentaryに描写し、内容を説明するファイル

import React from "react";
import ReactDOM from "react-dom";
import { Module } from "react-360-web";

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
      <div>
        <h2 className="t-signboard type">学校の看板</h2>
        <p>
          これが奄美情報処理専門学校の看板です。特別変わったことはありませんが、
        </p>
        <p>最近では愛校作業により、とてもきれいに生まれ変わっています。</p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>

        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );

    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  OnhoverSignboard2() {
    //あまじょうの狭い道について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
        <h2 className="t-narrowRoad type" id="leng">
          狭い道
        </h2>
        <p>ここは奄美情報処理専門学校の通学路です。</p>
        <p>
          主に車や原付、自転車で通う学生が多いのですが、
          <br />
          通学路は狭いので車で来た時には対向車に注意しましょう。
        </p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>

        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }

  OnhoverSignboard3() {
    //駐車場への道について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
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
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverParkingplace2() {
    //駐車場について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
        <h2 className="t-reflected type"> チーム防人</h2>
        <p>
          我々、チーム防人です。
          <br />
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
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverEntrance2() {
    //靴箱について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverEntrance3() {
    //手洗い場について XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
        <h2 className="t-handWashFacilities type">手洗い場</h2>
        <p>学生や教員が手を洗う場所です。</p>
        <p>
          この学校は建物自体が保育園だったので、かなり腰の位置の低い手洗い場です。
        </p>
        <p>足腰の強化に役に立ちそうです。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondfloor2() {
    //ベンチについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
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
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
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
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondgrade2() {
    //ダーツについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
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
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
  OnhoverSecondgrade3() {
    //モニターについて XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    //注意点！！ 改行は<p>タグで区切ったほうが楽 XXXXXXXXXXXXXXXXXXXXX
    let el = document.getElementById("commentary");
    ReactDOM.render(
      <div>
        <h2 className="t-monitor type"> モニター</h2>
        <p>２年生になると卒業制作などの作業が多くなるので</p>
        <p>一人一台モニターを使用しています。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
        <div className="bluelight">
          <a></a>
        </div>
      </div>,
      el
    );
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
}
