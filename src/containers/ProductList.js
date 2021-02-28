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
// import { Link } from "@material-ui/core";
import { NavLink,Link } from "react-router-dom";
import { endpoint } from "../constants";
import './productlist.css'
class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    
      window.scrollTo(0, 0);
  


    axios
      // .get("http://127.0.0.1:8000/shop/products/")
      .get(`${endpoint}/products/`)

      .then(res => {
        this.setState({ data: res.data.results, loading: false });
        window.scrollTo(0, 0);


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


        <>
          <div class="container-fluid home">
            <div class="row home ml-1 mr-1">
              <div class="col-md-12">
                <h2>Featured <b>Products</b></h2>
                <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                  <div class="row">
                    {data.map(item => {
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
