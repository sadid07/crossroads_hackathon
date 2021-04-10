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
  endpoint,
  checkoutURL

} from "../constants";
import { authAxios } from "../utils";
import axios from "axios";
import ReactPlayer from 'react-player'




class Checkout extends React.Component {
    state = {
        data1: '',
        error: null,
        loading: false,

        formData: {
            transactionId: "",
            taka: "",
      

        },
        saving: false,
        success: false


    };


    handleSubmit = e => {
        this.setState({ saving: true });
        const { saving } = this.state
        e.preventDefault();
        // if (saving === "true") {
        this.handleUpdateAddress();
        // } 
    };

    handleChange = e => {
        const { formData } = this.state;
        const updatedFormdata = {
            ...formData,
            [e.target.name]: e.target.value
        };
        this.setState({
            formData: updatedFormdata
        });
    };



    submit = ev => {
        ev.preventDefault();
        const { error, formData, success, saving } = this.state;

        this.setState({ loading: true });


        authAxios

            .post(checkoutURL, {
           ...formData

            })
            .then(res => {
                this.setState({ loading: false, success: true });
                this.props.history.push('/');
                window.location.reload()
            })
            .catch(err => {

            });

        // });

    };






render() {
    const { error, formData, success, saving,loading } = this.state;
    console.log(formData)
    const isAuthenticated = localStorage.getItem('token')


    window.scrollTo(0, 0);

    return (


        <div className='container '  style ={{backgroundColor:"#FAFAFA"}}>
            <div className='row '  style ={{backgroundColor:"#FAFAFA"}}>
                

            <div className='col-md-12'>

                                 
                    <div className='row' style={{marginTop:'100px',}}>
                    <div className='col-md-3'></div>

                      

                      <div className="col-md-6  " id="list-tab" style={{  borderRadius:'10px',marginBottom:'20px',backgroundColor:'#FAFAFA'}}>
                        <div className="row  list-group list-group-item list-group-item-action" style={{ padding:0,margin:'auto', backgroundColor:'#FAFAFA', padding:0, textAlign:'center' ,height:"400px"}} id="list-profile-list" >

                     

                      
                        <div className='col-md-12 ' >
                          <div className='row ' style = {{padding:'0px',textAlign:'center',margin:'auto'}}>



                              <div className='col-12 col-md-12' style={{padding:'0px',backgroundColor:'#FC03A1'}} >
                           

                             

                                <p style={{display:'inline-block',marginBottom:'15px',fontSize:'19px',marginTop:'10px'  , fontWeight:'bold', color:'#FAFAFA'}}>আপনার অর্ডার কনফার্ম করুন</p>
                                <p></p>



                              </div>



                              <Form onSubmit={this.handleSubmit} success={success} error={error}>
                            <div className='row my-5' style={{textAlign:'center' ,margin:'auto'}}>
                                <div className="col-md-6">
                                    <br></br>

                                    <label for="inputEmail4" class="form-label"> Transaction ID</label>
                                    <Form.Input
                                        required
                                        name="transactionId"
                                        placeholder="Transaction ID"
                                        onChange={this.handleChange}
                                        value={formData.transactionId}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <br></br>
                                    <label for="inputEmail4" class="form-label">The amount of money</label>


                                    <Form.Input
                                        required
                                        name="taka"
                                        placeholder="The amount of money"
                                        onChange={this.handleChange}
                                        value={formData.taka}
                                    />
                                </div>
                             
                              

                         


                                <div className="col-md-12">
                                <Button
                                    loading={loading}
                                    disabled={loading}
                                    primary
                                    onClick={this.submit}
                                    style={{ marign: 'auto',marginTop: "40px" ,backgroundColor:'#FC03A1' }}
                                >
                                    Confirm Order
                               </Button>
                               </div>


                            </div>
                        </Form>









                       






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

export default connect(mapStateToProps)(Checkout);
