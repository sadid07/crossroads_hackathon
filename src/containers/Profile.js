import React from "react";
import { connect } from "react-redux";
import { Redirect,NavLink } from "react-router-dom";
// import Order from "./Order";
import PaymentHistory from "./PaymentHistory"
import AddressForm from "./AddressForm"
import UserProfile from "./UserProfile"
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

const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";


class Profile extends React.Component {

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

    const isAuthenticated = localStorage.getItem('token')
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }
    window.scrollTo(0, 0);

    return (


        <div className='container my-5'>
            <div className='row '>
                <div className='col-md-12'>
                    <div className='row'>
                    {data.map(v => {
                        return (
    
                            <div className='col-md-4'>
                            <br></br>
                            <div class="list-group" id="list-tab" role="tablist">
                              <NavLink to={`/${v.link}`} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                                <div className='row'>
                                  <div className="col-md-3">
                                    <img style ={{width:"55px",height:"50px",display:"inline-block"}} src={v.image}  class="rounded float-start" alt="..."/>
                                  </div>
                                  <div className='col-md-9'>
                                    <h5 style={{display:'inline-block'}}> {v.name}</h5>
                                    <p> {v.description}</p>
                                  </div>
                                  <p></p>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                  <br></br>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                           
                              );
                            })}
                    
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

export default connect(mapStateToProps)(Profile);
