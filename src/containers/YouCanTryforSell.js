
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



class YouCanTryforSell extends React.Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.handleFetchPayments();
    }

    handleFetchPayments = () => {
        this.setState({ loading: true });
        authAxios
            .get(`${endpoint}/userprofile`)

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

        return (
            <div className='container my-5'>
                <div className='row '>
               



                    <div className='col-md-12'>
                        <div className='row'>

                            <div className='col-md-4'>
                                <br></br>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <NavLink to={'#'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}>Our Facebook Group</h5>

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
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}>Our Facebook Group</h5>

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
                                                <h5 style={{ display: 'inline-block', marginTop: "12px", marginLeft: "22px" }}>Our Facebook Group</h5>

                                            </div>

                                            <p></p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>















                        </div>
                    </div>



                </div>
            </div>


        );
    }
}



export default YouCanTryforSell;
