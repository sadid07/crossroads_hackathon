

import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductDetail.css'

class ProductDetailSliderMiddel extends React.Component {
    render() {

        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 8
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6
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
            <div>


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
                    <div>
                        <div class="card m-2" >
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-unmannedtech.pressidium.com%2Fwp-content%2Fuploads%2F2020%2F10%2FNazgul5-analog-fpv-drone-1-1000x1000-1.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">20 tk</h5>
                                <p class="card-text">Some quick example text to build on  ...</p>

                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default ProductDetailSliderMiddel;