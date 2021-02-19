




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
// import { NavLink } from "react-router-dom";
import { endpoint } from "../constants";

const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";


// Order
class LoginAndSecurity extends React.Component {

    render() {
        
        return (

            <div className='container' style={{ background: '#FFFFFF' }}>
                <div className='row my-5'>



                    <div className='col-md-12'>
                        <div className='row'>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'/userprofileupdate'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />

                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Profile Update </h5>

                                            </div>
                             
                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'/passwordresetemail'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Password Reset </h5>


                                            </div>

                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'#'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Password Update </h5>

                                            </div>

                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'/profile'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> User Panel </h5>

                                            </div>

                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>


                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'/userprofileupdate'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Bulling Address Update</h5>
                                            </div>
                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'/shippingaddressupdate'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}> Shipping Address Update</h5>

                                            </div>

                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
                <br></br>
                <br></br>
            </div>


        );
    }
}



export default LoginAndSecurity;



