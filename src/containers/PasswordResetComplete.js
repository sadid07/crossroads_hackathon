
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
import { endpoint, endpointauth } from "../constants";

// import Select from 'react-select'
class PasswordResetComplete extends React.Component {

    state = {
        data1: '',
        error: null,
        loading: false,

        formData: {
            password: "",
            token :""

        },
        saving: false,
        success: false


    };


    componentDidMount() {
        window.scrollTo(0, 0);
    }


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



    handleFetchUserProfile = () => {
        this.setState({ loading: true });
        const { error, formData, success, saving } = this.state;

        axios
            .patch(`${endpointauth}/auth/password-reset-complete`, { ...formData })

            .then(res => {

                this.setState({
                    formData: res.data.results[0]
                });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };


    render() {
        const { error, formData, success, saving } = this.state;
        const isAuthenticated = localStorage.getItem('token')
    

        return (
            <div className='container my-5'>
                <div className='row ml-1 mr-1'>


                    <div className='col-md-3'></div>



                    <div className='col-md-6'>
                        <Form onSubmit={this.handleFetchUserProfile} success={success} error={error}>
                            <div className='row'>

                                <div className="col-md-12">
                                    <br></br>
                                    <label for="inputEmail4" class="form-label">Token</label>


                                    <Form.Input
                                        required
                                        name="token"
                                        placeholder="Token"
                                        onChange={this.handleChange}
                                        value={formData.token}
                                    />
                                    <br></br>
                                </div>

                                <div className="col-md-12">
                                    <br></br>
                                    <label for="inputEmail4" class="form-label">Email</label>

                                    <Form.Input
                                        required
                                        name="password"
                                        placeholder="password"
                                        onChange={this.handleChange}
                                        value={formData.password}
                                    />
                                    <br></br>
                                </div>



                                <Form.Button disabled={saving} loading={saving} primary>
                                    Submit
                                </Form.Button>


                            </div>
                        </Form>


                    </div>


                </div>
            </div>




        );
    }
}




export default PasswordResetComplete;
