import React, { useState } from "react";
import { data } from "./HashtagData";
import { Reviewdata } from "./Reviewdata";

function Highlight() {
  return Reviewdata.map((item, index) => {
    if (item.ProductReview.includes("공간")) {
      let wordIndex = item.ProductReview.indexOf("공간");
      let word = "";
      for (let i = wordIndex - 10; i < wordIndex + 10; ++i) {
        word += item.ProductReview[i];
      }
      return <div>{word}</div>;
    }
  });
}

export default Highlight;
