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




class DestTopHome extends React.Component {


    // https://bup.edu.bd/system/uploads/setting/value/29/combocation.jpg

render() {

    window.scrollTo(0, 0);

    return (
    <>

        

<div className='container-fluid my-5'>
    <div className='row' style ={{marginTop:'0px',textAlign:'center'}}>
    <div className='col-md-12'>
            <h2 style ={{color:'#FA3C00'}}>
            MENTORSHIP PLATFORM FOR HIGHER EDUCATION ABROAD
            </h2>

        </div>
        <div className='col-md-3' >         </div>



        <div className='col-md-6 my-5'>
            <h4>ARE YOU LOOKING FOR A SCHOLARSHIP TO STUDY ABROAD?
                YOU ARE IN THE RIGHT PLACE!
            </h4>

        </div>

    <div className='col-md-6' > 
        <img src={image1} class="img-fluid" alt="..."/>



        </div>


        <div className='col-md-6' > 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h2>    We connect 
                    International 
                    University students 
                    with High School students 
                    for providing 
                    one-on-one mentoring 
                    for studying abroad with 
                    Scholarships. 
            </h2>
        </div>






        <div className='col-md-6' > 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h3>    
            Our platform allows university 
            & high-school student 
            from any country of the world 
            to sign-up and receive mentoring 
            by a student 
            from their 
            desired university program.
                            
                
                
            </h3>
            

        </div>




        <div className='col-md-6' > 

            <img src={image1} class="img-fluid" alt="..."/>



        </div>
        <div className='col-md-2 my-5'>    </div>


    <div className='col-md-8 my-5'>
        <h2 style={{color:'red'}}>LAST YEAR WE HELPED STUDENTS RECEIVE 70+ SCHOLARSHIPS IN TOP UNIVERSITIES!</h2>
        

    </div>

    <div className='col-md-2 '>    </div>


    <div className = 'col-md-12'>
        <div className='row'>

            <div className='col-md-2 '>   
                <img src={un2} class="img-fluid" alt="..."/>
            </div>

            <div className='col-md-2 '>   
                <img src={un3} class="img-fluid" alt="..."/>
            </div>

            <div className='col-md-2 '>   
                <img src={un4} class="img-fluid" alt="..."/>
            </div>

            <div className='col-md-2 '>   
                <img src={un5} class="img-fluid" alt="..."/>
            </div>
            <div className='col-md-2 '>   
                <img src={un6} class="img-fluid" alt="..."/>
            </div>
            <div className='col-md-2 '>   
                <img src={un7} class="img-fluid" alt="..."/>
            </div>


        </div>
    </div>



















    <div className = 'col-md-12 my-5'>
        <div className='row'>


    <div className='col-md-2 '>    </div>


    <div className='col-md-8 '>
        <h4 style={{color:'black'}}>
            SERVICES WE PROVIDE:
            STEP-BY-STEP UNIVERSITY APPLICATION 

            SAT One Month Crash Course

            IELTS One Month Crash Course

            WE HELP YOU FOR 8 COUNTRIES
            AMERICA, SOUTH KOREA, GERMANY, LONDON, AUSTRALIA, ARGENTINA, SINGAPORE, TAIWAN

        </h4>
        

    </div>


    <div className="col-md-12 my-5">
        <h1> JOIN US TODAY
                FOR FREE
                CLICK HERE</h1>
               
            

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
