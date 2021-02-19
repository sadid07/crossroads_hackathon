
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



class UserProfile extends React.Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.handleFetchPayments();
    }

    handleFetchPayments = () => {
        this.setState({ loading: true });
        authAxios
            .get(`${endpoint}/userprofile/`)

            .then(res => {
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
        const { data } = this.state;
        const isAuthenticated = localStorage.getItem('token')
        if (!isAuthenticated) {
            return <Redirect to="/login" />;
        }
        return (
            <div className='container'>
                <div className='row'>    
                    <div className='col-md-3'>
                        <div class="row">
                            <div class="col-12">
                                <div class="list-group" id="list-tab" role="tablist"> <br></br>
                                    <NavLink to={"/userprofile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">User Profile</NavLink>
                                    <NavLink to={"/profile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Profile</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">My Comments</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages"> My Favorits</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Browsing Hostory</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Favorits</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-md-8 '>

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
                                        <th scope="row">District</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.district}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Division</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.division}</td>
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


        );
    }
}



export default UserProfile;
