import React from "react";
import { connect } from "react-redux";
import { Redirect,NavLink } from "react-router-dom";

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
import home from "./img/home.png"
import about from "./img/about.jpg"
import app1 from "./img/app1.png"
import app2 from "./img/app2.png"
import dish from "./img/dish.svg"
import movilapp from "./img/movil-app.png"
import pizza from "./img/pizza.svg"
import plate1 from "./img/plate1.png"
import plate2 from "./img/plate2.png"
import plate3 from "./img/plate3.png"
import truck from "./img/truck.svg"
import image1 from "./img/image1.jpg"
import image2 from "./img/image2.jpg"
import image3 from "./img/image3.jpg"
import image4 from "./img/image4.jpg"

import image5 from "./img/image5.jpeg"
import image6 from "./img/image6.jpeg"
import image7 from "./img/image7.jpeg"
import image8 from "./img/image8.png"
import image9 from "./img/image9.jpeg"


import image10 from "./img/image10.jpg"
import image11 from "./img/image11.JPG"
import image12 from "./img/image12.JPG"
import image13 from "./img/image13.jpg"
import image14 from "./img/image14.jpg"



import Aranya from "./img/Aranya.jpg"
import Tanvir from "./img/Tanvir.png"


import un1 from "./img/un1.png"
import un2 from "./img/un2.jpg"
import un3 from "./img/un3.png"
import un4 from "./img/un4.png"
import un5 from "./img/un5.png"
import un6 from "./img/un6.png"
import un7 from "./img/un7.png"

import wocommaerce from "./img/wocommaerce.png"
import django from "./img/django.png"
import reactjs from "./img/reactjs.jpeg"
import opencart from "./img/opencart.jpeg"
import flask from "./img/flask.png"
import "./styles.css";

import "./Header.css";


class DestTopHome extends React.Component {


    // https://bup.edu.bd/system/uploads/setting/value/29/combocation.jpg



render() {

    window.scrollTo(0, 0);

    return (
    <>

        

<div className='container-fluid my-5'  style ={{backgroundColor:"#FAFAFA"}} >
    <div className='row'style ={{backgroundColor:"#FAFAFA",marginTop:'0px',textAlign:'center'}}>
    <div className='col-md-12'>
            <h2 style ={{color:'#FA3C00'}}>
            MENTORSHIP PLATFORM FOR HIGHER EDUCATION ABROAD
            </h2>

        </div>
        <div className='col-md-3' >         </div>



        <div className='col-md-6 my-5'>
            <h4> ARE YOU LOOKING FOR A SCHOLARSHIP TO STUDY ABROAD?
                 YOU ARE IN THE RIGHT PLACE!
            </h4>

        </div>

    <div className='col-md-6' > 
        <img src={image14} class="img-fluid" alt="..."/>



        </div>


        <div className='col-md-6 my-1' > 
     
    
            <h2 style = {{fontSize:"35px",fontWeight:'bold'}}>    We connect <br></br>
                    International <br></br>
                    University students <br></br>
                    with High School students <br></br>
                    for providing <br></br>
                    one-on-one mentoring <br></br>
                    for studying abroad with <br></br>
                    Scholarships. <br></br>
            </h2>
        </div>


        <div className=' phone_image col-12 my-5' > 

            <img src={image10} class="img-fluid" alt="..."/>

        </div>



        <div className='col-md-6 my-5' > 
        <br></br>
      
        <br></br>
        <br></br>

 
            <h3 style = {{fontSize:"40px",fontWeight:'bold'}}>    
            Our platform allows university <br></br>
            & high-school student <br></br>
            from any country of the world <br></br>
            to sign-up and receive mentoring <br></br>
            by a student <br></br>
            from their <br></br>
            desired university program.<br></br>
                            
                
                
            </h3>
            

        </div>




        <div className='col-md-6 my-5 destop_image' > 

            <img src={image10} class="img-fluid" alt="..."/>



        </div>
        <div className='col-md-2 my-5'>    </div>


    <div className='col-md-8 my-5'>
        <h2 style={{color:'red'}}>LAST YEAR WE HELPED STUDENTS RECEIVE 70+ SCHOLARSHIPS IN TOP UNIVERSITIES!</h2>
        

    </div>

    <div className='col-md-2 '>    </div>


    <div className = 'col-md-12'>
        <div className='row'>

            <div className='col-6 col-md-2 '>   
                <img src={un2} class="img-fluid" alt="..."/>
            </div>

            <div className=' col-6 col-md-2 '>   
                <img src={un3} class="img-fluid" alt="..."/>
            </div>

            <div className=' col-6 col-6 col-md-2 '>   
                <img src={un4} class="img-fluid" alt="..."/>
            </div>

            <div className=' col-6 col-md-2 '>   
                <img src={un5} class="img-fluid" alt="..."/>
            </div>
            <div className=' col-6 col-md-2 '>   
                <img src={un6} class="img-fluid" alt="..."/>
            </div>
            <div className=' col-6 col-md-2 '>   
                <img src={un7} class="img-fluid" alt="..."/>
            </div>


        </div>
    </div>



















    <div className = 'col-md-12 my-5'>
        <div className='row'>
        <div className="col-md-12" style={{fontSize:'50px',color:'red'}}>
        <p>AND MANY MORE!</p>
    </div>

    <div className='col-md-3 '>    </div>


    <div className='col-md-6 '>
        <h1 style={{color:'black',fontWeight:'bold'}}>
            SERVICES WE PROVIDE: <br></br>
            STEP-BY-STEP UNIVERSITY APPLICATION <br></br><br></br>

            SAT One Month Crash Course<br></br><br></br>

            IELTS One Month Crash Course<br></br><br></br>

            WE HELP YOU FOR 8 COUNTRIES
            AMERICA, SOUTH KOREA, GERMANY, LONDON, AUSTRALIA, ARGENTINA, SINGAPORE, TAIWAN

        </h1>
        

    </div>



    <div className="col-md-12 my-5">
        <p style={{fontSize:"45px",color:'black',fontWeight:'bold'}}> JOIN US TODAY <br></br>
                FOR FREE<br></br>
                <span style={{backgroundColor:'#485AFB',color:'white',marginLeft:'10px'}}>  &nbsp; CLICK HERE &nbsp;</span> 
                
                
                
                </p>
               
            

    </div>
 </div>
</div>


















    </div>
</div>
   








         






    </>









    );
}
}



export default DestTopHome;
