import React from "react";
import { Reviewdata } from "./Reviewdata";
import ShowMoreText from "react-show-more-text";
const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((item, index) => {
          return (
            <div key={index} className="product">
              <div className="productImage">
                <img src={item.ProductImg} height="150"></img>
              </div>
              <div className="product-review">
                {/* https://www.npmjs.com/package/react-show-more-text */}
                <ShowMoreText more="...더보기" less="숨기기">
                  {item.ProductReview}
                </ShowMoreText>
              </div>
              {/* <div className="product-title">{item.ProductTitle}</div> */}
              <div className="product-price">{item.ProductPrice}</div>
              <div>
                <p>0</p>
                <p>명이 도움을 받음</p>
              </div>
              <div>
                <button>도움이 됐어요</button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default Posts;
