
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
import { endpoint } from "../constants";

// import Select from 'react-select'
class UserProfileUpdate extends React.Component {

    state = {
        data1: '',
        error: null,
        loading: false,

        formData: {
            fastName: "",
            lastName: "",
            address: "",
            division: "",
            // image: "",
            district: "",
            phone: "",
            zip_code:'',

        },
        saving: false,
        success: false


    };






    componentDidMount() {
        this.handleFetchUserProfile();
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



    handleUpdateAddress = () => {
        const { userID, activeItem } = this.props;
        const { formData } = this.state;
        axios
            .put(`${endpoint}/userprofileupdate/${formData.id}/`, {
                ...formData,
            })
            .then(res => {
                this.setState({
                    saving: false,
                    success: true,
                    // formData: { default: false }
                });
                // console.log('res', res)
                // this.props.callback();
                document.getElementById("alert-success").style.display = 'inline'

            })
            .catch(err => {
                this.setState({ error: err });
                console.log(err.response)

            });
        setTimeout(function () {
            document.getElementById("alert-success").style.display = 'none'

        }, 1500);


    };



    handleFetchUserProfile = () => {
        this.setState({ loading: true });
        authAxios
            // .get("http://127.0.0.1:8000/shop/userprofile")
            .get(`${endpoint}/userprofile/`)

            .then(res => {
                const { error, formData, success, saving, data1 } = this.state;
              
                this.setState({
                    formData: res.data.results[0]
                });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };

    // options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]


    render() {
        const { error, formData, success, saving } = this.state;
        console.log(formData)
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

                            <label for="inputEmail4" class="form-label">Fast Name</label>
                            <Form.Input
                                required
                                name="fast_name"
                                placeholder="Fast Name"
                                onChange={this.handleChange}
                                value={formData.fast_name}
                            />
                        </div>
                        <div className="col-md-6">
                                    <br></br>
                            <label for="inputEmail4" class="form-label">Last Name</label>
                                

                            <Form.Input
                                required
                                name="last_name"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                value={formData.last_name}
                            />
                        </div>
                        <div className="col-md-12">
                                    <br></br>

                            <label for="inputAddress" class="form-label">Address</label>
                            <Form.Input
                                required
                                name="address"
                                placeholder="Address "
                                onChange={this.handleChange}
                                value={formData.address}
                            />
                        </div>
                        <div className="col-5">
                                    <br></br>

                            <label for="inputAddress2" class="form-label">Division</label>
                            <Form.Input
                                required
                                name="division"
                                placeholder="Division "
                                onChange={this.handleChange}
                                value={formData.division}
                            />
                        </div>
                        <div className="col-md-6">
                                    <br></br>

                            <label for="inputCity" class="form-label">District</label>
                            <Form.Input
                                required
                                name="district"
                                placeholder="District "
                                onChange={this.handleChange}
                                value={formData.district}
                            />
                        </div>
                        <div className="col-md-6">
                                    <br></br>

                            <label for="inputZip" class="form-label">Phone</label>
                            <Form.Input
                                required
                                name="phone"
                                placeholder="phone "
                                onChange={this.handleChange}
                                value={formData.phone}
                            />
                                    <br></br>
                        </div>
                        <div className="col-md-6">
                                    <br></br>

                            <label for="inputZip" class="form-label">Zip Code</label>
                            <Form.Input
                                required
                                name="zip_code"
                                placeholder="Zip Code "
                                onChange={this.handleChange}
                                value={formData.zip_code}
                            />
                                    <br></br>
                        </div>





                                <div className="col-md-3">
                                    <Form.Button
                                        disabled={saving}
                                        loading={saving}
                                        style={{ padding: "10px 31px", margin: "0px 4px", cursor: "pointer", textTransform: "uppercase", textAlign: "center", position: "relative", backgroundColor: "#D0611E" }}
                                    >
                                        Update
                                    </Form.Button>
                                </div>
                                <div className="col-md-8">
                                    <div id='alert-success' class="alert alert-success" style={{ textAlign: "center" }} role="alert">
                                        Successfully  Update  User Profile &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                        </svg>
                                    </div>
                                </div>


                    </div>   
                    </Form>


                </div>


                </div>
            </div>




        );
    }
}



export default UserProfileUpdate;
