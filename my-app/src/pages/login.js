//import React from "react";
import * as React from "react";
import "../components/login.css";
import $ from "jquery";

function login() {
  let id = $("#id");
  let pw = $("#pw");
  let btn = $("#btn");

  $(btn).on("click", function () {
    if ($(id).val() == "") {
      $(id).next("label").addClass("warning");
      setTimeout(function () {
        $("label").removeClass("warning");
      }, 1500);
    } else if ($(pw).val() == "") {
      $(pw).next("label").addClass("warning");
      setTimeout(function () {
        $("label").removeClass("warning");
      }, 1500);
    }
  });
  return (
    <div className="login">
      <section class="login-form">
        <h1>LOGO</h1>
        <form action="">
          <div class="int-area">
            <input
              type="text"
              name="id"
              id="id"
              autocomplete="off"
              required
            ></input>
            <label for="id">아이디</label>
          </div>
          <div class="int-area">
            <input
              type="password"
              name="pw"
              id="pw"
              autocomplete="off"
              required
            ></input>
            <label for="pw">비밀번호</label>
          </div>
          <div class="btn-area">
            <button id="btn" type="submit">
              로그인
            </button>
          </div>
          <div class="caption">
            <a href="/signup" class="register">
              회원가입
            </a>
            <a href="" class="pw_m">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default login;
