import React from "react";
import { Reviewdata } from "./Reviewdata";
import ShowMoreText from "react-show-more-text";
const Posts = ({ posts, loading, sortOpt }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {sortOpt === undefined &&
          posts
            .sort((a, b) => {
              if (a.ProductReview.length < b.ProductReview.length) return 1;
              if (a.ProductReview.length > b.ProductReview.length) return -1;
              return 0;
            })
            .map((item, index) => {
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
        {sortOpt === "sortReview" &&
          posts
            .sort((a, b) => {
              if (a.ProductReview.length < b.ProductReview.length) return 1;
              if (a.ProductReview.length > b.ProductReview.length) return -1;
              return 0;
            })
            .map((item, index) => {
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
        {sortOpt === "sortPriceHigh" &&
          posts
            .sort((a, b) => {
              if (a.ProductPrice.length < b.ProductPrice.length) {
                return 1;
              }
              if (a.ProductPrice.length > b.ProductPrice.length) return -1;
              if (b.ProductPrice.length == b.ProductPrice.length) {
                if (a.ProductPrice < b.ProductPrice) return 1;
                if (a.ProductPrice > b.ProductPrice) return -1;
              }
              return 0;
            })
            .map((item, index) => {
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
        {sortOpt === "sortPriceLow" &&
          posts
            .sort((a, b) => {
              if (a.ProductPrice.length > b.ProductPrice.length) {
                return 1;
              }
              if (a.ProductPrice.length < b.ProductPrice.length) return -1;
              if (b.ProductPrice.length == b.ProductPrice.length) {
                if (a.ProductPrice > b.ProductPrice) return 1;
                if (a.ProductPrice < b.ProductPrice) return -1;
              }
              return 0;
            })
            .map((item, index) => {
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
        {sortOpt === "sortHashTag" &&
          posts
            .sort((a, b) => {})
            .map((item, index) => {
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
