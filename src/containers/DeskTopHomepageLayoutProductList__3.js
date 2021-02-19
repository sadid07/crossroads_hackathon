

import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import React, { Component } from "react";
import { endpoint } from "../constants";
import { NavLink } from 'react-router-dom'
import {
    Button,
    Container,
    Dimmer,
    Image,
    Item,
    Label,
    Loader,
    Message,
    Segment
} from "semantic-ui-react";
import axios from "axios";
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
class DeskTopHomepageLayoutProductList__3 extends Component {





    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/dhplinp-3/`)

            .then(res => {
                this.setState({ data: res.data.results, loading: false });
              
          


            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }



    render() {

        const { data } = this.state
        return (

            <div className='product'>
                <div className="product__info">
                    <h4> Kenwood kMix Stand </h4>

                </div>
                <div className='row ' >

                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_53_nfyTMaR.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_52_qn95AqL.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_56_4epyX71.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_8_V0o6UFq.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>

                    </div>
                </div>
                <h6> Kenwood kMix Stand </h6>
            </div>
    );
}
}
export default DeskTopHomepageLayoutProductList__3;
