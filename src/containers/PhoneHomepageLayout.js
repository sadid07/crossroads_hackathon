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
import ProductSliderA from "./ProductSliderA"
import ProductSliderB from './ProductSliderB'
import PhoneHomePageProductList1 from './PhoneHomePageProductList1'
import PhoneHomePageProductList2 from './PhoneHomePageProductList2'
import PhoneHomePageProductList3 from './PhoneHomePageProductList3'
import PhoneHomePageProductList4 from './PhoneHomePageProductList4'
import PhoneHomePageProductList5 from './PhoneHomePageProductList5'
import PhoneHomePageProductList6 from './PhoneHomePageProductList6'
import PhoneHomePageProductList7 from './PhoneHomePageProductList7'
import PhoneHomePageProductList8 from './PhoneHomePageProductList8'
import PhoneHomePageProductList9 from './PhoneHomePageProductList9'
import PhoneHomePageProductList10 from './PhoneHomePageProductList10'
import PhoneHomePageSingleProductSlider1 from './PhoneHomePageSingleProductSlider1'
import PhoneHomePageSingleProductSlider2 from './PhoneHomePageSingleProductSlider2'
import PhoneHomePageSingleProductSlider3 from './PhoneHomePageSingleProductSlider3'
import PhoneHomePageSingleProductSlider4 from './PhoneHomePageSingleProductSlider4'
import PhoneHomePageSingleProductSlider5 from './PhoneHomePageSingleProductSlider5'


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
                    <div className="row ">
                    <center>
                        <Carousel />
                    </center>
                            <div className='col-md-6 m-3' style={{  background: '#E3EDF7'}}>
                                <div className='row' style={{ background: '#E3EDF7' }}>
                                  
                                    <PhoneHomePageProductList1></PhoneHomePageProductList1>
                                
                                </div>
                            </div>
                            {/* <hr style={{backgroundColor:'red'}}></hr> */}
                            <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                                <hr ></hr>
                            </div>
                            <div className='col-md-12' >
                                <span> Top Product in Drone</span>
                            </div>

                            <div className='col-md-6 m-3'>
                                <div className='row' style={{ background: '#FFFFFF' }}>
                                
                            <PhoneHomePageProductList2></PhoneHomePageProductList2>


                                </div>
                            </div>


{/* ........................................................................................................... */}

                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageSingleProductSlider1></PhoneHomePageSingleProductSlider1>


                        </div>
                    </div>

{/* ................................................................................................ */}

                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            
                            <PhoneHomePageProductList3></PhoneHomePageProductList3>

                        </div>
                    </div>



                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Drone</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList4></PhoneHomePageProductList4>

                        </div>
                    </div>


                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList5></PhoneHomePageProductList5>

                        </div>
                    </div>




                














                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageSingleProductSlider2></PhoneHomePageSingleProductSlider2>


                        </div>
                    </div>




                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product Drone</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList6></PhoneHomePageProductList6>



                        </div>
                    </div>



                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList7></PhoneHomePageProductList7>




                        </div>
                    </div>


                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageSingleProductSlider3></PhoneHomePageSingleProductSlider3>



                        </div>
                    </div>



                  




                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product Drone</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList8></PhoneHomePageProductList8>



                        </div>
                    </div>






                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                                <PhoneHomePageSingleProductSlider4></PhoneHomePageSingleProductSlider4>


                        </div>
                    </div>



                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList9></PhoneHomePageProductList9>



                        </div>
                    </div>







                    <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                        <hr ></hr>
                    </div>
                    <div className='col-md-12' >
                        <span> Top Product in Books</span>
                    </div>

                    <div className='col-md-6 m-3'>
                        <div className='row' style={{ background: '#FFFFFF' }}>
                            <PhoneHomePageProductList10></PhoneHomePageProductList10>




                        </div>
                    </div>









                        {/* <div className='col-md-12' style={{ background: '#F3F7F8' }}>
                            <hr ></hr>
                        </div>
                        <div className='col-md-12' >
                            <span> Top Product in Bookks</span>
                        </div> */}



                </div>
            </div>


                <div className='container-fluid' style={{ background: '#FFFFFF' }}>
                   
                    <ProductSliderA></ProductSliderA>
                    <ProductSliderB></ProductSliderB>
                       
                </div>







</>

        );
    }
}

export default PhoneHomepageLayout;
