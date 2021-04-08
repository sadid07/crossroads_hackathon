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

import wocommaerce from "./img/wocommaerce.png"
import django from "./img/django.png"
import reactjs from "./img/reactjs.jpeg"
import opencart from "./img/opencart.jpeg"
import flask from "./img/flask.png"


import "./styles.css";




class DestTopHome extends React.Component {




render() {

    window.scrollTo(0, 0);

    return (
    <>

        

<div className='container-fluid'>
    <div className='row' style ={{marginTop:'0px'}}>
        <div className='col-md-12' style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position:'relative', 
            backgroundImage:'url(https://bup.edu.bd/system/uploads/setting/value/29/combocation.jpg)',}}> 
            <div className='row' style={{backgroundColor:'rgba(223, 217, 217, 0.6)',position: "relative"}}>
            
                <div className='col-md-1'></div>
                        
                    <div className='col-md-5' >
                    <h1 class="home__title">crossroads-study</h1>
                    <h4 class="home__subtitle">We connect 
                        International 
                        University students 
                        with High School students 
                        for providing 
                        one-on-one mentoring 
                        for studying abroad with 
                        Scholarships. 
                    </h4>
                
                    </div>

                    <div className='col-md-6'>
                    {/* <!--========== HOME ==========--> */}
                        
                    <img src={image6} alt="" class="home__img"/>
                    </div>




                    
                <div className='col-md-6 m-5 my-5'>
                        
                    <img src={image7} alt="" class="about__img"/>
                            
                </div>
                            
                <div className='col-md-5 my-5'style = {{textAlign: 'center'}}>
                    <div class="about__data">
                        <h2 >About us</h2>

                        <h2 style={{color:'red'}}>We cook the best <br/> crossroads-study</h2>
                        <p style={{fontSize:'18px'}} >
                            Our platform allows university 
                            & high-school student 
                            from any country of the world 
                            to sign-up and receive mentoring 
                            by a student 
                            from their 
                            desired university program.
                        </p>
                        <a href="#" class="button">Explore history</a>
                    </div>
                </div>
            </div>

        </div>

        <div className='col-md-12' style={{ 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position:'relative', 
            backgroundImage:'url(https://bup.edu.bd/system/uploads/setting/value/26/bup_final.jpg)',}}> 
            
            <div className='row' style={{backgroundColor:'rgba(223, 217, 217, 0.6)',position: "relative"}}>
                <div className='col-md-12 '>
                    <h2 class="section-title">Achievement</h2>
                </div>

                <div class="col-md-1">  </div>



                <div class="col-md-2">
                        <div class="menu__content">
                            <img src={Aranya} alt="" class="menu__img"/>
                            <h3 class="menu__name">Aranya Kishor Das</h3>
                            <span class="menu__detail"> Saint Lawrence University</span>
                            <span class="menu__detail"> Lawrence International Scholarship</span>
                            <span class="menu__preci"> Amoun $40,000</span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </div>
                    </div>


                    <div class="col-md-2">
                        <div class="menu__content">
                            <img src={Aranya} alt="" class="menu__img"/>
                            <h3 class="menu__name">Aranya Kishor Das</h3>
                            <span class="menu__detail"> Saint Lawrence University</span>
                            <span class="menu__detail"> Lawrence International Scholarship</span>
                            <span class="menu__preci"> Amoun $40,000</span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <div class="menu__content">
                            <img src={Aranya} alt="" class="menu__img"/>
                            <h3 class="menu__name">Aranya Kishor Das</h3>
                            <span class="menu__detail"> Saint Lawrence University</span>
                            <span class="menu__detail"> Lawrence International Scholarship</span>
                            <span class="menu__preci"> Amoun $40,000</span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </div>
                    </div>




                    <div class="col-md-2">


                        <div class="menu__content">
                            <img src={Tanvir} alt="" class="menu__img"/>
                            <h3 class="menu__name">Tanvir Rahman Khan</h3>
                            <span class="menu__detail"> Saint Lawrence University</span>
                            <span class="menu__detail"> Lawrence International Scholarship</span>
                            <span class="menu__preci"> Amoun $140,000 </span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </div>
                    </div>
                    <div class="col-md-2">

                        
                        <div class="menu__content">
                            <img src={Tanvir} alt="" class="menu__img"/>
                            <h3 class="menu__name">Aranya Kishor Das</h3>
                            <span class="menu__detail"> Saint Lawrence University</span>
                            <span class="menu__detail"> Lawrence International Scholarship</span>
                            <span class="menu__preci"> Amoun $140,000 </span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </div>
                    </div>

         
             
    

             
       


        

            {/* <!--===== APP =======--> */}
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">App</span>
                        <h2 class="section-title app__initial">App is aviable</h2>
                        <p class="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div class="app__stores">
                            <a href="#"><img src={app1} alt="" class="app__store"/></a>
                            <a href="#"><img src={app2}alt="" class="app__store"/></a>
                        </div>
                    </div>

                    <img src={image9} alt="" class="app__img"/>
                </div>
            </section>

            </div>
        </div>

    <div className="col-md-12">
        <div className="row my-5" >


        <div className='col-md-2'>  
                <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                    <div  class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                        <img  src={flask}  class="rounded float-start" alt="..."/>
                            
                     </div>
                </div>

            </div>

            <div className='col-md-2'>  
                <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                    <div  class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                        <img  src={reactjs}  class="rounded float-start" alt="..."/>
                            
                     </div>
                </div>

            </div>

            <div className='col-md-2'>  
                <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                    <div  class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                        <img  src={django}  class="rounded float-start" alt="..."/>
                            
                     </div>
                </div>

            </div>

        
            <div className='col-md-2'>  
                <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                    <div  class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                        <img  src={wocommaerce}  class="rounded float-start" alt="..."/>
                            
                     </div>
                </div>

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
