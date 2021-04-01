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
        <div className="main continer desktop__navbar">
          <div className="header">
         
            <Link to="/">
              <img
                  className="header__logo header__option header__option2"
                alt="Orbitplug-logo"
                  src="http://kawsarkhan.com/media/images/133745315_735139640541625_7317427978315017007_n.png"
              />
            </Link>
              <div className="header__option header__option header__option2" style = {{marginRight:"5px"}}>
                <span className="header__optionLineOne">Deliver to</span>
                <span className="header__optionLineTwo">Bangladesh DS</span>
              </div>
            <div className="header__search">
              <select type="button" className="header__searchSelect">
                <option selected="selected" value="search-alias=aps">
                  All
            </option>
                <option value="search-alias=todays-deals">Deals</option>
                <option value="search-alias=alexa-skills">Alexa Skills</option>
                <option value="search-alias=amazon-devices">Amazon Devices</option>
                <option value="search-alias=fashion">Amazon Fashion</option>
                <option value="search-alias=pantry">Amazon Pantry</option>
                <option value="search-alias=appliances">Appliances</option>
                <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                <option value="search-alias=baby">Baby</option>
                <option value="search-alias=beauty">Beauty</option>
                <option value="search-alias=stripbooks">Books</option>
                <option value="search-alias=automotive">Car &amp; Motorbike</option>
                <option value="search-alias=apparel">
                  Clothing &amp; Accessories
            </option>
                <option value="search-alias=collectibles">Collectibles</option>
                <option value="search-alias=computers">
                  Computers &amp; Accessories
            </option>
                <option value="search-alias=electronics">Electronics</option>
                <option value="search-alias=furniture">Furniture</option>
                <option value="search-alias=lawngarden">
                  Garden &amp; Outdoors
            </option>
                <option value="search-alias=gift-cards">Gift Cards</option>
                <option value="search-alias=grocery">
                  Grocery &amp; Gourmet Foods
            </option>
                <option value="search-alias=hpc">Health &amp; Personal Care</option>
                <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                <option value="search-alias=industrial">
                  Industrial &amp; Scientific
            </option>
                <option value="search-alias=jewelry">Jewellery</option>
                <option value="search-alias=digital-text">Kindle Store</option>
                <option value="search-alias=luggage">Luggage &amp; Bags</option>
                <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                <option value="search-alias=popular">Music</option>
                <option value="search-alias=mi">Musical Instruments</option>
                <option value="search-alias=office-products">
                  Office Products
            </option>
                <option value="search-alias=pets">Pet Supplies</option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                <option value="search-alias=software">Software</option>
                <option value="search-alias=sporting">
                  Sports, Fitness &amp; Outdoors
            </option>
                <option value="search-alias=home-improvement">
                  Tools &amp; Home Improvement
            </option>
                <option value="search-alias=toys">Toys &amp; Games</option>
                <option value="search-alias=under-ten-dollars">Under ₹500</option>
                <option value="search-alias=videogames">Video Games</option>
                <option value="search-alias=watches">Watches</option>
              </select>
      {/* .............................................Search ..................................................... */}
             
            
              {/* <div className='header__searchInput'> */}

                <SearchbarDropdown></SearchbarDropdown>
          



             {/* </div> */}
            
               
          </div>
            
           








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

  
              
                <Link to="/allreturnsorderproductslist" style={{ textDecoration: 'none', color: 'black' }}>
                  <div className="header__option header__option2" style={{ marginTop: "5px" }}>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& OrdersD</span>
                  </div>
                </Link>

