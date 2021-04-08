import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Item,
  Icon,
  
} from "semantic-ui-react";
import "./Header.css";
import { Link, withRouter ,NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from 'react-bootstrap';
import HeaderBottom from "./HeaderBottom"
import PhoneHomepageLayout from './PhoneHomepageLayout'
import HomepageLayout from "./Home"
import "./Home.css"
import axios from 'axios'
import DeskTopHomepageLayoutProduct from './DeskTopHomepageLayoutProduct'
import { endpoint, endpointauth } from "../constants";
import "./styles.css";
// import './main.js'


class CustomLayout extends React.Component {


  render() {
 

    return (
      <>
      {/* // <!--========== SCROLL TOP ==========--> */}
      <a href="#" class="scrolltop" id="scroll-top">
          <i class='bx bx-chevron-up scrolltop__icon'></i>
      </a>
      
      {/* <!--========== HEADER ==========--> */}
        <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="/" class="nav__logo">crossroads-study</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="/" class="nav__link active-link">Home</a></li>
                        <li class="nav__item"><a href="/dashboard" class="nav__link">Dashboard</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#services" class="nav__link">Services</a></li>
                        <li class="nav__item"><a href="#FAQ" class="nav__link">FAQ</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact us</a></li>
                        
                        <Link to={"/login"} >
                        <li class="nav__item"><a href="#contact" class="nav__link">SignUp</a></li>
                       
                        </Link>






                        {/* <li class="nav__item"><a href="#" class="button">SignUp</a></li> */}

                        <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>

                        

                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>


      {/* ....................................... Desktop Home Body Start .................................................................*/}
        {this.props.children}

      {/* ....................................... Desktop Home Body End.................................................................... */}








      {/* // <!--========== FOOTER ==========--> */}
        <footer class="footer section footer-container">
            <div class="footer__container bd-grid">
                <div class="footer__content">
                    <a href="#" class="footer__logo">crossroads-study</a>
                    <span class="footer__description">Restaurant</span>
                    <div>
                        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Delivery</a></li>
                        <li><a href="#" class="footer__link">Pricing</a></li>
                        <li><a href="#" class="footer__link">Fast food</a></li>
                        <li><a href="#" class="footer__link">Reserve your spot</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Event</a></li>
                        <li><a href="#" class="footer__link">Contact us</a></li>
                        <li><a href="#" class="footer__link">Privacy policy</a></li>
                        <li><a href="#" class="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Address</h3>
                    <ul>
                        <li>Dhaka ,Bangladesh</li>
                        <li>kawsar khan</li>
                        <li>+8801771297948</li>
                        <li>swadexpress@email.com</li>
                    </ul>
                </div>
              










            </div>

            <p class="footer__copy">&#169; 2020 swadexpress. All right reserved</p>
        </footer>

        {/* // <!--========== SCROLL REVEAL ==========--> */}







</>

    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
