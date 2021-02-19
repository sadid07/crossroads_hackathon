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
import { Link, withRouter, NavLink } from "react-router-dom";
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
import { endpoint, endpointauth } from "../constants";


class DesktopNavebar extends React.Component {

    componentDidMount() {
        this.props.fetchCart();

    }
    render() {
        const { authenticated, cart, loading } = this.props;
    return (
         

        <>
            {/* ......................................Navebar Start.................................................. */}
            <div className="main">
                <div className="header">
                    <Link to="/">
                        <img
                            className="header__logo"
                            alt="amazon-logo"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        />
                    </Link>

                    <div className="header__search">
                        <select type="button" className="header__searchSelect">
                            <option selected="selected" value="search-alias=aps">
                                All Categories
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
                        <input className="header__searchInput" type="text" />
                        <SearchIcon style={{ borderRadius: "0 4px 4px 0 ", height: 40, width: 40, background: "red", backgroundColor: "#ffc266", paddingLeft: '8px', paddingTop: '2px', paddingBottom: '2px' }} />
                    </div>

                    <div className="header__nav">
                        {authenticated ? (
                            <>
                                <Link header >
                                    <div className="dropdown">



                                        <div className="header__option header__option1">
                                            <span className="header__optionLineOne">
                                                Hello, {!authenticated ? "Guest" : authenticated.email}
                                            </span>
                                            <span className="header__optionLineTwo">
                                                {authenticated ? "Sign Out" : "Sign In"}
                                                <Icon name='caret down'></Icon>
                                            </span>



                                        </div>

                                        <div className="dropdown-content">
                                            <a style={{ marginTop: "-25px", marginLeft: "170px", fontSize: '28px', zIndex: 1 }}><Icon name=' sort up' style={{ color: "white" }}></Icon></a>
                                            <div className="dropdown-1" >
                                                <Item.Image
                                                    style={{ width: 90 }}
                                                    size="tiny"
                                                    src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmathathumpoly.com%2Fimg_avatar2.jpg&f=1&nofb=1`}
                                                />
                                                <a href="#">Name : Kawsar Khan</a>
                                                {/* <a href="#"> Email : muhammadkawsarkhan@gmail.com</a> */}
                                                <a href="#">Account</a>
                                                <a href="#">Other</a>
                                                <a href="#"> Recommendations</a>
                                                <a href="#">Browsing History</a>
                                                <a href="#">Watchlist</a>
                                                <a href="#">Video Purchases & Rentals</a>
                                                <a href="#">Kindle Unlimited</a>
                                                <a href="#">Content & Devices </a>
                                                {/* <a href="#">Subscribe & Save Items </a>
                          <a href="#">Memberships & Subscriptions </a>
                          <a href="#">Music Library </a> */}

                                            </div>




                                            <div className="dropdown-2">


                                                <a href="#">Account</a>
                                                <a href="#">Other</a>
                                                <a href="#"> Recommendations</a>
                                                <a href="#">Browsing History</a>
                                                <a href="#">Watchlist</a>
                                                <a href="#">Video Purchases & Rentals</a>
                                                <a href="#">Kindle Unlimited</a>
                                                <a href="#">Content & Devices </a>
                                                <a href="#">Link 2</a>
                                                <span className="header__optionLineTwo">
                                                    Sign Out
                            </span>
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </>

                        )
                            :
                            (

                                <Link to={"/login"}>
                                    <div className="header__option header__option1" >
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





                        <Link to="/orders">
                            <div className="header__option header__option2">
                                <span className="header__optionLineOne">Returns</span>
                                <span className="header__optionLineTwo">& Orders</span>
                            </div>
                        </Link>







                        <div className="dropdown__cart " >
                            <div className="header__option__cart header__option2__cart">
                                <div className="header__optionBasket " >
                                    <ShoppingBasketIcon style={{ with: 100 }}
                                    />
                                    <Dropdown
                                        style={{ marginTop: "30px" }}

                                    />
                                    <span className="header__basketCount"> {`${cart !== null ? cart.order_items.length : 0}`}</span>

                                </div>
                            </div>

                            <div className="dropdown__content__cart">


                                <div style={{ marginTop: "-17px", marginLeft: "219px", fontSize: '25px', zIndex: 1 }}><Icon name=' sort up' style={{ color: "white" }}></Icon></div>

                                {cart !== null ? (
                                    <React.Fragment>
                                        {cart.order_items.map(order_item => {
                                            return (
                                                <Dropdown.Item key={order_item.id} style={{ marginLeft: '13px', margin: '10px', boxShadow: "10px rgba(0,0,0,0.2)  ", backgroundColor: 'white' }}>
                                                    <Item.Image
                                                        style={{ width: 90 }}
                                                        size="tiny"
                                                        src={`${endpointauth}${order_item.item.image}`}
                                                    />
                                                    {order_item.quantity} x  { order_item.item.price} $  {order_item.item.title}
                                                </Dropdown.Item>
                                            );
                                        })}
                                        {cart.order_items.length < 1 ? (
                                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                                        ) : null}
                                        <Dropdown.Divider />

                                        <Link to="/order-summary" style={{ marginLeft: "210px", textDecoration: "none", color: 'black' }}> Checkout
                            <Icon name='share' style={{ fontSize: "21px", marginLeft: "11px" }}></Icon>
                                        </Link>

                                    </React.Fragment>
                                ) : (
                                        <Dropdown.Item>No items in your cart</Dropdown.Item>
                                    )}


                            </div>
                        </div>

                        <div className="header__option header__option3">
                            <span className="header__optionLineOne">Try</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>

                    </div>
                </div>

                <HeaderBottom></HeaderBottom>

            </div>

        </>
    );
};
}
export default DesktopNavebar;