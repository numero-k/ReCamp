//import React from "react";
import * as React from "react";
import "./signup.css";
import $ from "jquery";

function signup() {
  return (
    <div>
      <form
        action="doJoin"
        method="POST"
        class="joinForm"
        onsubmit="joinForm__submit(this); return false;"
      >
        <h2>회원가입</h2>
        <div class="textForm">
          <input
            name="loginId"
            type="text"
            class="id"
            placeholder="아이디"
            autocomplete="off"
            required
          ></input>
        </div>
        <div class="textForm">
          <input
            name="loginPw"
            type="password"
            class="pw"
            placeholder="비밀번호"
            autocomplete="off"
            required
          ></input>
        </div>
        <div class="textForm">
          <input
            name="name"
            type="text"
            class="name"
            placeholder="이름"
            autocomplete="off"
            required
          ></input>
        </div>
        <div class="textForm">
          <input
            name="email"
            type="text"
            class="email"
            placeholder="이메일"
            autocomplete="off"
            required
          ></input>
        </div>
        <input type="submit" class="btn" value="가입완료"></input>
      </form>
    </div>
  );
}

export default signup;
