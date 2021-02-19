import React from "react";
import { connect } from "react-redux";
import axios from "axios";
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
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./productlist.css"
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { endpoint } from "../constants";

class ProductList extends React.Component {
    state = {
        loading: false,
        error: null,
        data: []
    };

    componentDidMount() {
        this.setState({ loading: true });


        axios
            // .get("http://127.0.0.1:8000/shop/products/")
            .get(`${endpoint}/products/`)

            .then(res => {
                this.setState({ data: res.data.results, loading: false });
                console.log(res.data.results);
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    }
    handleAddToCart = slug => {
        this.setState({ loading: true });
        authAxios
            .post(addToCartURL, { slug })
            .then(res => {
                this.props.refreshCart();
                this.setState({ loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };

    render() {
        const { data, error, loading } = this.state;
        return (
            <>
                {error && (
                    <Message
                        error
                        header="There was some errors with your submission"
                        content={JSON.stringify(error)}
                    />
                )}
                {loading && (
                    <Segment>
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>

                        <Image src="/images/wireframe/short-paragraph.png" />
                    </Segment>
                )}
                <Item.Group divided>
                    {data.map(item => {
                        return (
                            <>
                                <Item key={item.id}>
                                </Item>
                                <div className='container-fluid' style={{ background: "#FFFFFF" }}>
                                    <div className='row'>

                                        <div class=" col-md-2 product img-box-shadow ">
                                            <div class="category mb-10 box-element  product-single img-shadow">
                                                <div class="htcatthumb">
                                                    <NavLink to={(`/single-product/${item.id}`)}>
                                                        <img src={item.image} width="200px" height="230px" />
                                                    </NavLink>
                                                </div>
                                                <div class="frhoverinfo">
                                                    <ul class="productaction">
                                                        <li>
                                                            <a href="">
                                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-share btn-p" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z" />
                                                                    <path fill-rule="evenodd" d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                                </svg>
                                                            </a>
                                                        </li>


                                                        <li>
                                                            <a href="/order/addtoshopcart/{{ rs.id }}">

                                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill btn-p" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                        <li>

                                                            <a href="">

                                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-reply-fill btn-p" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L9.079 4.1A.716.716 0 0 0 8 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z" />
                                                                </svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="frproductinner innerposition">
                                                    <h6><NavLink to={(`/single-product/${item.id}`)}>  {item.title}</NavLink></h6>
                                                    <ul class="frproprize text-left ml-text">

                                                    </ul>
                                                    <ul class="rating">
                                                        <li class="oldprize">50 tk</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>













                            </>






                        );
                    })}
                </Item.Group>



            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshCart: () => dispatch(fetchCart())
    };
};









export default connect(
    null,
    mapDispatchToProps
)(ProductList);
