//components/ProductList.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Hashtag from "./Hashtag";
import "./ProductList.css";
import { ProductData } from "./data";
import { Reviewdata } from "./Reviewdata";
import { tentReviewdata } from "./tentReview";
import styled, { css } from "styled-components";
import ShowMoreText from "react-show-more-text";
import Highlight from "./Highlight";
import Posts from "./Posts";
import Pagination from "./Pagination";
import SortOption from "./SortOption";
import Highlighter from "react-highlight-words";
import { hashTag_Top10 } from "./TentHash";
import { searchText } from "./Navbar";

// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//   }

function ProductList() {
  const [currentHash, setHash] = useState([]);
  let hashFlag = false;
  if (localStorage.getItem("키")) {
    var lastData = localStorage.getItem("키");
  }
  if (lastData !== "") {
    for (let i = 0; i < hashTag_Top10.length; ++i) {
      if (lastData.includes(hashTag_Top10[i]) && !hashFlag) {
        if (!currentHash.includes(hashTag_Top10[i])) {
          currentHash.push(hashTag_Top10[i]);
          hashFlag = true;
        }
        lastData = "";
        //setHash(currentHash);
      }
    }
  }

  const Button = styled.button`
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 18%
    );
    &.hide {
      display: none;
    }
  `;
  const Box = styled.div`
    display: flex;
    justify-content: center;
  `;
  const StyledButton = styled.button`
    font-size: 1rem;

    margin: 3px;
    &:hover {
      color: green;
    }
  `;
  const tmpReview = tentReviewdata;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // 정렬
  const [sortOpt, setSortOpt] = useState();
  const [color, setColor] = useState({ color: "black" });

  useEffect(() => {
    setPosts(tentReviewdata);
  }, [posts]);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  // Reviewdata.sort((a, b) => {
  //   if (a.ProductReview.length < b.ProductReview.length) return 1;
  //   if (a.ProductReview.length > b.ProductReview.length) return -1;
  //   return 0;
  // });
  function optionValue(e) {
    if (e === "sortPriceHigh") {
      tmpReview.sort((a, b) => {
        if (a.ProductPrice < b.ProductPrice) return 1;
        if (a.ProductPrice > b.ProductPrice) return -1;
        return 0;
      });
      setPosts(tmpReview);
    } else if (e === "sortReview") {
      Reviewdata.sort((a, b) => {
        if (a.ProductReview.length < b.ProductReview.length) return 1;
        if (a.ProductReview.length > b.ProductReview.length) return -1;
        return 0;
      });
    }
    if (currentPage === 1) {
      setCurrentPage(2);
    } else setCurrentPage(1);
  }
  return (
    <div className="main-content">
      {/* <Highlight fil={posts}></Highlight> */}
      <Box className="product">
        <h2>해시태그</h2>
        {hashTag_Top10.map((word, index) => {
          return (
            <div>
              <StyledButton
                className="wordHashtag"
                onClick={() => {
                  setColor({ color: "green" });
                  if (currentHash.includes(word)) {
                    let fit = currentHash.filter((element) => element !== word);
                    setHash(fit);
                  } else {
                    currentHash.push(word);
                    setHash(currentHash);
                  }
                }}
                style={color}
              >
                #{word}
              </StyledButton>
            </div>
          );
        })}
        <h2>선택된 해시태그</h2>
        {currentHash.map((i) => {
          return <p>{i}</p>;
        })}
      </Box>
      <p>상품 정렬 기준</p>
      <select
        name="wayToSort"
        id="selectBox"
        onChange={(e) => {
          setSortOpt(e.target.value);
        }}
      >
        <option value="sortReview" selected>
          리뷰가 긴 순
        </option>
        <option value="sortPriceHigh">가격 높은 순</option>
        <option value="sortPriceLow">가격 낮은 순</option>

        <option value="sortHashTag">해시태그와 관련 많은 순</option>
        <option value="sortLike">좋아요가 많은 순</option>
      </select>

      <div>
        상품목록
        {sortOpt === undefined &&
          posts
            .filter((element) =>
              currentHash.every((i) => element.ProductReview.includes(i))
            )

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
                  <div>{item.ProductTitle}</div>
                  <div className="product-review">
                    {/* https://www.npmjs.com/package/react-show-more-text */}
                    <Highlighter
                      searchWords={currentHash}
                      autoEscape={true}
                      textToHighlight={item.ProductReview}
                    ></Highlighter>
                    {/* <ShowMoreText more="...더보기" less="숨기기">
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
                    </ShowMoreText> */}
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
            .filter((element) =>
              currentHash.every((i) => element.ProductReview.includes(i))
            )
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
                    <Highlighter
                      searchWords={currentHash}
                      autoEscape={true}
                      textToHighlight={item.ProductReview}
                    ></Highlighter>
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
            .filter((element) =>
              currentHash.every((i) => element.ProductReview.includes(i))
            )
            .sort((a, b) => {
              if (a.ProductPrice.length < b.ProductPrice.length) {
                return 1;
              }
              if (a.ProductPrice.length > b.ProductPrice.length) return -1;
              if (a.ProductPrice.length === b.ProductPrice.length) {
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
                  <div>{item.ProductTitle}</div>
                  <div className="product-review">
                    {/* https://www.npmjs.com/package/react-show-more-text */}
                    <ShowMoreText more="...더보기" less="숨기기">
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
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
            .filter((element) =>
              currentHash.every((i) => element.ProductReview.includes(i))
            )
            .sort((a, b) => {
              if (a.ProductPrice.length > b.ProductPrice.length) {
                return 1;
              }
              if (a.ProductPrice.length < b.ProductPrice.length) return -1;
              if (a.ProductPrice.length === b.ProductPrice.length) {
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
                    <Highlighter
                      searchWords={currentHash}
                      autoEscape={true}
                      textToHighlight={item.ProductReview}
                    ></Highlighter>
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
        {/* <Posts posts={posts} loading={loading} sortOpt={sortOpt}></Posts> */}
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination> */}
      </div>
    </div>
  );
}
//}

export default ProductList;
