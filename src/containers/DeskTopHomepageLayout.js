import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Responsive,
} from "semantic-ui-react";
import Carousel from "./Carousel";
import "./Home.css";
import { authAxios } from "../utils";
import Product from "./Product";
import axios from "axios";
import "./Product.css"
import ProductSliderA from "./ProductSliderA"
import ProductSliderB from './ProductSliderB'
import ProductDetailSliderTop from "./ProductDetailSliderTop"
import DeskTopHomepageLayoutProductList from "./DeskTopHomepageLayoutProductList"
import DeskTopHomepageLayoutProductList__1 from "./DeskTopHomepageLayoutProductList__1"
import DeskTopHomepageLayoutProductList__2 from "./DeskTopHomepageLayoutProductList__2"
import DeskTopHomepageLayoutProductList__3 from "./DeskTopHomepageLayoutProductList__3"
import DeskTopHomepageLayoutProductList__4 from "./DeskTopHomepageLayoutProductList__4"
import DeskTopHomepageLayoutProductList__5 from "./DeskTopHomepageLayoutProductList__5"
import DeskTopHomepageLayoutProductList__6 from "./DeskTopHomepageLayoutProductList__6"
import DeskTopHomepageLayoutProductList__7 from "./DeskTopHomepageLayoutProductList__7"
import DeskTopHomepageLayoutProductList__8 from "./DeskTopHomepageLayoutProductList__8"
import DeskTopHomepageLayoutProductList__9 from "./DeskTopHomepageLayoutProductList__9"
import DeskTopHomepageLayoutProductList__10 from "./DeskTopHomepageLayoutProductList__10"
import DeskTopHomepageProductList__1 from './DeskTopHomepageProductList__1'
import DeskTopHomepageProductList__2 from './DeskTopHomepageProductList__2'
import DeskTopHomepageProductList__3 from './DeskTopHomepageProductList__3'
import DeskTopHomepageProductList__4 from './DeskTopHomepageProductList__4'
import DeskTopHomepageProductList__5 from './DeskTopHomepageProductList__5'
import DeskTopHomepageProductList__6 from './DeskTopHomepageProductList__6'
import SmallBannerA from './SmallBannerA'
import SmallBannerB from './SmallBannerB'
import LargestBannerLeftSiteA from './LargestBannerLeftSiteA'
import LargestBannerLeftSiteB from './LargestBannerLeftSiteB'
import LargestBannerRightSiteA from './LargestBannerRightSiteA'
import LargestBannerRightSiteB from './LargestBannerRightSiteB'
import LargestBannerMiddelA from './LargestBannerMiddelA'
import LargestBannerMiddelB from './LargestBannerMiddelB'
import SearchbarDropdown from "./SearchbarDropdown"
// const getWidth = () => {
//     const isSSR = typeof window === "undefined";
//     return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// };

class DeskTopHomepageLayout extends Component {
 

    render() {
        const { children } = this.props;

        return (
            <>
              
                {/* .............................................. Start Slider............................................... */}
                <div className='container-fluid home' >
                
                    <div className="row">
                       
                            <center>
                                <Carousel />
                            </center>
                       
                      

                        {/* .............................................. End Slider............................................... */}


                        {/* ..................................................................................................... */}
                        <div className="row m-1">

                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__1></DeskTopHomepageLayoutProductList__1>
                              
                            </div>







                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__2></DeskTopHomepageLayoutProductList__2>

                            </div>
                            <div className='col-md-3'>

                                <DeskTopHomepageProductList__1></DeskTopHomepageProductList__1>
                            </div>

                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__3></DeskTopHomepageLayoutProductList__3>

                            </div>
                         

                       

                        </div>

                        {/* ..................................................................................................... */}


                        {/* ..................................................................................................... */}
                    
                        <div className="row m-1 my-2">
                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__4></DeskTopHomepageLayoutProductList__4>

                            </div>

                            <div className='col-md-3'>
                                <DeskTopHomepageProductList__2></DeskTopHomepageProductList__2>

                            </div>
                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__5></DeskTopHomepageLayoutProductList__5>
                            </div>
                         

                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__6></DeskTopHomepageLayoutProductList__6>

                            </div>
                        </div>
                        {/* ..................................................................................................... */}









                        {/* ..................................................................................................... */}


                        <div className="row my-2">





                            <div className='col-md-6'>

                                <div className='row ml' style={{ marginLeft: "18px", marginRight: "0px",backgroundColor: '#FFFFFF' }}>
                                    <div className='col-md-12'> <h5 style={{ marginTop: '5px' }}>  New Arrivals</h5></div>
                                    
                                    <SmallBannerA style={{marginTop:'5px'}}></SmallBannerA>
                                </div>

                            </div>




                            <div className='col-md-6'>
                                
                                <div className='row ' style={{ marginLeft:"0px",marginRight:"18px", backgroundColor: '#FFFFFF' }}>
                                    <div className='col-md-12'> <h5 style={{ marginTop: '5px' }}>  New Arrivals</h5></div> 
                                    <SmallBannerB></SmallBannerB>
                                </div>

                            </div>
                        </div>

                        {/* ..................................................................................................... */}



                        <div className="row my-2" style={{ marginRight:"18px",marginLeft:"18px", backgroundColor: '#FFFFFF' }}>

                       <LargestBannerLeftSiteA></LargestBannerLeftSiteA>

                            <div className='col-md-6' style={{ backgroundColor: '#FFFFFF' }}>
                                <div className='row'>
                                    <LargestBannerMiddelA></LargestBannerMiddelA>

                                </div>
                            </div>

                            <LargestBannerRightSiteA></LargestBannerRightSiteA>

                    </div>



                        {/* ..................................................................................................... */}




                        {/* ..................................................................................................... */}



                        <div className="row m-1 ">
                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__7></DeskTopHomepageLayoutProductList__7>

                            </div>


                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__8></DeskTopHomepageLayoutProductList__8>

                            </div>

                            <div className='col-md-3'>
                                <DeskTopHomepageProductList__3></DeskTopHomepageProductList__3>

                            </div>


                            <div className='col-md-3'>
                                <DeskTopHomepageLayoutProductList__9></DeskTopHomepageLayoutProductList__9>

                            </div>
                        </div>




                        <div className="row my-2 " style={{ marginRight: "18px", marginLeft: "18px", backgroundColor: '#FFFFFF' }}>

                            <LargestBannerLeftSiteB></LargestBannerLeftSiteB>


                            <div className='col-md-6' style={{ backgroundColor: '#FFFFFF' }}>
                                <div className='row'>
                                    <LargestBannerMiddelB></LargestBannerMiddelB>

                                </div>
                            </div>


                            <LargestBannerRightSiteB></LargestBannerRightSiteB>

                        </div>



                        {/* ..................................................................................................... */}

















        </div>

    </div>
                {/* ..................................................................................................... */}



                {/* ........................................ Start SliderA...................................................... */}
                <div className='container-fluid'>
                    <ProductSliderA></ProductSliderA>
                    <ProductSliderB></ProductSliderB>
                       
                </div>
                
                {/* ........................................ End SliderA...................................................... */}

            </>



        );
    }
}

export default DeskTopHomepageLayout;
