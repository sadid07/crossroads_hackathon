

import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import React, { Component } from "react";
import { endpoint } from "../constants";
import { NavLink } from 'react-router-dom'

import axios from "axios";
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
class DeskTopHomepageLayoutProductList__7 extends Component {





    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/dhplinp-7/`)

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



                    {data &&
                        data.map(v => {
                            return (
                                <div className='col-md-6'>
                                    <NavLink to={v.link}>
                                        <DeskTopHomepageLayoutProduct
                                            id={v.id}
                                            title={v.name}
                                            image={v.image}
                                        />
                                    </NavLink>
                                </div>
                            );

                        })}


                </div>
                <h6> Kenwood kMix Stand </h6>
            </div>
    );
}
}
export default DeskTopHomepageLayoutProductList__7;
