//components/ProductList.js

import React, { Component } from "react";
import ProductRow from "./ProductRow";
import Hashtag from "./Hashtag";
import "./ProductList.css";
import { ProductData } from "./data";
import { Reviewdata } from "./Reviewdata";
import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import ShowMoreText from "react-show-more-text";
class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    const Ellipsis = styled.div`
      position: relative;
      display: -webkit-box;
      max-height: 6rem;
      line-height: 2rem;
      overflow: hidden;
      -webkit-line-clamp: 3;
      &.show {
        display: block;
        max-height: none;
        overflow: auto;
        -webkit-line-clamp: unset;
      }
    `;
    return (
      <div className="main-content">
        <div className="product">
          <h4>해시태그 박스</h4>
          <p>입력될 해시태그</p>
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
          {Reviewdata.map((item, index) => {
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
        </div>
      </div>
    );
  }
}

export default ProductList;
