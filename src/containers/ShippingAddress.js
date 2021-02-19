
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



class ShippingAddress extends React.Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.handleFetchPayments();
        window.scrollTo(0, 0);

    }

    handleFetchPayments = () => {
        this.setState({ loading: true });
        authAxios
            .get(`${endpoint}/shippingaddresslistview/`)

            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data.results
                });
                window.scrollTo(0, 0);

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };


    render() {
        const { data } = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    {/* <div className='col-md-3'>
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
                    </div> */}



                    <div className='col-md-8 '>

                        {data &&
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

                                                    <td>{v.shopping_fast_name} {v.last_name} </td>
                                                </tr>
                                        

                                                <tr>
                                                    <th scope="row">Phone</th>
                                                    <td colspan="2">  </td>
                                                    <td></td>

                                                    <td>{v.shopping_phone}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">address</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{v.shopping_address}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">District</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{v.shopping_district}</td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Division</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{v.shopping_division}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Zip Code </th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{v.shopping_zip_code}</td>
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






export default ShippingAddress;

