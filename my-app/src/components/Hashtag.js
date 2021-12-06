import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { hashTag_Top10 } from "./TentHash";
import { tentHash } from "./TentHash";

import { Reviewdata } from "./Reviewdata";
import Highlighter from "react-highlight-words";
function Hashtag(rev) {
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
        {hashTag_Top10.map((word, index) => {
          return (
            <div>
              <StyledButton className="wordHashtag">#{word}</StyledButton>
              <Highlighter
                searchWords={[word]}
                autoEscape={true}
                textToHighlight={rev}
              ></Highlighter>
            </div>
          );
        })}
      </div>
      {/* <div>
        {tentHash.map((item, i) => {
          return <div>{item}</div>;
        })}
      </div> */}
    </div>
  );
}

export default Hashtag;
//{
//    item.map((tem, j) => {
//      return <div>{tem}</div>;
//    });
//  }
