//components/ProductList.js

import React, { Component } from "react";
import ProductRow from "./ProductRow";
import Hashtag from "./Hashtag";
import "./ProductList.css";
import { ProductData } from "./data";
class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <div className="hashtag">
          <h4>해시태그 : </h4>
          <p>#해시태그</p>
        </div>
        <div>
          <h3>상품목록</h3>
          {ProductData.map((item, index) => {
            return (
              <div key={index} className="product">
                <div className="productImage">
                  <img src={item.ProductImg}></img>
                </div>
                <div className="product-title">{item.ProductName}</div>
                <div className="product-price">{item.ProductPrice}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
