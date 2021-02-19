

import "./Product.css";
import "./productlist.css"
import { useStateValue } from "./StateProvider";
import "./DeskTopHomepageLayout.css"
import DeskTopHomepageLayoutProduct from "./DeskTopHomepageLayoutProduct"
import React, { Component } from "react";
import axios from "axios";
import { endpoint } from "../constants";
// import { NavLink } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import Resizer from 'react-image-file-resizer';
// import RNFS from 'react-native-fs';
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

class DeskTopHomepageLayoutProductList__1 extends Component {





    state = {
        loading: false,
        error: null,
        data: [],
        newImage :""
    };

    componentDidMount() {
        this.setState({ loading: true });



        axios
            .get(`${endpoint}/dhplinp-1/`)

            .then(res => {
                this.setState({ data: res.data.results, loading: false });
      
              


            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }


render (){
    const { data, newImage} = this.state

    

    return (

        <div className='product'>
            <div className="product__info">
                <h4> Kenwood kMix Stand </h4>

            </div>
            <div className='row ' >
                
                                <div className='col-md-6'>
                                   
                                    <NavLink to ="">
                                        <DeskTopHomepageLayoutProduct
                                            // id={v.id}
                                            // title={v.name}
                                            image="https://orbitplug.com.swadexpress.com/media/images/download_20_eo3jCpD.jpeg"
                                            style={{ height: "120px"}}
                                        />
                                    </NavLink>


                                </div>
                                <div className='col-md-6'>
                                   
                                    <NavLink to ="">
                                        <DeskTopHomepageLayoutProduct
                                            // id={v.id}
                                            // title={v.name}
                                            image="https://orbitplug.com.swadexpress.com/media/images/download_34_VqCYVsh.jpeg"
                                            style={{ height: "120px"}}
                                        />
                                    </NavLink>


                                </div>
                                <div className='col-md-6'>
                                   
                                    <NavLink to ="">
                                        <DeskTopHomepageLayoutProduct
                                            // id={v.id}
                                            // title={v.name}
                                            image="https://orbitplug.com.swadexpress.com/media/images/air3_Bf5ElD7.jpeg"
                                            style={{ height: "120px"}}
                                        />
                                    </NavLink>


                                </div>
                                <div className='col-md-6'>
                                   
                                    <NavLink to ="">
                                        <DeskTopHomepageLayoutProduct
                                            // id={v.id}
                                            // title={v.name}
                                            image="https://orbitplug.com.swadexpress.com/media/images/139459938_221550636276672_5184713601567077759_o_PIlGS43.jpg"
                                            style={{ height: "120px"}}
                                        />
                                    </NavLink>
                                    
                                </div>










               
            </div>
            <h6> Kenwood kMix Stand </h6>
        </div>
    );
}
}
export default DeskTopHomepageLayoutProductList__1;
