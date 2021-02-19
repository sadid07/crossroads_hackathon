

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

class DeskTopHomepageProductList__1 extends Component {





    state = {
        loading: false,
        error: null,
        data: []
    };
    componentDidMount() {
        this.setState({ loading: true });



        axios
           
            .get(`${endpoint}/dhpl-1/`)


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
           
            {/* {data &&
                data.map(v => {
                    return ( */}
                        <NavLink to="">
                            <Product
                                id="Panjabi"
                                title='Panjabi'
                                // price={239}
                                image="https://orbitplug.com.swadexpress.com/media/images/139459938_221550636276672_5184713601567077759_o_PIlGS43.jpg"
                                
                            />
                        </NavLink>
                    {/* );

                })} */}


           
              
            </>
        );
    }
}
export default DeskTopHomepageProductList__1;
