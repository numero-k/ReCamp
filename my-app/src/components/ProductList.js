//components/ProductList.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Hashtag from "./Hashtag";
import "./ProductList.css";
import { ProductData } from "./data";
import { Reviewdata } from "./Reviewdata";
import styled, { css } from "styled-components";
import ShowMoreText from "react-show-more-text";
import Highlight from "./Highlight";
import Posts from "./Posts";
import Pagination from "./Pagination";
// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//   }

function ProductList() {
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

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      setPosts(Reviewdata);
      setLoading(false);
    }
    fetchData();
  }, []);
  console.log(posts);
  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  function optionValue(e) {
    var target = document.getElementById("selectBox");
    alert("선택된 옵션 text 값=" + target.options[target.selectedIndex].text); // 옵션 text 값
    // alert('선택된 옵션 value 값=' + target.options[target.selectedIndex].value); // 옵션 value 값
    if (target.options[target.selectedIndex].value === "sortPriceHigh") {
      Reviewdata.sort((a, b) => {
        if (a.ProductPrice < b.ProductPrice) return 1;
        if (a.ProductPrice > b.ProductPrice) return -1;
        return 0;
      });
      window.location.reload();
    }
  }
  Reviewdata.sort((a, b) => {
    if (a.ProductReview.length < b.ProductReview.length) return 1;
    if (a.ProductReview.length > b.ProductReview.length) return -1;
    return 0;
  });

  return (
    <div className="main-content">
      {/* <Highlight></Highlight> */}
      <Box className="product">
        <Hashtag></Hashtag>
      </Box>
      <div>
        <p>상품 정렬 기준</p>
        <select name="wayToSort" id="selectBox" onChange={optionValue}>
          <option value="sortReview" selected>
            리뷰가 긴 순
          </option>
          <option value="sortPriceHigh">가격 높은 순</option>
          <option value="sortPriceLow">가격 낮은 순</option>

          <option value="sortHashTag">해시태그와 관련 많은 순</option>
          <option value="sortLike">좋아요가 많은 순</option>
        </select>
      </div>
      <div>
        상품목록
        {/* <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow /> */}
        {/* {ProductData.map((item, index) => {
            return (
              <div key={index} className="product">
                <div className="productImage">
                  <img src={item.ProductImg} height="150"></img>
                </div>
                <div className="product-title">{item.ProductName}</div>
                <div className="product-price">{item.ProductPrice}</div>
              </div>
            );
          })} */}
        {/* <Posts posts={posts} loading={loading}></Posts> */}
        <Posts posts={currentPosts(posts)} loading={loading}></Posts>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
}
//}

export default ProductList;
