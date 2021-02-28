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
import PhoneHomepageLayout from './PhoneHomepageLayout'
import axios from "axios";
import DeskTopHomepageLayout from "./DeskTopHomepageLayout"

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class HomepageLayout extends Component {

  render() {


    return (
      <>
        {/* ....................................... Desktop Home Body Start .................................................................*/}
       
        <div className='desktop__home__page home'>
          <DeskTopHomepageLayout></DeskTopHomepageLayout>
        </div> 
        {/* ....................................... Desktop Home Body End.................................................................... */}


        {/* ....................................... Phone Home Body Start.................................................................... */}
        <div className='phone__home__page'> 
          <PhoneHomepageLayout></PhoneHomepageLayout>
       </div>
       

        {/* ....................................... Phone Home Body End.................................................................... */}


      </>
     




    );
  }
}

export default HomepageLayout;