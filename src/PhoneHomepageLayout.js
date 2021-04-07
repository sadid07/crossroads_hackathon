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


class PhoneHomepageLayout extends Component {
 
    render() {
        const { children } = this.props;

        return (
<>
            <div className='container-fluid home ' style={{ background: '#FFFFFF' }} >
                    <div className="row ">
                    <center>
                        {/* <Carousel /> */}
                    </center>
                 

                </div>
            </div>


        






</>

        );
    }
}

export default PhoneHomepageLayout;
