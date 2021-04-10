import React from "react";
import { connect } from "react-redux";
import { Redirect,NavLink } from "react-router-dom";
// import Order from "./Order";

import {
  Button,
  Card,
  Dimmer,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Label,
  Loader,
  Menu,
  Message,
  Segment,
  Select,
  Table
} from "semantic-ui-react";

import {
  countryListURL,
  addressListURL,
  addressCreateURL,
  addressUpdateURL,
  addressDeleteURL,
  userIDURL,
  endpoint

} from "../constants";
import { authAxios } from "../utils";
import axios from "axios";
import ReactPlayer from 'react-player'
import DropDown from "react-drop-down-searcher";
import './Dropdown.css'



class Payments extends React.Component {

  state = {
    loading: false,
    error: null,
    data: []
  };



componentDidMount() {
    this.setState({ loading: true });
    
      window.scrollTo(0, 0);
  


    axios
      .get(`${endpoint}/AccountsView/`)

      .then(res => {
        this.setState({ data: res.data.results, loading: false });
        window.scrollTo(0, 0);


      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }



render() {
    const { data, error, loading } = this.state;


    window.scrollTo(0, 0);

    return (


        <div className='container '  style ={{backgroundColor:"#FAFAFA"}}>
            <div className='row '  style ={{backgroundColor:"#FAFAFA"}}>


            <div className='col-md-12'>

                                 
                    <div className='row' style={{marginTop:'100px',}}>

                      
                          <div className='col-md-7' >
                          <div className='row' >
                          <div className='col-md-12' >

                            <br></br>
                                
                                
                                <ReactPlayer
                                controls	
                                width ='513px'
                                height = '288px'
                                url='https://www.youtube.com/watch?v=Sa1FTulMYK0' 
                                />
                            </div>
                       
                          <div  className='col-md-12 my-5'   style={{ fontWeight:"bold", color:"#DE1570"}}>
                            <h2>FAQ</h2>
                          </div>


                          <div  className='col-md-12 '   style={{ fontWeight:"bold", color:"#DE1570",backgroundColor:"#EDEDED"}}>

                            <div class="sortable-accordion">


                                
                                <h3 style ={{fontWeight:"bold",fontSize:"19px"}}>একাউন্ট কিভাবে খুলব</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default">Item 2</li>  
                                        <li class="ui-state-default">Item 3</li>  
                                        <li class="ui-state-default">Item 4</li>  
                                    </ul> 
                                </div>
                             


                                
                                <h3 style ={{fontWeight:"bold",fontSize:"19px"}}>একাউন্ট কিভাবে খুলব</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-default">Item 1</li>  
                                        <li class="ui-state-default">Item 2</li>  
                                        <li class="ui-state-default">Item 3</li>  
                                        <li class="ui-state-default">Item 4</li>  
                                    </ul> 
                                </div>
                             




                                
                                <h3 style ={{fontWeight:"bold",fontSize:"19px"}}>একাউন্ট কিভাবে খুলব</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-default">Item 1</li>  
                                        <li class="ui-state-default">Item 2</li>  
                                        <li class="ui-state-default">Item 3</li>  
                                        <li class="ui-state-default">Item 4</li>  
                                    </ul> 
                                </div>
                             




                                
                                <h3 style ={{fontWeight:"bold",fontSize:"19px"}}>একাউন্ট কিভাবে খুলব</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-star">Item 1</li>  
                                        <li class="ui-state-default">Item 2</li>  
                                        <li class="ui-state-default">Item 3</li>  
                                        <li class="ui-state-default">Item 4</li>  
                                    </ul> 
                                </div>
                             

                            </div>

                                







                        </div>










                          
                        </div>
                      </div>

                      <div className="col-md-5  " id="list-tab" style={{  borderRadius:'10px',marginBottom:'20px',backgroundColor:'#FAFAFA'}}>

                        <div className="row  list-group list-group-item list-group-item-action" style={{ padding:0,margin:'auto', backgroundColor:'#FAFAFA', padding:0, textAlign:'center' ,height:"400px"}} id="list-profile-list" >

                     

                      
                        <div className='col-md-12 ' >
                          <div className='row ' style = {{padding:'0px',textAlign:'center',margin:'auto'}}>



                              <div className='col-12 col-md-12' style={{padding:'0px',backgroundColor:'#FC03A1'}} >

                         

                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FAFAFA" class="bi bi-bag-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                </svg>

                                <p style={{display:'inline-block',marginBottom:'15px',fontSize:'19px',marginTop:'10px'  , fontWeight:'bold', color:'#FAFAFA'}}>আপনার অর্ডার</p>
                                <p></p>



                              </div>



                         

                                <div className='col-6 ' >
                                <p style={{display:'inline-block',marginBottom:'15px',fontSize:'18px',color:'black', fontWeight:"bold",marginTop:'10px'}}>কোর্সের নাম</p>

                                </div>

                                <div className='col-6 ' >
                                    <p style={{display:'inline-block',marginBottom:'15px',fontSize:'18px', color:'black', fontWeight:"bold", marginTop:'10px'}}>মূল্য</p>
                                    <p></p>
                                </div>



                                <div className='col-6 ' >
                                <p style={{display:'inline-block',marginBottom:'15px',fontSize:'12px',color:'black',marginTop:'10px'}}>IELTS A 3 X Course for Beginers</p>

                                </div>

                                <div className='col-6 ' >
                                    <p style={{display:'inline-block',marginBottom:'15px',fontSize:'18px', color:'black', fontWeight:"bold", marginTop:'10px'}}>700 tk</p>
                                    <p></p>
                                </div>






                                <div className='col-12  ' >
                                    <hr></hr>
                                </div>
                                
            

                                <div className='col-6 ' >
                                <p style={{display:'inline-block',marginBottom:'15px',fontSize:'18px',color:'black', fontWeight:"bold",marginTop:'10px'}}>মোট </p>

                                </div>

                                <div className='col-6 ' >
                                    <p style={{display:'inline-block',marginBottom:'15px',fontSize:'18px', color:'black', fontWeight:"bold", marginTop:'10px'}}>400 tk</p>
                                    <p></p>
                                </div>








                                <div className='col-10 m-5 ' >
                                 
                               
                              <a href ='/checkout'>

                                <div  style = {{  borderRadius:'10px',backgroundColor:'#FF029B'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  


                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F8F9FA" class="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                </svg>

                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px',color: 'white'}}> বিকাশ পেমেন্ট করুন</h5>
                                  </div>

                                </div>
                                </a>
                              </div>
                          </div>
                        </div>

                 

                         










                        </div>
                      </div>






















                    </div>



                </div>
            </div>


        </div>


    );
}
}
      
var colours = [{
    name: "Red",
    hex: "#F21B1B"
  }, {
    name: "Blue",
    hex: "#1B66F2"
  }, {
    name: "Green",
    hex: "#07BA16"
  }];

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Payments);
