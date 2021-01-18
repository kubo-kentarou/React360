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
        <h2>学校の看板</h2>
        <p>
          これが奄美情報処理専門学校の看板です。特別変わったことはありませんが、
        </p>
        <p>最近では愛校作業により、とてもきれいに生まれ変わっています。</p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2>狭い道</h2>
        <p>ここは奄美情報処理専門学校の通学路です。</p>
        <p>
          主に車や原付、自転車で通う学生が多いのですが、通学路は狭いので車で来た時には対向車に注意しましょう。
        </p>
        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2> 駐車場への道</h2>
        <p> 車で通学する際にはこの道を先に進んで駐車場へ行きます。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2> 駐車場</h2>
        <p> 学生用の駐車場が完備されていて車での通学が可能です。</p>
        <p>
          自転車などを置くスペースもあるので、自転車・バイクでの通学もできます。
        </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2> 自販機</h2>
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
        <h2>靴箱</h2>
        <p>学生用の靴箱です。</p>
        <p>ここでスリッパに履き替えて２階へ上がってください。 </p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2>手洗い場</h2>
        <p>学生や教員が手を洗う場所です。</p>
        <p>
          この学校は建物自体が保育園だったので、かなり腰の位置の低い手洗い場です。
        </p>
        <p>足腰の強化に役に立ちそうです。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
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
        <h2>クリスマス会</h2>
        <p>この写真を撮影した時期はちょうどクリスマス会前だったので</p>
        <p>プレゼントが準備されています。</p>
        <p> 学生主体で準備・運営をして毎年大盛り上がりの行事です。</p>

        <div className="clickToClose">どこかをクリックで閉じる</div>
        <div className="dialogCursor"></div>
      </div>,
      el
    );
    document.addEventListener("click", function () {
      //他所をクリック時に消える処理
      ReactDOM.unmountComponentAtNode(el);
    });
  }
}
