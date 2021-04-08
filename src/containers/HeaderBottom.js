//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link, withRouter, NavLink } from "react-router-dom";
import './Header.css'
import React from "react";
import "./Header2.css"
import './Home.css'
import { endpoint } from "../constants";
import axios from "axios"
//Owl Carousel Settings
const options = {
    // margin: 30,
    autoWidth:true,
    navText: [],
    responsiveClass: true,
    nav: true,
    autoplay: false,
    smartSpeed: 1000,

    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 15,
        }
    },
};
class HeaderBottom extends React.Component {

    render() {
        // const { data } = this.state

        return (
        
                <OwlCarousel {...options} >
                    <NavLink to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                            Products 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/3" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        Books 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/7" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        Cosmetic 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/4" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                            Crafts 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/1" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        Drone 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/5" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        Electronics 
                        </span> 
                    </NavLink>  
                    <NavLink to="/category-products/2" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        Gift Ideas 
                        </span> 
                    </NavLink>  
                       
                    <NavLink to="/category-products/6" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="secondHeader__btn sidebar" >
                        T-shirt 
                        </span> 
                    </NavLink>  
                       






























                {/* {data &&
                    data.map(v => {
                        return (
                            <NavLink to="/products" style={{ textDecoration: 'none', color: 'white' }}>


                            </NavLink>  
                       );

                    })} */}

                </OwlCarousel>
          
        )
    };
}
export default HeaderBottom;

















// <span className="secondHeader__btn">  Today's Deals </span>
// <span className="secondHeader__btn"> Computers </span>
// <span className="secondHeader__btn"> Pantry </span>
// <span className="secondHeader__btn"> Books </span>
// <span className="secondHeader__btn"> Gift Ideas </span>
// <span className="secondHeader__btn"> Customer Service </span>
// <span className="secondHeader__btn"> Amazon Pay </span>
// <span className="secondHeader__btn"> Sell </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
// <span className="secondHeader__btn"> Products </span>
