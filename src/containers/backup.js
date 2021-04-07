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
import Sidebar from "./Sidebar"
import PhoneHomepageLayout from './PhoneHomepageLayout'
import HomepageLayout from "./Home"
import "./Home.css"
import SidebarPhone from "./SidebarPhone"
import axios from 'axios'
import DeskTopHomepageLayoutProduct from './DeskTopHomepageLayoutProduct'
import SearchbarDropdown from './SearchbarDropdown'
import PhoneSearchbarDropdown from './PhoneSearchbarDropdown'
import { endpoint, endpointauth } from "../constants";

class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();

  }
 



  render() {
 
    const { authenticated, cart, loading } = this.props;

    return (
      <div>
      
        <div className='hiden' style={{ background: '#FFFFFF' }}>
{/* ...................................... DeskTop Navbar Start.................................................. */}
      {/* <div class="d-none d-lg-block d-print-block "> */}
        <div className="main continer desktop__navbar" style={{ background: '#FFFFFF' }}>
          <div className="header" style={{ background: '#FFFFFF' , boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
         
            <Link to="/">
              <img
                  className="header__logo header__option header__option2"
                alt="Orbitplug-logo"
                  src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.15752-9/168567436_413299603316840_6757741040653567966_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ZkX4g2nLeQAAX_UsQFX&_nc_ht=scontent.fdac116-1.fna&oh=a4ec505b3d1e78cdabcc760cca9a8ed9&oe=6093AA29"
              />
            </Link>
             
            <div className="header__search">
          

               
          </div>
            
           

          <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">Home</span>
                  </div>
                </Link>


                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">Deshbord </span>
                  </div>
                </Link>


                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">Class</span>
                  </div>
                </Link>




                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">FAQ</span>
                  </div>
                </Link>


                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">ContactUs</span>
                  </div>
                </Link>



                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineTwo">Services</span>
                  </div>
                </Link>







            <div className="header__nav">
              {authenticated ? (
                <>
                  <Link header style={{ textDecoration: 'none', color: 'black' }}>
                      <div className="dropdown" >
                        <div className="header__option header__option1" style={{ marginTop: "5px" }}>
                      <span className="header__optionLineOne">
                        Hello, {!authenticated ? "Guest" : authenticated.email}
                      </span>
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
                         
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>My Account</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Other</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>My Browsing History</Link>
                            <Link to='/order' style={{ textDecoration: 'none', color: 'black' }}>My Orders</Link>
                            <Link to='/allorderproducts' style={{ textDecoration: 'none', color: 'black' }}>My Order Products</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>My Comments</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>My Favorits</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Switch Accounts</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Recommendations</Link>
                            <Link to='#' header onClick={() => this.props.logout()} style={{ textDecoration: 'none', color: 'black' }}>LogOut</Link>
                          <br></br>
                        </div>
                        



                        <div className="dropdown-2">
                         
                            <Link to='/products' style={{ textDecoration: 'none', color: 'black' }}>Shop</Link>
                            <Link to='/payments' style={{ textDecoration: 'none', color: 'black' }}>Your Payment</Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>All Category </Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>Messages </Link>
                            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>ContactUs </Link>
                            
                            <Link to='/profile' style={{ textDecoration: 'none', color:'#787B7D'}}>Terms and Condition </Link>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
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
                      <div className="header__option header__option1" style={{ marginTop: "5px" }} >
                        <span className="header__optionLineOne">
                          Hello, {!authenticated ? "Guest" : authenticated.email}
                        </span>
                        <span className="header__optionLineTwo">
                          {authenticated ? "Sign Out" : "Sign In"}
                        </span>
                      </div>
                    </Link>
            

              )
              }

  
              


   




            </div>
          </div>
 


        
          
         
        </div>
      {/* </div> */}




  {/* ...................................... DeskTop Navbar End............................................................*/}
  {/* ...................................... Phone Navbar Start............................................................*/}
  {/* style={{ background: '#FFFFFF' }} */}
        {/* <div class="d-none d-lg-block d-print-block "> */}
          <div className="main phone__navbar continer" style={{ background:'#FFFFFF'}}>
          <div className=" phone__header " style={{ background: '#FFFFFF' }}>
            {/* <Sidebar style={{marginLeft:"3px",marginTop:"8px",marginBottom:'16px'}}></Sidebar> */}
            <SidebarPhone></SidebarPhone>
           



             
            <Link to="/">
              <img
                className="phone__header__logo"
                alt="Orbitplug-logo"
                src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.15752-9/168567436_413299603316840_6757741040653567966_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ZkX4g2nLeQAAX_UsQFX&_nc_ht=scontent.fdac116-1.fna&oh=a4ec505b3d1e78cdabcc760cca9a8ed9&oe=6093AA29"
                />
            </Link>
           
            

            <div className="header__nav" style={{ position: 'absolute', right: 0 }} >
              {authenticated ? (
                <>
                  <Link header >
                      <div className="header__option header__option1" style={{marginTop:"10px"}}>
                        <span className="header__optionLineOne">
                          Hello, {!authenticated ? "Guest" : authenticated.email}
                        </span>
                        <span className="header__optionLineTwo">
                          {authenticated ? "Sign Out" : "Sign In"}
                          <Icon name='caret down'></Icon>
                        </span>

                      </div>
                  </Link>

                </>

              )
                :
                (

                  <Link to={"/login"} style ={{textDecoration :"none"}}>
                      <div className="header__option header__option1" style={{ paddingTop: "22px", border:"none" }} >
                      <span className="header__optionLineOne">
                       {!authenticated ? "" : authenticated.email}
                      </span>
                      <span className="header__optionLineTwo">
                        {authenticated ? "Sign Out" : "Sign In"}
                      </span>
                    </div>
                  </Link>


                )
              }

        </div>
     



      </div>



         
            

            <div style={{ backgroundColor: "#232f3e" }} className=' col-md-12 secondHeader'>
              <HeaderBottom></HeaderBottom>
            </div>
          {/* </div> */}



       

        </div>
        {/* </div> */}

{/* ...................................... Phone Navbar End............................................................*/}

{/* ....................................... Desktop Home Body Start .................................................................*/}
        {this.props.children}
       {/* <div className='desktop__home__page'>
          <HomepageLayout></HomepageLayout>
        </div>  */}
{/* ....................................... Desktop Home Body End.................................................................... */}


{/* ....................................... Phone Home Body Start.................................................................... */}
        {/* <div className='phone__home__page'> 
          <PhoneHomepageLayout></PhoneHomepageLayout>
       </div>
        */}

{/* ....................................... Phone Home Body End.................................................................... */}

{/* ...................................... Footer Start...................................................................... */}


        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={4}>
                <h5>AboutUs</h5>
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <h5>Payment</h5>
                <List link inverted>
                  <List.Item as="a">Bkash 01771297948 personal</List.Item>
                  <List.Item as="a">Nogot 01771297948 personal</List.Item>
                  <List.Item as="a">Rocket 01771297948 personal</List.Item>
                  <List.Item as="a">Sucrecash 01771297948 personal </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <h5>Contact info</h5>
                <List link inverted>
                  <List.Item as="a">+8801575032874</List.Item>
                  <List.Item as="a">+8801771297948</List.Item>
                  <List.Item as="a">orbitplug@gmail.com</List.Item>
                  <List.Item as="a">orbitplugteam@gmail.com</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <h5>OrbitPlug</h5>
                <p>
                ‘If you should need to contact us for any reason, please do not hesitate. Customer satisfaction is our highest priority. We would love the chance to speak with you.’
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
      </div>
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
