

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

class DeskTopHomepageProductList__2 extends Component {





    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/dhpl-2/`)


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
                            <NavLink to={v.link}>
                                <Product
                                    id={v.id}
                                    title={v.name}
                                    price={239}
                                    image={v.image}

                                />
                            </NavLink>

                        );

                    })}




            </>
        );
    }
}
export default DeskTopHomepageProductList__2;
