//import React from "react";
import * as React from "react";
import "./signup.css";
import $ from "jquery";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [Id, setId] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  function handleSubmit(e) {
    //e.preventDefault();
    axios
      .post("http://localhost:4000/doJoin", {
        id: Id,
        pwd: Pwd,
        name: Name,
        email: Email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log("error : ", error.response);
      });
  }

  return (
    <div>
      <form
        action="http://localhost:4000/doJoin"
        method="POST"
        class="joinForm"
        onSubmit={handleSubmit}
      >
        <h2>회원가입</h2>
        <div class="textForm">
          <input
            name="loginId"
            value={Id}
            onChange={(e) => setId(e.target.value)}
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
            value={Pwd}
            onChange={(e) => setPwd(e.target.value)}
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
            value={Name}
            onChange={(e) => setName(e.target.value)}
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
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
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

export default Signup;