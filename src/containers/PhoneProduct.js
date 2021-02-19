import React from "react";
import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import { NavLink } from 'react-router-dom'

function PhoneProduct({  title, image}) {


    return (

        <div className="product" >
            <div className="product__info">
                {/* <p>{title}</p> */}
            </div>
            <img src={image} alt="Product description is here."/>
        </div>
    );
}

export default PhoneProduct;
