




import {NavLink} from 'react-router-dom'
import React, { Component } from 'react';


import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
function DeskTopHomepageLayoutProduct({ image}) {


    return (

        <div className="product__insite__product" >
           <img style = {{maxHeight:'128px' ,maxWidth:"128px"}} src={image} alt="Product description is here." />
        </div>
    );
}

export default DeskTopHomepageLayoutProduct;
