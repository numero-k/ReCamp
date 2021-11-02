//components/ProductRow.js

import React from "react";
import sampleImage from "../logo192.png";
import "./ProductList.css";
import { ProductData } from "./ProductData";
import { Link } from "react-router-dom";
const ProductRow = () => {
  return (
    <div className="product">
      <div className="productImage">
        <img src={sampleImage} alt="Sample Image" height="150" />
      </div>
      <div className="product-detail">
        <h4>
          <Link to="/productDetail" className="product-title">
            텐트
          </Link>
        </h4>
        <p>상품에 대한 정보입니다.</p>
      </div>
      <div className="product-price">$$$$원</div>

      {/* {ProductData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })} */}
    </div>
  );
};

export default ProductRow;
