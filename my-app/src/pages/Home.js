import React from "react";
import styled, { css } from "styled-components";
import homeimg from "../components/img/homeimg.jpg";
function Home() {
  const img = styled.div`
    align-items: center;
    justify-content: center;
    display: float;
  `;
  return (
    <div className="home">
      <img src={homeimg} width="500px" height="500px"></img>
    </div>
  );
}

export default Home;
