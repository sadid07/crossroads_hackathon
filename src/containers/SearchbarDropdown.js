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
import SidebarPhone from "./SidebarPhone"
import axios from 'axios'
import DeskTopHomepageLayoutProduct from './DeskTopHomepageLayoutProduct'
import $ from "jquery";
import { endpoint } from "../constants";
import { colors } from "@material-ui/core";

class SearchbarDropdown extends Component {
    componentDidMount() {
    
    }
     
    constructor(props) {
        var ac = localStorage.getItem('active')

        super(props);

        this.state = {
            query: '',
            results: [],
            data:"",
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
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }

        const {results } = this.state;
        var d = $('.list-group-item').attr('id')
        if (!this.results) {

            this.setState({ results: [] });


        }

        document.getElementById("show").style.display = 'flex';
        document.getElementById("show").style.height = '0px';

    };

         
    
    ActiveChange = () => {

        const { active } = this.state;


        
        $('.home').on("click", function () {
            document.getElementById("show").style.display='none';
            
        });
        
        $('.desktop__navbar').on("click", function () {
            document.getElementById("show").style.display='none';
            
        });
    }

   


    render() {
     
        const { query, results,active} = this.state;


        return (
            // style = {{ borderRadius: "0 4px 4px 0 ", height: 40, width: 40, background: "red", backgroundColor: "#ffc266", paddingLeft: '8px', paddingTop: '2px', paddingBottom: '2px' }}
<>              {this.ActiveChange(this)}
                <div style={{  marginTop:"0px", flex: 1, border: 'none', width: '100%' }}>
                           
                    <div style={{ marginTop: "0px", display: "flex", border: 'none', width: '100%' }}>
                    <input
                        class="form-control" type="text"
                        aria-label="default input example"
                        placeholder='Search Orbitplug ):'
                        onChange={this.handleChange}
                        value={query}
                        name="query"
                        style={{ padding: "20px", height: "16px", border: 'none', borderRadius: "0px" }}


                    />
                        <NavLink to={`/searching/${query}`} style = {{textDecoration:"none" ,color:"black"}}>
                        <SearchIcon onClick= {this.Searching}  style={{ borderRadius: "0 4px 4px 0 ", height: 40, width: 40, background: "red", backgroundColor: "#ffc266", paddingLeft: '8px', paddingTop: '2px', paddingBottom: '2px' }} />
                    </NavLink>

                    </div>



        
                <ul id='show' class="list-group" style={{ flex: 1, border: 'none', width: '100%', }}>

                    {results &&
                        results.map(v => {
                            return (
                                <li   class="list-group-item" style={{ padding: '4px' }}>
                                    <img src={v.image} class="rounded float-right" style={{ maxWidth: "45px" ,maxHeight:"45px"}} alt="..." />
                                    <p>
                                        {v.title}

                                    </p>

                                </li>
                            );

                        })}


                </ul>


        </div>
                    
                    
                    
</>
           
                          
        );
    }
}
export default SearchbarDropdown;
