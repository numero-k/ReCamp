import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { data } from "./HashtagData";

function Hashtag() {
  const [state, setstate] = useState("black");

  const StyledButton = styled.button`
    font-size: 1rem;

    margin: 3px;
    &:hover {
      color: green;
    }
  `;
  return (
    <div className="Hashtag">
      <div className="product-detail">
        <h2>해시태그</h2>
        {data.map((word, index) => {
          return (
            <StyledButton
              className="wordHashtag"
              onClick={() => setstate("green")}
            >
              #{word}
            </StyledButton>
          );
        })}
      </div>
    </div>
  );
}

export default Hashtag;
