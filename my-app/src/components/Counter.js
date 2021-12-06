import React, { useState } from "react";
import help1 from "./img/help1.png";
function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <img src={help1} alt="help1" width="80px" onClick={onIncrease}></img>
      <h5>{number}명이 도움을 받음</h5>
    </div>
  );
}

export default Counter;
