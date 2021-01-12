// 各要素にホバー時にHTMLを#commentaryに描写し、内容を説明するファイル

import React from "react";
import ReactDOM from "react-dom";
import { Module } from "react-360-web";

export default class Hovercontents extends Module {
  constructor(ctx) {
    super("Hovercontents");
    this._ctx = ctx;
  }
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
          主に車や原付、自転車で通う生徒が多いのですが、通学路は狭いので車で来た時には対向車に注意しましょう。
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
}
