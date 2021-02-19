

import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductDetail.css';
import { endpoint } from "../constants";
import { NavLink } from 'react-router-dom'


class LargestBannerRightSiteB extends Component {




    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/ProductSliderBListView/`)



            .then(res => {
                this.setState({ data: res.data.results, loading: false });




            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }







    render() {


        const { data } = this.state

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 8
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 7
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 4
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2
            }
        };

        return (
            <>


                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                // arrows ={false}

                >




                    {data &&
                        data.map(v => {
                            return (

                                <div>
                                    <div class="card m-2" >
                                        <NavLink to={v.link}>
                                            <img style={{ maxHeight: "173px" }} src={v.image} class="card-img-top" alt="..." />
                                        </NavLink>
                                        <div class="card-body">
                                            <NavLink to={v.link}>
                                                <h6 class="card-title">{v.price} tk</h6>
                                            </NavLink>
                                            <NavLink to={v.link}>
                                                <p class="card-text"> {v.name}...</p>
                                            </NavLink>

                                        </div>
                                    </div>

                                </div>


                            );

                        })}









                </Carousel>
            </>
        )
    };
}
export default LargestBannerRightSiteB;
