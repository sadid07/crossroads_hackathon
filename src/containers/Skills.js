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
                            <h2> এই কোর্স সম্পর্কে</h2>



                          </div>

                          <div className='col-md-12 my-3'   style={{display:'inline-block'}}>
                            <h5 style={{fontWeight:'bold',color:'#34315D'}}> ১) কোর্সটি কাদের জন্যে? </h5>
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * যারা যুক্তরাষ্ট্রে আন্ডারগ্র্যাজুয়েট পড়তে চান।  </p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * নবম থেকে দ্বাদশ শ্রেণির শিক্ষার্থী এবং যারা গ্যাপ ইয়ারে আছেন বর্তমানে </p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * যারা কোনো প্রকার এজেন্সির সহায়তা ছাড়া নিজে নিজে-ই  আবেদন করতে চান।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * যারা যুক্তরাষ্ট্রের সেরা বিশ্ববিদ্যালয়ে পড়ুয়া বাংলাদেশি শিক্ষার্থীদের কাছ থেকে সরাসরি গাইডলাইন পেতে চান।</p>      
                            



                          </div>



                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h5 style={{fontWeight:'bold',color:'#34315D'}}> ২) একজন শিক্ষার্থীর কেন এই কোর্সটি করা উচিত?</h5>
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * কোর্সটি করা যাবে যেকোনো সময়, যেকোনো জায়গায় নিজের ফোন থেকেই</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * ১৬ টি মাস্টারক্লাসের মাধ্যমে জটিল এপ্লিকেশন প্রসেসকে সহজে-ই শিক্ষার্থীদের বোধগম্য করে দেয়া হবে।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * বিশ্ববিদ্যালয় পছন্দ করা ও ফিনান্সিয়াল এইড/স্কলারশীপ বিষয়ক এক্সটেন্সিভ মাস্টারক্লাস</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * কমন এপ্লিকেশন পূরণের এক্সক্লুসিভ ট্রিক্স যা আপনাকে অবশ্যই বাকি এপ্লিকান্টদের থেকে আলাদা করে তুলবে।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * যুক্তরাষ্ট্রের সেরা বিশ্ববিদ্যালয়গুলোতে অধ্যয়নরত বাংলাদেশি শিক্ষার্থীরা মাস্টারক্লাসগুলো নিয়ে থাকবে।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * স্যাট ও আইইএলটিএস নিয়ে থাকবে এক্সক্লুসিভ মাস্টারক্লাস</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * রেকমেন্ডেশন লেটার, essays নিয়ে থাকবে  মাস্টারক্লাস</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * কোর্স শেষে আপনার এপ্লিকেশন রিভিউ এর  সুযোগ।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * ক্রসরোডস ইনিশিয়েটিভের কমিউনিটি “CrossRoads Study Abroad” গ্রুপের এক্সেস।</p>      


                          </div>






                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h5 style={{fontWeight:'bold',color:'#34315D'}}> ৩) কোর্সটি কোন সমস্যাগুলোর সমাধান করবে?</h5>
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * শেখা যাবে যখন খুশি যেখানে খুশি, নিজের ফোনেই।</p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * বিভিন্ন এজেন্সিগুলোর পিছনে কাড়ি কাড়ি টাকা না ঢেলে নিজের এপ্লিকেশন নিজেই করতে পারবেন।</p>      


                          </div>


                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h5 style={{fontWeight:'bold',color:'#34315D'}}> ৪) যে কয়টি কনটেন্ট ফ্রি তে পাবেন: </h5>
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * কোর্সে মোট ১৬ টি মাস্টারক্লাস রয়েছে। ১ম লেকচারের ৫টি কনটেন্ট অর্থাৎ ভিডিও, কুইজ, ট্রান্সক্রিপ্ট, নোট এবং অডিওবুক এই ৫টি কনটেন্টই ফ্রি। আর ২য়-৫ম ক্লাসের ক্ষেত্রে শুধু ভিডিওগুলো ফ্রিতে দেখা যাবে। বাকি কনটেন্টগুলো দেখতে হলে কোর্সটি কিনতে হবে</p>      
                            
  


                          </div>





                          <div className='col-md-12 my-5'   style={{display:'inline-block'}}>
                            <h5 style={{fontWeight:'bold',color:'#34315D'}}> ৫) যেভাবে কিনবেন: </h5>
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * নিজের মোবাইল নাম্বার দিয়ে লগ ইন অথবা সাইন আপ করুন </p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * কোর্সের নিচের “Buy Now” অপশন ক্লিক করুন  </p>      
                            <p style={{ marginLeft:'30px',fontSize:'16px'}}> * পেমেন্টের ধরণ নির্বাচন করে পেমেন্ট সম্পন্ন করুন  </p>      
  


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
                                <p style={{marginBottom:'15px',fontSize:'15px',marginTop:'10px'}}>সময় লাগবে <br></br>20 ঘন্টা</p>
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
                              <button style = {{fontSize:'18px' ,backgroundColor:'#3BC57A', border:'none'}} type="button" class="btn btn-info">কোর্সটি  শুরু করুন  </button>


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
