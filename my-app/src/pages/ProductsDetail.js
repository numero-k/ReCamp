//import React from "react";
import * as React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductsData from "../components/ProductData";
import "./ProductsDetail.css";
import sampleImage from "../logo192.png";

function ProductDetail() {
  // const { productId } = useParams();
  // const thisProduct = ProductsData.find((prod) => prod.id === productId);

  return (
    <div>
      {/* <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p> */}
      <div className="product">
        <div className="productImg">
          <img src={sampleImage} alt="Sample Image" height="150" />
        </div>
        <div className="productDetail">상품에 대한 정보</div>
        <div className="shoppingmall">현재 판매중인 쇼핑몰 정보 출력</div>
      </div>
      <div className="hashtag">리뷰 하이라이트를 위한 해시태그 목록</div>
      <div className="review">리뷰 내용들</div>
    </div>
  );
}

export default ProductDetail;
