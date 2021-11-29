import React, { useState } from "react";

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
      <h5>{number}명이 도움을 받음</h5>
      <button onClick={onIncrease}>도움이 됐어요</button>
    </div>
  );
}

export default Counter;
