
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
class PasswordResetEmail extends React.Component {

    state = {
        data1: '',
        error: null,
        loading: false,

        formData: {
            email: "",
      

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
            .post(`${endpointauth}/auth/request-reset-email/`, { ...formData})

            .then(res => {

                this.setState({
                    formData: res.data.results[0]
                });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        this.props.history.push('/passwordresetcomplete');

    };



    render() {
        const { error, formData, success, saving } = this.state;


        return (
            <div className='container my-5'>
                <div className='row ml-1 mr-1'>

               
                    <div className='col-md-3'></div>






                    <div className='col-md-6'>
                        <Form onSubmit={this.handleFetchUserProfile} success={success} error={error}>
                            <div className='row'>
                           
                                <div className="col-md-12">
                                    <br></br>
                                    <label for="inputEmail4" class="form-label">Email</label>


                                    <Form.Input
                                        required
                                        name="email"
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                        value={formData.email}
                                    />
                                    <br></br>
                                </div>
                     


                                <Form.Button disabled={saving} loading={saving} primary>
                                    SubMit
                                </Form.Button>


                            </div>
                        </Form>


                    </div>


                </div>
            </div>




        );
    }
}




export default PasswordResetEmail;
