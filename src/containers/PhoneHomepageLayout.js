import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from "semantic-ui-react";
import Carousel from "./Carousel";
import "./Home.css";
import { authAxios } from "../utils";
import Product from "./Product";
import { productListURL, addToCartURL } from "../constants";
import axios from "axios";
import PhoneProduct from './PhoneProduct'


// const getWidth = () => {
//     const isSSR = typeof window === "undefined";
//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// };

class PhoneHomepageLayout extends Component {
 
    render() {
        const { children } = this.props;

        return (
<>
            <div className='container-fluid home ' style={{ background: '#FFFFFF' }} >
                   
                </div>







</>

        );
    }
}

export default PhoneHomepageLayout;
