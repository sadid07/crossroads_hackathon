
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
    userProfileUpdateURL

} from "../constants";
import { authAxios } from "../utils";
import axios from "axios"
import {
    checkoutURL,
    orderSummaryURL,
    addCouponURL,
    addressListURL,
    endpoint
} from "../constants";
// import Select from 'react-select'
class Payment extends React.Component {

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





    componentDidMount() {
        window.scrollTo(0, 0);
    }





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
        const isAuthenticated = localStorage.getItem('token')
        if (!isAuthenticated) {
            return <Redirect to="/login" />;
        }

        return (
            <div className='container my-5'>
                <div className='row ml-1 mr-1'>

                    {/* <div className='col-md-2'>
                        <div class="row">
                            <div class="col-12">
                                <div class="list-group" id="list-tab" role="tablist"> <br></br>
                                    <NavLink to={"/userprofileupdate"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages"> User Profile Update</NavLink>
                                    <NavLink to={"/profile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Profile</NavLink>
                                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Rassword Reset</NavLink>
                                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Password Update</NavLink>
                                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Cancelled Orders</NavLink>

                                </div>
                            </div>
                        </div>
                    </div> */}


                    <div className='col-md-3'></div>






                    <div className='col-md-6'>
                        <Form onSubmit={this.handleSubmit} success={success} error={error}>
                            <div className='row'>
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
                             
                              

                         



                                <Button
                                    loading={loading}
                                    disabled={loading}
                                    primary
                                    onClick={this.submit}
                                    style={{ marginTop: "10px" }}
                                >
                                    Confirm Order
                               </Button>


                            </div>
                        </Form>


                    </div>


                </div>
            </div>




        );
    }
}



export default Payment;
