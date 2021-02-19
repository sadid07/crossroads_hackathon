import React, { Component } from "react";
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
import PhoneHomepageLayout from './PhoneHomepageLayout'
import HomepageLayout from "./Home"
import "./Home.css"
import './Header.css'
import SidebarPhone from "./SidebarPhone"
import axios from 'axios'
import DeskTopHomepageLayoutProduct from './DeskTopHomepageLayoutProduct'
import $ from "jquery";
import { endpoint } from "../constants";

class PhoneSearchbarDropdown extends Component {
    componentDidMount() {
        document.getElementById("phone__searchbar__cros").style.display = 'none';


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

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                this.setState({ results: res.data.results, loading: false });
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




    handleChange = e => {

        this.setState({ loading: true })
        const query = e.target.value;
        let remText = query.replace(/\s/g, "")
        let length = remText.length;
        if (!length) {
            this.setState({ query, results: {}, message: '', totalPages: 0, totalResults: 0 });
            document.getElementById("phone__searchbar__cros").style.display = 'none';

        } else {
            document.getElementById("phone__searchbar__cros").style.display = 'block';

            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }

        const { results } = this.state;
        var d = $('.list-group-item').attr('id')
        if (!this.results) {

            this.setState({ results: [] });


        }

        document.getElementById("search__product__show").style.display = 'flex';
        document.getElementById("search__product__show").style.height = '0px';

    };



    ActiveChange = () => {

        $('.home').on("click", function () {
            document.getElementById("search__product__show").style.display = 'none';
        });
        
        $('.phone__searchbar__header').on("click", function () {
            document.getElementById("search__product__show").style.display = 'none';
        });
        
    }


    InputDataClean =() =>{
        this.setState({ query:"" });
        document.getElementById("search__product__show").style.display = 'none';
        document.getElementById("phone__searchbar__cros").style.display = 'none';

        
    }



    render() {

        const { query, results, active } = this.state;
      
        return (
            <>              
            {this.ActiveChange(this)}
                <div style={{ marginTop: "0px", flex: 1, border: 'none', width: '100%' }}>

                    <div style={{ marginTop: "0px", display: "flex", border: 'none', width: '100%' }}>
                        {/* <NavLink to='#'>    */}
                            <svg onClick={this.InputDataClean} id= 'phone__searchbar__cros' xmlns="http://www.w3.org/2000/svg" style={{ color: '#323439',position:'absolute',right:"65px",marginTop:'9px' }} width="23" height="23" fill="currentColor" class=" phone__searchbar__cros bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        {/* </NavLink>  */}

                        <input
                            class="form-control header__searchInput__phone" 
                            id= 'header__searchInput__phone'
                            type="text"
                            aria-label="default input example"
                            placeholder='Search Orbitplug ):'
                            onChange={this.handleChange}
                            value={query}
                            name="query"
                            style={{padding: "22px", height: "18px", border: 'none', borderRadius: "0px", borderRadius: '10px 0px 0px 10px' }}

                        />
                      
                        <NavLink to={`/searching/${query}`} style={{ textDecoration: "none", color: "black" }}>
                            <SearchIcon  style={{ borderRadius: "0px 10px 10px 0px ", height: 44, width: 44,  backgroundColor: "#ffc266", paddingLeft: '10px', paddingTop: '2px', paddingBottom: '2px' }}  />
                        </NavLink> 
                    
                    </div>

                   
                            <ul id='search__product__show' class="list-group" style={{ flex: 1, border: 'none', width: '100%', }}>

                                {results &&
                                    results.map(v => {
                                        return (

                                            <li class="list-group-item" style={{ padding: '4px' }}>
                                                <img src={v.image} class="rounded float-right" style={{ width: "60px" }} alt="..." />
                                                {/* <img src={v.image}  alt="..." class="rounded"></img> */}
                                                <p>
                                                    {v.title}

                                                </p>

                                                {/* <img src = {v.image} style={{width:"100%" }}></img> */}





                                            </li>
                                        );

                                    })}


                            </ul>


              


                </div>



            </>


        );
    }
}
export default PhoneSearchbarDropdown;
