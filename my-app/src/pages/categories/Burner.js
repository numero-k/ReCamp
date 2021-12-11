//components/ProductList.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "../../components/ProductList.css";

import styled, { css } from "styled-components";
import ShowMoreText from "react-show-more-text";
import Highlighter from "react-highlight-words";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);
function Burner() {
  const [currentHash, setHash] = useState([]);
  const hashTag_Top10 = [
    "\uac00\uaca9",
    "\ucf00\uc774\uc2a4",
    "\uc0ac\uc6a9",
    "\uc0ac\uc774\uc988",
    "\ub0c4\ube44",
    "\uace0\uae30",
    "\ud734\ub300",
    "\ubd80\ud0c4\uac00\uc2a4",
    "1",
    "4",
  ];
  const Box = styled.div`
    display: flex;
    justify-content: center;
  `;
  const TitleBox = styled.div`
    width: 10%;
  `;
  const ReviewBox = styled.div`
    width: 80%;
  `;
  const StyledButton = styled.button`
    font-size: 1rem;

    margin: 3px;
    &:hover {
      color: green;
    }
  `;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [dbData, setdbData] = useState([]);

  // 정렬
  const [sortOpt, setSortOpt] = useState();
  const [color, setColor] = useState({ color: "black" });

  useEffect(() => {
    API.get("api0a0ce0d7", "/items/dataReqBurner", {}).then((res) =>
      //console.log(res)
      setdbData(res)
    );
  }, []);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div className="main-content">
      {/* <Highlight fil={posts}></Highlight> */}
      <p>해시태그 선택 시, 해당 내용이 포함된 리뷰만 보여집니다.</p>

      <h2>해시태그</h2>
      <Box>
        {hashTag_Top10.map((word, index) => {
          return (
            <div>
              <StyledButton
                className="wordHashtag"
                onClick={() => {
                  setColor({ color: "black" });
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
      </Box>
      <h2>선택된 해시태그</h2>
      <Box>
        {currentHash.map((i) => {
          return <StyledButton>{i}</StyledButton>;
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
      </select>

      <table>
        <tbody>
          {sortOpt === undefined &&
            dbData
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
                  <tr key={index} className="product">
                    <Box className="productImage">
                      <a href={item.ProductURL} target="_blank">
                        <img src={item.ProductImg} height="100"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <ShowMoreText more="...더보기" less="숨기기">
                        <Highlighter
                          searchWords={currentHash}
                          autoEscape={true}
                          textToHighlight={item.ProductReview}
                        ></Highlighter>
                      </ShowMoreText>
                      {/* <ShowMoreText more="...더보기" less="숨기기">
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
                    </ShowMoreText> */}
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <Box className="product-price">{item.ProductPrice}</Box>
                  </tr>
                );
              })}
          {sortOpt === "sortReview" &&
            dbData
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
                    <Box className="productImage">
                      <a href={item.ProductURL} target="_blank">
                        <img src={item.ProductImg} height="100"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <ShowMoreText more="...더보기" less="숨기기">
                        <Highlighter
                          searchWords={currentHash}
                          autoEscape={true}
                          textToHighlight={item.ProductReview}
                        ></Highlighter>
                      </ShowMoreText>
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <Box className="product-price">{item.ProductPrice}</Box>
                  </div>
                );
              })}
          {sortOpt === "sortPriceHigh" &&
            dbData
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
                    <Box className="productImage">
                      <a href={item.ProductURL} target="_blank">
                        <img src={item.ProductImg} height="100"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <ShowMoreText more="...더보기" less="숨기기">
                        <Highlighter
                          searchWords={currentHash}
                          autoEscape={true}
                          textToHighlight={item.ProductReview}
                        ></Highlighter>
                      </ShowMoreText>
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <div className="product-price">{item.ProductPrice}</div>
                  </div>
                );
              })}
          {sortOpt === "sortPriceLow" &&
            dbData
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
                    <Box className="productImage">
                      <a href={item.ProductURL} target="_blank">
                        <img src={item.ProductImg} height="100"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <ShowMoreText more="...더보기" less="숨기기">
                        <Highlighter
                          searchWords={currentHash}
                          autoEscape={true}
                          textToHighlight={item.ProductReview}
                        ></Highlighter>
                      </ShowMoreText>
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <div className="product-price">{item.ProductPrice}</div>
                  </div>
                );
              })}
          {/* <Posts posts={posts} loading={loading} sortOpt={sortOpt}></Posts> */}
          {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination> */}
        </tbody>
      </table>
    </div>
  );
}
//}

export default Burner;