{/* ................................ Start Shop Card..................................................... */}





              <div className="dropdown__cart " >
                  <div className="header__option header__option2" style={{ marginTop: "5px", marginRight: '15px'}} >
                    <NavLink to='/order-summary'>
                      <div className="header__optionBasket " >
                          <ShoppingBasketIcon style={{width:'30px', height:'35px',marginRight:"3px"}}

                            />
                        
                          

                        
                          <span className="header__basketCount"> {`${cart !== null ? cart.get_total_quantites : 0}`}</span>

                            <svg  style ={{marginTop:'25px',marginLeft:"-13px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                            </svg>

                      </div>
                    </NavLink>
                  </div>
        
                <div className="dropdown__content__cart">
                  

                  <div className ='card__dropdown__icon'><Icon name=' sort up' style={{ color: "white" }}></Icon></div>

                  {cart !== null ? (
                    <React.Fragment>
                      {cart.order_items.map(order_item => {
                        return (
                          <Dropdown.Item key={order_item.id} style={{ marginLeft: '13px', margin: '10px', boxShadow: "10px rgba(0,0,0,0.2)  " ,backgroundColor:'white' }}>
                            <Item.Image
                              style={{ width: 45 ,height:45}}
                              size="tiny"
                              src={`${endpointauth}${order_item.item.image}`}
                            /> &nbsp;
                            {order_item.quantity} x  { order_item.item.price} tk  {order_item.item.title.slice(0, 35)}... 
                          </Dropdown.Item>
                        );
                      })}
                      {cart.order_items.length < 1 ? (
                          <>
                          <div>
                            <Dropdown.Item style={{ marginLeft: "50px", display: "inline" }}>No items in your cart</Dropdown.Item>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "15px" }} width="30" height="30" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
                              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                              <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z" />
                            </svg>
                            <Dropdown.Item style={{ marginLeft: "5px", display: "inline" }}> Please Add Product </Dropdown.Item>
                          </div>
                            <br></br>
                          </>
                      ) : null}
                      <Dropdown.Divider />

                      <Link to="/order-summary" style={{ marginLeft: "210px" ,textDecoration:"none" ,color:'black'}}> Checkout   
                            <Icon name='share' style={{ fontSize: "21px" , marginLeft:"11px"}}></Icon>
                        </Link>
                   
                    </React.Fragment>
                  ) : (<><div>
                        <Dropdown.Item style={{ marginLeft: "50px"  ,  display: "inline"}}>No items in your cart</Dropdown.Item>
                        <svg xmlns="http://www.w3.org/2000/svg" style = {{marginLeft:"15px"}} width="30" height="30" fill="currentColor" class="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
                          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                          <path d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z" />
                        </svg>
                        <Dropdown.Item style={{ marginLeft: "5px", display: "inline" }}> Please LogIn and  Add to Product </Dropdown.Item>
                      </div>
                        <br></br>
                      </>
                     
                    )}


                </div>
              </div>
   
                {/* ................................ End Shop Card..................................................... */}

                {/* ................................ Start ContactUs..................................................... */}


                {/* <Link to="/orders">
                  <div className="header__option header__option2" style={{ marginRight: '10px', marginTop: "9px"  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                      <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                    </svg>
                  </div>
                </Link> */}

                {/* ................................ End ContactUs..................................................... */}









            </div>
          </div>
 

            <div className='row' style={{ backgroundColor: "#232f3e" }}>
              <div className='col-md-1' style={{ display: 'flex', margin: 0, padding: 0}} >
                  <Sidebar></Sidebar>
                <NavLink style={{ marginTop: "10px" ,textDecoration:'none' }} to = '/'>
                    <span className="secondHeader__btn" style={{marginTop:"8px" ,marginBottom:"14px"}}> Home 
                    
                    </span>
                </NavLink>

                </div>
                 {/* className="secondHeader"  */}
            <div className='col-md-11 secondHeader'>
                    <HeaderBottom></HeaderBottom> 
                  </div>
                  
            </div>
        
          
         
        </div>
      {/* </div> */}




  {/* ...................................... DeskTop Navbar End............................................................*/}
  {/* ...................................... Phone Navbar Start............................................................*/}

        {/* <div class="d-none d-lg-block d-print-block "> */}
          <div className="main phone__navbar continer" style={{ background:'#232F3E'}}>
          <div className=" phone__header " style={{ background: '#232F3E' }}>
            {/* <Sidebar style={{marginLeft:"3px",marginTop:"8px",marginBottom:'16px'}}></Sidebar> */}
            <SidebarPhone></SidebarPhone>
           



             
            <Link to="/">
              <img
                className="phone__header__logo"
                alt="Orbitplug-logo"
                src="http://kawsarkhan.com/media/images/133745315_735139640541625_7317427978315017007_n.png"
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
{/* ............................... Start Phone Shop Card.............................................. */}









                <div className="header__option__cart header__option2__cart" style={{ marginRight: '12px' ,border:"none" }}>
                  <NavLink to='/order-summary' style={{textDecoration:"none"}}>

                    <div className="header__optionBasket  " style={{ marginTop:"6px" }} >
                        <ShoppingBasketIcon style={{ width: '30px', height: '35px' }}                
                        />

                        <span className="header__basketCount"> {`${cart !== null ? cart.order_items.length : 0}`}</span>

                    </div>
                  </NavLink>
                </div>
                {/* ............................... End Phone Shop Card.............................................. */}

        </div>
     



      </div>

{/* ............................... Start Phone  Searchbar .............................................. */}

            <div className='row phone__searchbar__header' style={{ backgroundColor: "#232f3e", marginLeft: 0, marginRight: 0,}} >

              <div className=' col-md-12' style ={{marginTop:'11px'}}>
                <PhoneSearchbarDropdown></PhoneSearchbarDropdown>
              </div>
            </div>



{/* ............................... End Phone  Searchbar .............................................. */}

          


            {/* <div className='row ' style={{ backgroundColor: "#232f3e" }}> */}
         
            

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
