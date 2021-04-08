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


        <div className='container-fluid'>
            <div className='row '>
                



            <div className='col-md-12'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                                 
                    <div className='row'>
                    {data.map(v => {
                        return (
    
                        <div className='col-md-2'>
                            <br></br>
                            <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                              <div to={`/${v.link}`} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                <div className='row' style = {{textAlign: 'center'}}>
                                  <div className="col-md-12">
                                    <img style ={{width:"50px",height:"50px",display:"inline-block"}} src={v.image}  class="rounded float-start" alt="..."/>
                                  </div>
                                  <div className='col-md-12'>
                                    <p style={{display:'inline-block'}}> {v.name}</p>
                                  </div>
                                
                                 
                                </div>
                              </div>
                            </div>
                        </div>
                           
                              );
                            })}
                    
                    </div>
                </div>














            <div className='col-md-12'>

                                 
                    <div className='row'>

    
                        <div className='col-md-3'>

                            <br></br>
                            <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                                
                              <div class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                <div className='row' >
                                <div className="col-md-12">

                                <h4 style={{display:'inline-block',marginLeft: "15px",marginBottom: "15px"}}>Student Profile</h4>
                                </div>


                                  <div className="col-md-5">
                                    <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/156861081_1694038750780672_8760087133798661380_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lIbQ-obObfwAX9hXWCd&_nc_ht=scontent.fdac116-1.fna&oh=1a5e9fe734f4693b6f20151e89f59ceb&oe=60933519" class="ui medium circular image"/>
                                  </div>
                                  <div className='col-md-7' >
                                  <h5 style={{display:'inline-block'}}>Kawsar khan</h5>
                                  <h6 style={{display:'inline-block'}}> ID : 0000825401 </h6>
                                  <h6 style={{display:'inline-block'}}>Class : Nine </h6>
                                  </div>
                               
                                 
                                </div>
                                <div className="col-md-12" style ={{textAlign: 'center'}}>

                                    <button style = {{marginTop:'10px',marginBottom:'10px'}} type="button" class="btn btn-info">Edit Profile</button>
                                </div>

                              </div>
                            </div>
                        </div>




                        <div className='col-md-3'>

                            <br></br>
                            <div style={{borderRadius:"10px"}} class="list-group" id="list-tab" role="tablist">
                                
                              <div class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                <div className='row' >
                                    <div className="col-md-12">

                                        <h4 style={{display:'inline-block',marginLeft: "15px",marginBottom: "15px"}}>Next Payment</h4>
                                    </div>
                                    <div className="col-md-12" style={{textAlign: "center"}}>
                                        <br></br>

                                        <h3 style={{color:'red'}}>Taka 1300</h3>
                                        <hr></hr>


                                    </div>
                                </div>
                                <div className="col-md-12" style ={{textAlign: 'center'}}>


                                    <button style = {{marginTop:'25px',marginBottom:'10px'}} type="button" class="btn btn-info">Make Payment</button>
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

export default connect(mapStateToProps)(Dashboard);
