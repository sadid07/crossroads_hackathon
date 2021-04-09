import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Responsive,
} from "semantic-ui-react";
import Carousel from "./Carousel";
import "./Home.css";
import { authAxios } from "../utils";
import axios from "axios";
import "./Product.css"
import DestTopHome from "./DestTopHome"
import slider1 from './CarouselImage/slider1.png'

class DeskTopHomepageLayout extends Component {
 

    render() {
        const { children } = this.props;

        return (
            <>
        <div className='container-fluid home' style ={{backgroundColor:"#FAFAFA"}}>
                
            <div className="row" style ={{backgroundColor:"#FAFAFA"}}>
                   
                {/* .............................................. Start Slider............................................... */}            
                        {/* <Carousel /> */}
                        <img src={slider1} class="img-fluid" alt="..."></img>

                {/* .............................................. End Slider............................................... */}

                    <DestTopHome></DestTopHome>

                {/* ..................................................................................................... */}
            </div>
        </div>


            </>



        );
    }
}

export default DeskTopHomepageLayout;
