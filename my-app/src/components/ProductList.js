//components/ProductList.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css";

import { tentReviewdata } from "./review/tentReview";
import styled, { css } from "styled-components";

import Highlighter from "react-highlight-words";
// import { searchText } from "./Navbar";
let hashTag_Top10 = [];

function ProductList() {
  const [currentHash, setHash] = useState([]);
<<<<<<< HEAD
=======
  let hashFlag = false;
  if (localStorage.getItem("키")) {
    var lastData = localStorage.getItem("키");
  }
  // if (lastData !== "") {
  //   for (let i = 0; i < hashTag_Top10.length; ++i) {
  //     if (lastData.includes(hashTag_Top10[i]) && !hashFlag) {
  //       if (!currentHash.includes(hashTag_Top10[i])) {
  //         currentHash.push(hashTag_Top10[i]);
  //         hashFlag = true;
  //       }
  //       lastData = "";
  //       //setHash(currentHash);
  //     }
  //   }
  // }
>>>>>>> e973905a58aaafa8367fcfcd7d754cd77a263794

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
  const tmpReview = tentReviewdata;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [dbData, setdbData] = useState([]);

  // 정렬
  const [sortOpt, setSortOpt] = useState();
  const [color, setColor] = useState({ color: "black" });

  useEffect(() => {
    //alert("카테고리" + document.location.state);
    var params = document.location.search.substr(
      document.location.search.indexOf("?") + 1
    );
    let temp = "";
    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
      temp = params[i].split("=");

      if ([temp[0]] == "pagetitle") {
        sval = temp[1];
      }
    }

    if (sval) {
      if (unescape(sval).includes("텐트")) {
        hashTag_Top10 = [
          "\uc124\uce58",
          "\uc544\uc774",
          "\uc815\ub3c4",
          "\uac00\uaca9",
          "\uc778\uc6a9",
          "\ud130\uce58",
          "\uac00\uc871",
          "\ubd80\ubd84",
          "2",
          "4",
        ];
        fetch("/api/dataReqTent", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else if (unescape(sval).includes("침낭")) {
        hashTag_Top10 = [
          "\uc9c0\ud37c",
          "\uac00\uaca9",
          "\uc774\ubd88",
          "\uc0ac\uc6a9",
          "\uc138\ud0c1",
          "\ubd80\ud53c",
          "\uc815\ub3c4",
          "\uc7ac\uc9c8",
          "\uc544\uc774",
          "4",
          "2",
        ];
        fetch("/api/dataReqSleep", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else if (unescape(sval).includes("코펠")) {
        hashTag_Top10 = [
          "\ub0c4\ube44",
          "\ub9c8\uc81c",
          "\uc778\uc6a9",
          "\ub77c\uba74",
          "\uc81c\uac70",
          "\uc190\uc7a1\uc774",
          "\uac00\ubc29",
          "\ud6c4\ub77c\uc774\ud32c",
          "\uac00\uaca9",
          "4",
          "5",
        ];
        fetch("/api/dataReqCop", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else if (unescape(sval).includes("타프")) {
        hashTag_Top10 = [
          "\uc124\uce58",
          "\ud150\ud2b8",
          "\ubc29\uc218",
          "\uac00\uaca9",
          "\uac00\uc131",
          "\ubd80\ubd84",
          "\ud558\ub098",
          "\uace0\uc815",
          "\ubc14\ub78c",
          "2",
          "3",
        ];
        fetch("/api/dataReqTarp", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else if (unescape(sval).includes("화로")) {
        hashTag_Top10 = [
          "\uace0\uae30",
          "\uc5f0\ub8cc",
          "\uace0\uccb4",
          "\uc0ac\uc774\uc988",
          "\uac00\uaca9",
          "\uc815\ub9d0",
          "\ubd80\ubd84",
          "\uc815\ub3c4",
          "\uadf8\ub9b4",
          "2",
          "3",
        ];
        fetch("/api/dataReqBrazier", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else if (unescape(sval).includes("버너")) {
        hashTag_Top10 = [
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
        fetch("/api/dataReqBurner", {
          method: "get",
          mode: "cors",
        })
          .then((res) => res.json())
          .then((data) => setdbData(data));
        console.log(dbData);
      } else {
        alert("검색결과가 없습니다.");
        sval = null;
      }
      for (let i = 0; i < hashTag_Top10.length; ++i) {
        if (unescape(sval).includes(hashTag_Top10[i])) {
          currentHash.push(hashTag_Top10[i]);
        }
      }
      // if (sval) {
      //   for (let i = 0; i < hashTag_Top10.length; ++i) {
      //     if (unescape(sval).includes(hashTag_Top10[i])) {
      //       currentHash.push(hashTag_Top10[i]);
      //     }
      //   }
      //   setHash(currentHash);
      // }
    }

    //데이터 가져오기
  }, []);

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
      </select>

      <table>
        상품목록
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
                        <img src={item.ProductImg} height="150"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
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
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <Box className="product-price">{item.ProductPrice}</Box>
                    <td>
                      <p>0</p>
                      <p>명이 도움을 받음</p>
                    </td>
                    <td>
                      <button>도움이 됐어요</button>
                    </td>
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
                        <img src={item.ProductImg} height="150"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
                    </ReviewBox>
                    {/* <div className="product-title">{item.ProductTitle}</div> */}
                    <Box className="product-price">{item.ProductPrice}</Box>
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
                        <img src={item.ProductImg} height="150"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
                    </ReviewBox>
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
                        <img src={item.ProductImg} height="150"></img>
                      </a>
                    </Box>
                    <TitleBox className="product-title">
                      {item.ProductTitle}
                    </TitleBox>
                    <ReviewBox className="product-review">
                      {/* https://www.npmjs.com/package/react-show-more-text */}
                      <Highlighter
                        searchWords={currentHash}
                        autoEscape={true}
                        textToHighlight={item.ProductReview}
                      ></Highlighter>
                    </ReviewBox>
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
        </tbody>
      </table>
    </div>
  );
}
//}

export default ProductList;
