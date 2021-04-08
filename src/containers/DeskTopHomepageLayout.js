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

class DeskTopHomepageLayout extends Component {
 

    render() {
        const { children } = this.props;

        return (
            <>
        <div className='container-fluid home' >
                
            <div className="row">
                   
                {/* .............................................. Start Slider............................................... */}            
                        <Carousel />
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
