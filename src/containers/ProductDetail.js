import React, { Component, onMouseOver } from 'react'
import { withRouter, Link, NavLink, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Dimmer,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
  Select,
  Divider,
  Radio,
} from "semantic-ui-react";
import { productDetailURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./ProductDetail.css"
import $ from "jquery";
import './Header.css'
import CKEditor from "react-ckeditor-component";
import ProductDetailSliderTop from "./ProductDetailSliderTop"
import ProductDetailSliderMiddel from "./ProductDetailSliderMiddel"
import ProductDetailSliderFooter from "./ProductDetailSliderFooter"
import './zoomsl.js'
import './Home.css'
import { useWindowScroll } from 'react-use';
import ScrollToTop from './ScrollToTop'
import { endpointlocahost ,endpoint} from "../constants";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductDetail.css'





class ProductDetail extends React.Component {
  state = {
    loading: false,
    error: null,
    formVisible: false,
    set: false,

    data: [],
    formData: {},
    radio_name: "",
    set_name: "",
    id: "",
    activateAddDisabledValue: null,
    RelatedpPoductsData:"",
    RelatedpPoductsData2:"",


  };


  componentDidMount() {
    this.handleFetchItem();
    this.imageCheck();
    this.setState({ loading: true });
    this.ImageZoom()
    window.scrollTo(0, 0);



  }



  ImageZoom = () => {



    $(".big_img").imagezoomsl({
      zoomrange: [3, 3]
    })



  }


  handleToggleForm = () => {
    const { formVisible } = this.state;
    this.setState({
      formVisible: !formVisible
    });
  };

  change_image = () => {
    // Image Zooms
    $('.image_id').on("mouseover", function () {

      $(".big_img").attr("src", $(this).attr("src"));


    });


    // Variation Items 
    $('.v__image').on("mouseover", function () {
      $(".big_img").attr("src", $(this).attr("src"));

      var color = ($(this).attr("color"))
      var size = ($(this).attr("size"))
      var quantity = ($(this).attr("size"))
      document.getElementById("color").innerHTML = ` Color : ${color}`;
      document.getElementById("size").innerHTML = ` Size : ${size}`;
      document.getElementById("quantity").innerHTML = ` Quantity : ${quantity}`;

    });

    $('.v__image').on("click", function () {
      var styleid = $(this).attr("id")

    });

  }

  imageCheck = () => {

    $(".small_img").on("hover", function () {
      $(".big_img").attr("src", $(this).attr("src"));

    });

  };


  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({ loading: true });
    localStorage.setItem("ProductID", params.categoryID)

    axios
      .get(productDetailURL(params.productID))
      .then(res => {

        this.setState({ data: res.data, loading: false });
        console.log(res.data,"data")
        window.scrollTo(0, 0);

        this.RelatedpPoductsList()
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleFormatData = formData => {
    // convert {colour: 1, size: 2} to [1,2] - they're all variations
    return Object.keys(formData).map(key => {
      return formData[key];
    });
  };

  handleAddToCart = slug => {



    this.setState({ loading: true });
    const { formData, set } = this.state;
    const variations = this.handleFormatData(formData);
    this.setState({ set: true });

    authAxios
      .post(addToCartURL, { slug, variations })
      .then(res => {

        this.props.refreshCart();
        this.setState({ loading: false });
        document.getElementById("alert-success").style.display = 'inline'
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
        document.getElementById("alert-info").style.display = 'inline'



      });

    setTimeout(function () {
      document.getElementById("alert-success").style.display = 'none'
      document.getElementById("alert-info").style.display = 'none'

    }, 1500);




  };


  handleChange = (e, { name, value }) => {
    const { formData } = this.state;
    const { radio_name } = this.state;
    const updatedFormData = {
      ...formData,
      [name]: value
    };

    this.setState({ formData: updatedFormData });
    this.setState({ radio_name: value })


  };






  change_image1 = event => {
    const { name, title, id, className } = event.target;
    const { formData } = this.state;
    const { radio_name, set_name } = this.state;
    delete formData[set_name]
    const updatedFormData = {
      ...formData,
      [name]: Number(id)
    };
    this.setState({ formData: updatedFormData });
    this.setState({ radio_name: id })
    this.setState({ set_name: name })

    var removeId = formData[set_name]
    if (radio_name.length === 0) {
      var d = document.getElementById(id).style.border = 'black solid 2px'
    } else {
      document.getElementById(radio_name).style.border = 'none'
    }
    document.getElementById(id).style.border = 'black solid 2px'


    const { formVisible, activateAddDisabledValue } = this.state;
    this.setState({
      formVisible: !formVisible
    });
    this.setState({
      activateAddDisabledValue: "activate"
    });

  }

  // ProductDetail 

  CreateProductDetail = () => {
    const { data } = this.state;

    return { __html: data.detail };
  }
  CreateProductDetailImage = () => {
    const { data } = this.state;

    return { __html: data.image_detail };
  }




MessageShow  = () =>{

  const isAuthenticated = localStorage.getItem('token')
  if (isAuthenticated == null){
    this.props.history.push('/login')
  }
 
}



  RelatedpPoductsList = () => {
    const { data } = this.state;

    // console.log(id)
    axios
      .get(`${endpoint}/relatedproductslistView/${data.category}/`)
      .then(res => {

        this.setState({ 
          RelatedpPoductsData: res.data.data,
          RelatedpPoductsData2: res.data.data2, 
          
          loading: false });

        console.log(res)
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };



  ProductChanage = (Id) =>{
    console.log(Id)
    axios
      .get(productDetailURL(Id))
      .then(res => {

        this.setState({ data: res.data, loading: false });
        console.log(res.data)
        window.scrollTo(0, 0);

        this.RelatedpPoductsList()
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });



  }





  render() {
    const { data, error, formData, formVisible, loading, set_name, RelatedpPoductsData, RelatedpPoductsData2} = this.state;
    const item = data;
    
    const {
      match: { params }
    } = this.props;
    var Id = params.productID
    console.log(this.props)
    var ID = localStorage.getItem("ProductID")
    if (Id === ID) {
    }
    else {
      this.ProductChanage(Id)
    }
    localStorage.setItem("ProductID", Id)


    // this.RelatedpPoductsList(data.category_id)
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
      },
      desktop: {
        breakpoint: { max: 3000, min: 1500 },
        items: 8
      },
      tablet: {
        breakpoint: { max: 1500, min: 992 },
        items: 6
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };


    return (
      <>
        {/* <div className='home'> */}
        <div className="container-fluid home " style={{ backgroundColor: 'white', justifyContent:"normal" }}>
          <div className='row home' style={{ backgroundColor: 'white', justifyContent: "normal" }}>




              {/* <div> */}
              {/* .............................. Product Detail in Desktop............................. */}

            <div className='col-md-12 phone__product__detail my-1 '>
                <h5 className='title' id='title'>{item.title}</h5>

              </div>
              <div className="col-md-0.2 desktop__product__detail " style={{ marginTop: '12px' }}>
              <li className='image__position' style={{ marginLeft: "5px" }} >
                  <button className="image__hover__effect__small__img">
                  <img  id="image_id" onMouseEnter={this.change_image} src={`${data.image}`}  className="small_img image_id" alt="" />
                  </button>
                </li>

                {data.images &&
                  data.images.map(v => {
                    return (
                      <li className='image__position' style={{ marginLeft: "5px" }} >
                        <button className="image__hover__effect__small__img">
                          <img id="image_id" onMouseEnter={this.change_image} src={`${v.image}`} className="small_img image_id" alt="" />
                        </button>
                      </li>
                    );
                  })}
              </div>

              <div className="col-md-5 my-3 ">
                <img style={{ maxHeight: "550px", width: "600px" }} id='imagezoom' onMouseEnter={this.ImageZoom} src={item.image} className="big_img img-fluid" alt="" />
              </div>

            <div className="col-md-6 my-2  " >
                <h4 className='title desktop__product__detail' id='title'>{item.title}</h4>
                <br></br>
              <h5> ৳ {item.price}  </h5>
                <h5 className='color' id="color"> </h5>
                <h5 className='size' id="size">  </h5>
                <h5 className='quantity' id="quantity"> </h5>
                <h5 style={this.st}> Shipping Time 5-6 days</h5>
                <h6>{item.description}</h6>

                <div className='row'>
                  <div className='col-md-7'>
                    {data.variations &&
                      data.variations.map(v => {
                        const name = v.title.toLowerCase();
                        const value = v.id
                        return (
                          <>

                            <Radio
                              style={{ display: "inline-block", display: "none" }}
                              className='radio__button'

                              name={v.title}
                              value={v.id}
                              checked={this.state.radio_name === v.id}

                              onChange={this.handleChange}

                            />

                            <button className='variant__image'  >
                              <Image
                                name={name}
                                id={value}

                                src={`${endpointlocahost}${v.image}`}
                                title={v.id}
                                color={v.color}
                                size={v.size}
                                className='v__image'

                                style={{ display: "inline-block", width: "70px", height: "70px" }}
                                onMouseEnter={this.change_image}
                                onClick={this.change_image1}
                                // onClick={this.handleChange}
                                checked={this.state.radio_name === v.id}

                              />
                            </button>


                          </>
                        );
                      })}

                  </div>
                </div>
                {/* {formVisible && ( */}
                {/* <React.Fragment> */}
                <Divider />
                {/* <div class="alert alert-success"  role="alert">
                    A simple success alert—check it out! ....
                  </div> */}
                {/* <br></br> */}
                <div style={{ display: "inline-block" }}>
                  <Form onSubmit={() => this.handleAddToCart(item.slug)} style={{ display: "inline-block" }} >


                    <Form.Button

                      style={{ padding: "8px 14px", margin: "10px 4px", cursor: "pointer", textTransform: "uppercase", textAlign: "center", position: "relative", backgroundColor: "#D0611E" }}
                      onClick={this.MessageShow }

                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>  &nbsp;
                    
                      Add to Cart 
                    </Form.Button>

                  

                  </Form>

                  <NavLink to="/checkout" style={{ display: "inline-block",border:'none' }} type="button">
                    <button className="go__to__cart__button" to="/checkout" type="button" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>  &nbsp;
                      Buy Now
                    </button>
                  </NavLink>
                </div>

                <div id='alert-success' class="alert alert-success" role="alert">
                  Successfully  Added to Cart &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                  </svg>
                </div>


                <div id= 'alert-info'  class="alert alert-info" role="alert">
                  Specify the required variation  &nbsp;
                   
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
              </div>

                {/* <div style={{ display: 'inline-block', background: "#E3EDF7", marginLeft: "73px" }} >
                  <p> <button className="go__to__cart__button" to="/checkout" type="button" >Go to Cart</button></p>

                  <p><button className="go__to__cart__button" to="/checkout" type="button" >Check Out</button> </p>
                </div> */}









                {/* </React.Fragment> */}

                {/* )} */}
              </div>


              {/* .............................. Product Detail in Desktop End............................. */}







              <ScrollToTop></ScrollToTop>


              {/* Products related to this item */}



              <hr></hr>


              {/* ProductDetail */}
            <div className='col-md-12'>
            </div>


            <div className='col-md-5'>
              {/* <div dangerouslySetInnerHTML={this.CreateProductDetail()} ></div> */}
            </div>



              {/* <div className='col-md-12'>
                <ProductDetailSliderFooter></ProductDetailSliderFooter>
              </div> */}




              {/*  */}


            </div>
          </div>
        {/* </div> */}









        {/* <div className='col-md-12' > */}

        <hr></hr>
        <h1>Products related to this item</h1>
        <div>


          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          // arrows ={false}

          >


            {RelatedpPoductsData &&
              RelatedpPoductsData.map(item => {
                return (
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">

                    <div style={{ padding: "10px" }}>
                      <NavLink to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="thumb-wrapper">
                          <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                          <div class="img-box">
                            <NavLink to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>
                              <img src={`${endpointlocahost}/media/${item.image}`} class="product__image" alt="" />
                            </NavLink>
                          </div>
                          {/* <br></br> */}
                          <div class="thumb-content" style={{ marginTop: "10px" }}>
                            <Link class="item-price desktop__product__detail" to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 40)}...</Link>
                            <Link class="item-price phone__product__detail" to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 30)}...</Link>

                            <div class="star-rating">

                              <ul class="list-inline" style={{ display: "contents" }}>

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
                  </div>
                );
              })}
          </Carousel>
        </div>
        {/* </div> */}




        {/* <div className='col-md-12' > */}

        <hr></hr>
        <h1>Products related to this item</h1>
        <div>


          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          // arrows ={false}

          >


            {RelatedpPoductsData2 &&
              RelatedpPoductsData2.map(item => {
                return (
                  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                    <div style={{ padding: "7px" }}>
                      <NavLink to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="thumb-wrapper">
                          <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                          <div class="img-box">
                            <NavLink to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>
                              <img  src={`${endpointlocahost}/media/${item.image}`} class="product__image" alt="" />
                            </NavLink>
                          </div>
                          {/* <br></br> */}
                          <div class="thumb-content" style={{ marginTop: "10px" }}>
                            <Link class="item-price desktop__product__detail" to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 40)}...</Link>
                            <Link class="item-price phone__product__detail" to={(`/single-product/${item.id}`)} style={{ textDecoration: 'none', color: 'black' }} >  {item.title.slice(0, 30)}...</Link>

                            <div class="star-rating">

                              <ul class="list-inline" style={{ display: "contents" }}>

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
                  </div>
                );
              })}
          </Carousel>
        </div>






        <div className='container'>
          <br></br>
          <br></br>
        {/* <div className='col-md-12'> */}
          <div dangerouslySetInnerHTML={this.CreateProductDetail()} ></div>
          <br></br>
          <br></br>
          <div style ={{textAlign:'center'}} dangerouslySetInnerHTML={this.CreateProductDetailImage()} ></div>
        {/* </div> */}


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
  )(ProductDetail)
);
