import React from "react";
import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {


  return (
  
        <div className=" product" >
          <div className="product__info">
            <h4>{title}</h4>
          </div>

          <img src={image} alt="Product description is here." />
        <a>{title}</a>


        </div>
  );
}

export default Product;
