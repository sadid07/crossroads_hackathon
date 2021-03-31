


import React from "react";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
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
    Table,
} from "semantic-ui-react";
import {
    countryListURL,
    addressListURL,
    addressCreateURL,
    addressUpdateURL,
    addressDeleteURL,
    userIDURL,
    paymentListURL
} from "../constants";
import { authAxios } from "../utils";
import { endpoint } from "../constants";

import axios from "axios";


class YourProfile extends React.Component {
    state = {
        loading: false,
        error: null,
        data: []
      };
    


    componentDidMount() {
        this.setState({ loading: true });
        
          window.scrollTo(0, 0);
      
    
    
        axios
          .get(`${endpoint}/YourProfileView/`)
    
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
                                        <NavLink to={`/${v.link}`} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                            <div className='row'>
                                                <div className="col-md-12">
                                                    <img style={{ width: "55px", height: "55px", display: "inline-block" }} src={v.image} class="rounded float-start" alt="..." />
                                                    <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}>{v.name}</h5>

                                                </div>

                                                <p></p>
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



export default YourProfile;






