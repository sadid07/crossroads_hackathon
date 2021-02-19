

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
class DeskTopHomepageLayoutProductList__2 extends Component {





    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/dhplinp-2/`)
            .then(res => {
                this.setState({ data: res.data.results, loading: false });
              


            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }



    render(){

        const { data} = this.state
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
                                image="https://orbitplug.com.swadexpress.com/media/images/download_70_W6ezGJp.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_60_1lTDO20.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/download_23_9l9OLcs.jpeg"
                                style={{ height: "120px" }}
                            />
                        </NavLink>


                    </div>
                    <div className='col-md-6'>

                        <NavLink to="">
                            <DeskTopHomepageLayoutProduct
                                // id={v.id}
                                // title={v.name}
                                image="https://orbitplug.com.swadexpress.com/media/images/513Nm5MiRgL.jpg"
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
export default DeskTopHomepageLayoutProductList__2;
