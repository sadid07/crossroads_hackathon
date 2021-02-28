

import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import { endpoint } from "../constants";
import { NavLink } from 'react-router-dom'

class SmallBannerA extends Component {
    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {

        this.setState({ loading: true });



        axios
            .get(`${endpoint}/SmallBannerAListView/`)



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
            <>

                {data &&
                    data.map(v => {
                        return (
 
                            <div className='col-md-3' style={{ textAlign: 'center' }}>
                                <NavLink to={v.link}>
                                    <img style={{ padding: 0 }} src={v.image} class="img-thumbnail" alt="..." />
                                </NavLink>
                                <NavLink to={v.link}>
                                    <p style={{ marginTop: '5px' }}>{v.price} tk</p>
                                </NavLink>
                            </div>


                         

                        );

                    })}




            </>
        );
    }
}
export default SmallBannerA;