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




class Dashboard extends React.Component {

  state = {
    loading: false,
    data: [],
    error: null,
    facebook: '',
    google_class_room: '',
    course: '',
    support: '',
    classroom: '',
    community: '',
  };



componentDidMount() {
    this.setState({ loading: true });
    
      window.scrollTo(0, 0);
  


    axios
      .get(`${endpoint}/DashboardLinkView/`)

      .then(res => {
        window.scrollTo(0, 0);
        this.setState({
          
          facebook: res.data.results[0].facebook, 
          google_class_room: res.data.results[0].google_class_room, 
          course: res.data.results[0].course, 
          support: res.data.results[0].support, 
          classroom: res.data.results[0].classroom, 
          community: res.data.results[0].community, 
          
          
          loading: false });
        window.scrollTo(0, 0);


      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });



      authAxios
      .get(`${endpoint}/userprofile/`)

      .then(res => {
        console.log(res.data.results)
          this.setState({
              loading: false,
              data: res.data.results
          });

      })
      .catch(err => {
          this.setState({ error: err, loading: false });

      });





      
  };



render() {
    const { data, error, loading ,facebook,google_class_room,support,classroom,community,course} = this.state;


    window.scrollTo(0, 0);

    return (


        <div className='container' >
            <div className='row ' style ={{backgroundColor:"#FAFAFA"}}>
                

                      <div className='col-md-12'  >
                        <div className='row'  >



                          <div className='col-md-7' style ={{marginTop:'70px'}}>
                            <div className='row'  style ={{margin:'auto'}}>
                              <div className='col-md-12 '>
                                <br></br>
                                <div  style = {{borderRadius:'20px'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  <img style={{display:'inline-block',width:'70px',height:'70px'}} src="https://lms10.s3.ap-southeast-1.amazonaws.com/skill-up/spoken-english/instructor.jpg" class="ui medium circular image"/>
                                  <div style={{display:'inline-block',marginLeft:'10px',marginTop:'20px',marginBottom:'20px'}}>
                                  { data &&
                                  data.map(v => {
                                      return (
                                    <>

                                      <h5 style={{marginLeft:'10px',color:'#FF039A',fontWeight:'bold'}}> {v.fast_name} {v.last_name}</h5>
                                      <p style={{ marginLeft:'10px'}}> {v.school} {v.college} </p>

                                    </>
                                      );
                                     })}
                                  </div>
                                </div>
                              </div>




                              <div className='col-md-12 '>
                                <br></br>
                                <div style = {{padding:0}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                    
                                    
                                    
                                    <div style={{backgroundColor:"#FF039A" ,padding:0}}>

                                    <svg style={{display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#FFFFFF" class="bi bi-easel-fill" viewBox="0 0 16 16">
                                      <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046L8.473.337z"/>
                                    </svg>
                                      

                                      <h5 style={{ display:'inline-block',backgroundColor:"#FF039A",color:'#F8F9FA',fontWeight:'bold', height:'50px' ,padding:14}}> অ্যানাউন্সমেন্ট</h5>

                                    </div>




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













                                </div>
                              </div>


                              <div className='col-md-12 '>
                                <br></br>
                                <div style = {{padding:0}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                    
                                    
                                    
                                    <div style={{backgroundColor:"#FF039A" ,padding:0}}>

                                    <svg style={{display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#FFFFFF" class="bi bi-easel-fill" viewBox="0 0 16 16">
                                      <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11H7.5v2.5a.5.5 0 0 0 1 0V11h2.592l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9.046L8.473.337z"/>
                                    </svg>
                                      

                                      <h5 style={{ display:'inline-block',backgroundColor:"#FF039A",color:'#F8F9FA',fontWeight:'bold', height:'50px' ,padding:14}}> প্রোফাইল</h5>

                                    </div>


                                    { data &&
                        data.map(v => {
                            return (
                        <>
                            <div class="text-center">
                                {/* <img style={{width:100}} src={v.image} class="rounded" alt="..."/> */}
                            </div>
                            <br></br>
                            <table class="table">
                            
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                        <td>{v.user_name}</td>
                                    </tr>





                                    <tr>
                                        <th scope="row">School</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.school}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">College</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.college}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.email}</td>
                                    </tr>


                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td colspan="2">  </td>
                                        <td></td>

                                        <td>{v.phone}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">address</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.address}</td>
                                    </tr>

                                

                                    <tr>
                                        
                                    </tr>
                                </tbody>
                            </table>
                            
                        </>
                            );
                        })}











                                </div>
                              </div>













                            </div>









                          </div>





                          <div className='col-md-1'  ></div>


                          <div className='col-md-4' style= {{marginTop:"20px"}}  >
                            <div className='row my-5 m-4' style = {{textAlign: 'center',margin:'auto'}}>
                              <div className='col-md-12' style = {{marginTop:'30px'}}>
                                <a href ={classroom}>
                                <div  style = {{borderRadius:'10px'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF039A" class="bi bi-collection-play" viewBox="0 0 16 16">
                                    <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/>
                                    <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"/>
                                  </svg>
                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px'}}> ক্লাসরুম </h5>
                                  </div>

                                </div>
                                </a>

                              </div>


                              <div className='col-md-12 ' style = {{marginTop:'15px'}}>
                              <a href ={community}>

                                <div  style = {{borderRadius:'10px'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  



                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF039A" class="bi bi-people" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                  </svg>





                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px'}}> কমিউনিটি </h5>
                                  </div>

                                </div>
                                </a>


                              </div>




                              <div className='col-md-12 ' style = {{marginTop:'15px'}}>
                              <a href ={course}>

                                <div  style = {{borderRadius:'10px'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  



                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF039A" class="bi bi-book" viewBox="0 0 16 16">
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                  </svg>




                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px'}}> কোর্স </h5>
                                  </div>

                                </div>
                                </a>


                              </div>


                              <div className='col-md-12 ' style = {{marginTop:'15px'}}>
                              <a href ={support}>

                                <div  style = {{borderRadius:'10px'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  


                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF039A" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                  </svg>


                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px'}}> সাপোর্ট </h5>
                                  </div>

                                </div>
                                </a>


                              </div>



                              <div className='col-md-12 ' style = {{marginTop:'15px',}}>
                              <a href ={facebook}>

                                <div  style = {{borderRadius:'10px',backgroundColor:'#0055FF'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  


                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F8F9FA" class="bi bi-facebook" viewBox="0 0 16 16">
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>

                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px',color: 'white'}}> ফেসবুক গ্রুপে জয়েন করুন </h5>
                                  </div>

                                </div>
                                </a>


                              </div>


                              <div className='col-md-12 ' style = {{marginTop:'15px',}}>
                              <a href ={google_class_room}>

                                <div  style = {{borderRadius:'10px',backgroundColor:'#4C9D58'}} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                  


                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#E5B819" class="bi bi-laptop" viewBox="0 0 16 16">
                                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                                                                  
                                  <div style={{display:'inline-block',marginLeft:'10px'}}>

                                      <h5 style={{marginLeft:'10px',color: 'white'}}> গুগোল ক্লাসরুম</h5>
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


    );
}
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Dashboard);
