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
 
    const { authenticated, cart, loading } = this.props;
    return (
      <>
      {/* // <!--========== SCROLL TOP ==========--> */}
      <a href="#" class="scrolltop" id="scroll-top">
          <i class='bx bx-chevron-up scrolltop__icon'></i>
      </a>
      
      {/* <!--========== HEADER ==========--> */}
        <header class="l-header" id="header" >
            <nav class="nav bd-container">
                <NavLink style={{ textDecoration: 'none', color: 'black',fontWeight:"bold" }} to="/" class="nav__logo">crossroads-study</NavLink>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/" class="nav__link active-link">Home</NavLink></li>
                        <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/about" class="nav__link">About</NavLink></li>
                        {/* <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/services" class="nav__link">Services</NavLink></li> */}
                        {/* <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/FAQ" class="nav__link">FAQ</NavLink></li> */}
                        <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/contact" class="nav__link">Contact us</NavLink></li>
                        <li class="nav__item"><a style={{ textDecoration: 'none', color: 'black' }} href="/skills" class="nav__link"> Our Course </a></li>
                        {/* <li class="nav__item"><a style={{ textDecoration: 'none', color: 'black' }} href="/payments" class="nav__link"> Payments </a></li> */}
                        <li class="nav__item"><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard" class="nav__link">Dashboard</NavLink></li>

                        {authenticated ? (
                <>
                  <Link header style={{ textDecoration: 'none', color: 'black' }}>
                      <div className="dropdown" >
                        <div className="header__option header__option1" style={{ marginTop: "1px",marginLeft: "25px"}}>
                   
                      <span className="header__optionLineTwo">
                        {authenticated ? "Sign Out" : "Sign In"}
                            <svg xmlns="http://www.w3.org/2000/svg"  style={{marginLeft:'3px'}} width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                      </span>
                    </div>
                     
                    <div className="dropdown-content">
                        <a className ='singup__dropdown__icon' ><Icon name=' sort up' style={{color:"white" }}></Icon></a>
                        <div className="dropdown-1" >
                         
                            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>                          
                            <Link to='#' header onClick={() => this.props.logout()} style={{ textDecoration: 'none', color: 'black' }}>LogOut</Link>
                          <br></br>
                        </div>
                        



                      
                    </div>
                    </div>

              </Link>

             </>

              )
              :
              (

                <Link to={"/login"} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="header__option header__option1" style={{marginLeft:'25px', marginTop:'1px'}} >
                
                  <span className="header__optionLineTwo">
                    {authenticated ? "Sign Out" : "SignIn"}
                  </span>
                </div>
              </Link>
            

              )
              }



                        {/* <li class="nav__item"><a href="#" class="button">SignUp</a></li> */}

                        <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>

                        

                    </ul>
                </div>

                {/* <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div> */}


                <div class="nav__toggle" id="nav-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </nav>
        </header>


      {/* ....................................... Desktop Home Body Start .................................................................*/}
        {this.props.children}

      {/* ....................................... Desktop Home Body End.................................................................... */}








      {/* // <!--========== FOOTER ==========--> */}
        <footer class="footer section footer-container" >
            <div class="footer__container bd-grid">
                {/* <div class="footer__content">
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
               */}










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
