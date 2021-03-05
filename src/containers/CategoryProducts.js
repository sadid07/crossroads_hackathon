import React, { Component, onMouseOver } from 'react'
import { NavLink, withRouter,Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
    Button,
    Card,
    Dimmer,
    Divider,
    Form,
    Grid,
    Header,
    Image,
    Label,
    Loader,
    Menu,
    Message,
    Segment,
    Select,
    Table,
    Item
} from "semantic-ui-react";
import { endpointauth  } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./ProductDetail.css"

import $ from "jquery";
import CKEditor from "react-ckeditor-component";

import { endpointlocahost, endpoint } from "../constants";

class CategoryProducts extends React.Component {
    state = {
        loading: false,
        error: null,
        data: "",
        Id : "",
        details: ""

    };


    componentDidMount() {
        this.handleFetchItem();
        window.scrollTo(0, 0);


    }

    handleFetchItem = () => {
        const {
            match: { params }
        } = this.props;
        console.log(this.props)
        this.setState({ loading: true });
        localStorage.setItem("ID",params.categoryID)
        axios
            .get(`${endpoint}/categoryitemslistview/${params.categoryID}/`)
            .then(res => {
                this.setState({ data: res.data.data, loading: false });
                window.scrollTo(0, 0);

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
                console.log(err)
            });
    };

 CategoryChanage = (Id) =>{
     console.log('chack')
     console.log(Id)
     axios
         .get(`${endpoint}/categoryitemslistview/${Id}/`)
         .then(res => {
             console.log('data1', res.data.data)
             this.setState({ data: res.data.data, loading: false });
         })
         .catch(err => {
             this.setState({ error: err, loading: false });
             console.log(err)
         });


     
 }



    render() {
        const { data } = this.state;
        const {
            match: { params }
        } = this.props;
        var Id = params.categoryID
        console.log(this.props)
        var ID = localStorage.getItem("ID")
        if (Id === ID){
        }
        else{
            this.CategoryChanage(Id)
        }
        localStorage.setItem("ID",Id)



        return (
            <>

                <div class="container-fluid home">
                    <div class="row home  ml-1 mr-1">
                        <div class="col-md-12">
                            {/* {this.CategoryChanage(this.Id)} */}
                            <h2>Featured <b>Products</b></h2>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                <div class="row">
                                    {data &&
                                        data.map(item => {
                                        return (


                                            <div class="col-6 col-md-2" style={{ padding: "10px" }}>
                                            <NavLink to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }}>
                                            <div class="thumb-wrapper">
                                              <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                              <div class="img-box">
                                                <NavLink to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }}>
                                                    {/* <img  src={item.image} class="product__image" alt="" /> */}
                                                    <img src={`${endpointauth}/media/${item.image}`} class="product__image" alt="" />

                                                </NavLink>
                                              </div>
                                              {/* <br></br> */}
                                              <div class="thumb-content" style ={{ marginTop:"10px"}}>
                                                  <Link class="item-price desktop__product__detail" to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 40)}...</Link>
                                                  <Link class="item-price phone__product__detail" to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 30)}...</Link>
                                               
                                                <div class="star-rating">
                  
                                                  <ul class="list-inline" style={{ display: "contents" }}>
                  
                                                    <li class="list-inline-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color:"#FFC000"}} width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                      </svg>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#FFC000" }} width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                      </svg>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#FFC000" }} width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                      </svg>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#FFC000" }} width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                      </svg>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#FFC000" }} width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                      </svg>
                                                    </li>
                                                  </ul>
                                                </div>
                  
                                                  <p class="item-price"><strike> ৳ {item.price}</strike> <b>৳ {item.discount_price}  </b></p>
                                                {/* <a href="#" class="btn btn-primary">Add to Cart</a> */}
                                              </div>
                                            </div>
                                             </NavLink>
                                          </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        );
    }



}



const mapDispatchToProps = dispatch => {
    return {
        refreshCart: () => dispatch(fetchCart())
    };
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(CategoryProducts)
);

