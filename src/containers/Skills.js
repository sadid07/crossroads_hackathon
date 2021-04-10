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




class Skills extends React.Component {

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

                                 
                    <div className='row' style={{marginTop:'70px',}}>

                      
                          <div className='col-md-6' >
                          <div className='row' >
                          <div className='col-md-12 my-3'   style={{display:'inline-block',padding:0}}>
                          <h2 style={{color:'#34315D',fontSize:'30px',fontWeight:'bold'}}> ঘরে বসে Spoken English</h2>



                          <h2 style={{fontWeight:'bold',color:'#34315D'}}> শিক্ষক</h2>



                          </div>
                            <div className='col-md-2' style ={{padding:0}}>

                            <img style={{display:'inline-block',width:'70px',height:'70px',}} src="https://lms10.s3.ap-southeast-1.amazonaws.com/skill-up/spoken-english/instructor.jpg" class="ui medium circular image"/>
                          </div>
                          <div className='col-md-8'   style={{display:'inline-block',padding:0}}>

                          <h5 style={{display:'inline-block',color:'red'}}> Munzereen Shahid</h5>


                            <p style={{display:'inline-block'}} > MS (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5</p>
                          </div>





                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h2> কোর্স কন্টেন্ট</h2>



                          </div>

                          <div  className='col-md-12 '   style={{ fontWeight:"bold", color:"#DE1570",backgroundColor:"#EDEDED"}}>

                            <div class="sortable-accordion">


                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 1: ইন্ট্রোডাকশনঃ জেনারেল ওভারভিউ - ইউএস এপ্লিকেশন প্রসেস</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             

                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px" ,textTransform:'capitalize'}}> Master Class 2: General Overview: SAT</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 3: General Overview: IELTS (VIDEO) </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 4: A to Z of ECAs </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 5: Essays: Common App </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 6: Essays: Supplemental </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 7: Shortlisting Universities </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 8: A toZ Financial Aid </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 9: Recommendation Letters </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 10: Common App Fill Out </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 11: College Resume </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 12: Wait Listed- LOCI</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px",textTransform:'capitalize'}}> Master Class 13: Visa Application Process </h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default"></li>  
                                
                                    </ul> 
                                </div>
                             
                                
                       
                           

                                















                                </div>


                            </div>

                                












                          
                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h2> FAQ </h2>



                          </div>

                                                    <div  className='col-md-12 '   style={{ fontWeight:"bold", color:"#DE1570",backgroundColor:"#EDEDED"}}>

                            <div class="sortable-accordion">


                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}>একাউন্ট কিভাবে খুলবো?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        
                                        <li class="ui-state-default">ওয়েবসাইটের ক্রিয়েট একাউন্ট অপশনে গিয়ে আপনার ইমেইল কিংবা ফোন নাম্বার দিয়ে একাউন্ট খুলতে পারবেন।</li>  
                                
                                    </ul> 
                                </div>
                             


                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}> কোর্সের মেয়াদ কতদিন?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-default">এই কোর্সটি দুইমাস মেয়াদী।</li>  
                                    
                                    </ul> 
                                </div>
                             




                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}>কোর্সে মোট মাস্টারক্লাস কয়টি?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-default">১৬ টি।</li>  
                                      
                                    </ul> 
                                </div>
                             




                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}>কোর্সকি শুধু ভিডিও লেকচারের মধ্যে সীমাবদ্ধ নাকি অন্যকোনো ফিচার আছে কোর্সে?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-star">
                                        এই কোর্সটি দুইমাস ব্যাপী যেখানে আপনি পাবেন ১৬ টি মাস্টারক্লাস। মাস্টারক্লাসের পাশাপাশি আপনি আমাদের “সাপোর্ট” অপশনের মাধ্যমে পাবেন আপনার যেকোনো ধরণের সমস্যার পারসোনালাইজড সমাধান। তাছাড়া “সাপোর্ট” অপশনের মাধ্যমে আপনি আমাদের সাথে আপনার common app essays, common app eca section রিভিও করার ব্যাপারে যোগাযোগ করতে পারেন। তাছাড়া আপনার এপ্লিকেশন সংক্রান্ত যেকোনো সমস্যার সমাধান কিংবা ফিডব্যাক প্রদানের জন্য আমাদের “সাপোর্ট” অপশনের সাথে আপনি যেকোনো সময় যোগাযোগ করতে পারবেন। 
                                        
                                        
                                        </li>  
                                        
                                    </ul> 
                                </div>



                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}> কোর্স করতে কি কম্পিউটার/ল্যাপটপ লাগবে?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-star">
                                        অবশ্যই! যেকোনো স্মার্টফোন, ট্যাবলেট থেকে কোর্স করতে পারবেন।
                                        
                                        
                                        </li>  
                                        
                                    </ul> 
                                </div>
                             

                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}>  ভিডিও ডাউনলোড করার কোনো অপশন আছে?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-star">
                                        না, অফলাইন বা ভিডিও ডাউনলোড করার কোনো অপশন নেই।
                                        
                                        
                                        </li>  
                                        
                                    </ul> 
                                </div>
                             


                                
                                <h3 style ={{fontWeight:"bold", color:"#34315D",fontSize:"16px"}}> সার্টিফিকেট কিভাবে পাবো?</h3>

                                <div class="inner" >
                                    <ul class="sortable">
                                        <li class="ui-state-star">
                                        আপনি কোর্সটির সবগুলো ভিডিও দেখার পর সার্টিফিকেট অপশন চলে আসবে।

                                        
                                        
                                        </li>  
                                        
                                    </ul> 
                                </div>
                             


                                















                             

                            </div>

                                







                        </div>






                          

                             
                        </div>
                      </div>

                      <div className="col-md-6  " id="list-tab" style={{  borderRadius:'10px',marginBottom:'20px',backgroundColor:'#FAFAFA'}}>
                        <div className="row  list-group list-group-item list-group-item-action" style={{margin:'auto', backgroundColor:'#FAFAFA', padding:0, textAlign:'center' ,height:"700px"}} id="list-profile-list" >

                     

                          <div className='col-md-12' >

                            <br></br>
                                
                                  
                                  <ReactPlayer
                                  controls	
                                  width ='513px'
                                  height = '288px'
                                  url='https://www.youtube.com/watch?v=Sa1FTulMYK0' 
                                  />
                          </div>
                        <div className='col-md-12 my-4' >
                          <div className='row ' style = {{textAlign:'center',margin:'auto'}}>



                              <div className='col-4 col-md-4' style={{padding:'1px'}} >

                         


                                <svg   xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#45C881" class="bi bi-alarm" viewBox="0 0 16 16">
                                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                                </svg>
                                <p style={{marginBottom:'15px',fontSize:'15px',marginTop:'10px'}}>সময় লাগবে <br></br>16 ঘন্টা</p>
                                <p></p>



                              </div>


                            <div className='col-4 col-md-4' style={{padding:'1px',textAlign:'center'}}   >

                         


                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFC014" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                              </svg>

                              <p style={{marginBottom:'15px',fontSize:'15px',marginTop:'10px'}}>কোর্সটি করছেন<br></br>44,036 জন</p>
                              <p></p>



                            </div>



                            <div className='col-4 col-md-4' style={{padding:'1px'}}   >

                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#A861FF" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                              </svg>
                              <p style={{marginBottom:'15px',fontSize:'15px',marginTop:'10px'}}>সার্টিফিকেট <br></br>আছে</p>
                              <p></p>



                            </div>

                            <div className='col-7 col-md-5 my-2'  > 
                            <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>

                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px', marginTop:'2px'}}>৮০+ ভিডিও লেকচার</h5>


                              </div>
                              </div>


                            <div className='col-5 col-md-3 my-2'  > 
                            <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>

                        
                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px', marginTop:'2px'}}>৮০+ নোট</h5>
                              </div>


                            </div>




                            <div className='col-5 col-md-3 my-2'  > 
                            <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>

                        
                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px', marginTop:'2px'}}>৮০+ কুইজ</h5>

                              </div>

                            </div>




                            <div className='col-7 col-md-5 my-2'   > 
                            <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>

                        
                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px', marginTop:'2px'}}>৮০+ অডিও লেকচার</h5>

                              </div>

                            </div>




                            <div className='col-6 col-md-3 my-2'  >
                            <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>
 
                        
                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px' ,marginRight:'5px', marginTop:'2px'}}>৮০+ কুইজ</h5>


                              </div>
                              </div>






                            <div className='col-6 col-md-3 my-2'  > 
                              <div  style= {{backgroundColor:'#EAEDED', borderRadius:'30px'}}>
                        
                              <svg  style={{display:'inline-block',backgroundColor:'#45C881',borderRadius:'6px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FAFAFA" class="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                              </svg>

                              <h5 style={{display:'inline-block',fontSize:'16px' ,marginLeft:'10px' ,marginRight:'5px', marginTop:'2px'}}>৮০+ কুইজ</h5>
                              </div>


                            </div>





                          </div>
                        </div>

                      <div className = 'col-md-12'>
                        <div className = 'row'>



                        <div className='col-md-6 my-5' >
                                <h2 style = {{color: '#34315D',fontWeight:"bold"}}> <strike> ৳ 4,500</strike> ৳ 450</h2>
                              </div>


                              <div className='col-md-6 my-5' >
                                <a href ='/payments'>
                                  <button style = {{fontSize:'18px' ,backgroundColor:'#3BC57A', border:'none'}} type="button" class="btn btn-info">কোর্সটি  শুরু করুন  </button>
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


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Skills);
