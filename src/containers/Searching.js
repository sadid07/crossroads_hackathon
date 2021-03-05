
import React, { Component, onMouseOver } from 'react'
import { NavLink, withRouter, Link } from "react-router-dom";
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
import { endpointauth } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./ProductDetail.css"

import $ from "jquery";
import CKEditor from "react-ckeditor-component";

import { endpointlocahost, endpoint } from "../constants";

class Searching extends React.Component {
    componentDidMount() {
        this.handleChange()
        window.scrollTo(0, 0);


    }

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            data: "",
            loading: false,
            message: '',
            totalResults: 0,
            totalPages: 0,
            currentPageNo: 0,
            active: "",
        };

        this.cancel = '';
    }

    fetchSearchResults = (updatedPageNo = '', query) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `${endpoint}/search/?page=${pageNumber}&search=${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        localStorage.setItem("query", query)

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                this.setState({ results: res.data.results, loading: false });
                window.scrollTo(0, 0);

            })
            .catch(error => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network'
                    })
                }
            })


    };

    handleChange = () => {

        const {
            match: { params }
        } = this.props;
        this.setState({ loading: true })
        const query = params.searchingData
        // let remText = query.replace(/\s/g, "")
        // let length = query.length;
        if (!query) {
            this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }


    };


    OwnhandleChange = () => {

        const {
            match: { params }
        } = this.props;
        this.setState({ loading: true })
        const query = params.searchingData
        // let remText = query.replace(/\s/g, "")
        // let length = query.length;
        if (!query) {
            this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
                window.scrollTo(0, 0);

            });
        }


    };







    render() {
        const { data, results,loading } = this.state;
        const {
            match: { params }
        } = this.props;
        const Thisquery = params.searchingData

        var query = localStorage.getItem("query")
        if (Thisquery == query) {
        }
        else {
            this.OwnhandleChange(Thisquery)
        }
        localStorage.setItem("query", Thisquery)





        return (
            <>

                <div class="container-fluid">
                    <div class="row home ml-1 mr-1">

                        <div className='col-md-12'>
                            <Grid.Column>
                               
                                {loading && (
                                    <Segment>
                                        <Dimmer active inverted>
                                            <Loader inverted>Loading</Loader>
                                        </Dimmer>
                                        {/* <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.philly.com%2Fresizer%2Fq4o6NSDdH57s1v8AxqAX7h75KBE%3D%2F1400x932%2Fsmart%2Farc-anglerfish-arc2-prod-pmn.s3.amazonaws.com%2Fpublic%2FKD3UAZVARVCD7D5LKGINQDJGNU.jpg&f=1&nofb=1" /> */}
                                    </Segment>
                                )}
                            </Grid.Column>
                        </div>


                        <div class="col-md-12 my-2">
                            {/* {this.CategoryChanage(this.Id)} */}
                            <h4 style = {{textAlign:'center'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg> Your Searching Products    &nbsp;
                                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                                    <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z" />
                                </svg>
                            
                            
                            </h4>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                <div class="row">
                                    {results &&
                                        results.map(item => {
                                            return (

                                                <div class="col-6 col-md-2" style={{ padding: "10px" }}>
                                                <NavLink to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }}>
                                                <div class="thumb-wrapper">
                                                  <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                                                  <div class="img-box">
                                                    <NavLink to={(`/single-product/${item.id}/${item.slug}`)} style={{ textDecoration: 'none', color: 'black' }}>
                                                        <img  src={item.image} class="product__image" alt="" />
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
    )(Searching)
);



