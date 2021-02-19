



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
    paymentListURL,
    endpoint
} from "../constants";
import { authAxios } from "../utils";
// import { NavLink } from "react-router-dom";
const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";


// Order
class Payments extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.handleFetchPayments();
    }

    handleFetchPayments = () => {
        this.setState({ loading: true });
        authAxios
            .get(`${endpoint}/order`)
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data.results
                });
                console.log(res.data.results);
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };

    render() {
        const { data } = this.state;
        return (

            <div className='container-fluid my-1'>
                <div className='row ml-4'>
                    <div className='col-md-2'>
                        <div class="row" style={{ position: "fixed" }}>
                            <div class="col-12">
                                <div class="list-group" id="list-tab" role="tablist"> <br></br>
                                    <NavLink to={"/profile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Profile</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages"> How to Payment Bkash</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages"> How to Payment Rocket</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages"> How to Payment Nagad</NavLink>

                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='col-md-9'>

                        <br></br>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>
                                        
                                            <div className='col-md-9'>
                                                <h5 style={{ display: 'inline-block' }}> Mobile Banking Bkash</h5>
                                                <p>Personal 017712-97948</p>
                                            </div>
                                            <div className="col-md-2 ">
                                                <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelplanbd.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fbkash-train-ticket-.jpg&f=1&nofb=1" class="img-fluid" alt="..." />
                                            </div>
                                            <p></p>
                                        </div>
                                    </a>
                                </div>

                            </div>








                            <div className='col-md-12 my-3'>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>

                                            <div className='col-md-9'>
                                                <h5 style={{ display: 'inline-block' }}> Mobile Banking Rocket</h5>
                                                <p> Personal 017712-97948</p>



                                            </div>
                                            <div className="col-md-2 ">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelplanbd.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fbkash-train-ticket-.jpg&f=1&nofb=1" class="img-fluid" alt="..." />
                                            </div>
                                            <p></p>
                                        </div>
                                    </a>
                                </div>

                            </div>






                            <div className='col-md-12 '>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>

                                            <div className='col-md-9'>
                                                <h5 style={{ display: 'inline-block' }}>Mobile Banking Nogod</h5>

                                                <p> Personal 017712-97948</p>


                                            </div>
                                            <div className="col-md-2 ">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelplanbd.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fbkash-train-ticket-.jpg&f=1&nofb=1" class="img-fluid" alt="..." />
                                            </div>
                                            <p></p>
                                        </div>
                                    </a>
                                </div>

                            </div>







                            <div className='col-md-12 my-3'>
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                                        <div className='row'>

                                            <div className='col-md-9'>
                                                <h5 style={{ display: 'inline-block' }}>  OrbitPlug Surecash</h5>
                                                <p> Personal 017712-97948</p>

                                            </div>
                                            <div className="col-md-2 ">
                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravelplanbd.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fbkash-train-ticket-.jpg&f=1&nofb=1" class="img-fluid" alt="..." />
                                            </div>
                                            <p></p>
                                        </div>
                                    </a>
                                </div>

                            </div>












                                <div className='col-md-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bkash.com%2Fsites%2Fdefault%2Ffiles%2Fimage_files%2Fpayment-Sestem-bKash%2520eng%2520website.jpg&f=1&nofb=1" class="img-fluid" alt="..." />

                                    </NavLink>
                                </div>




                                <div className='col-md-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fshovabd.com%2Fimages%2Fpayment%2Frocket-payment.jpg&f=1&nofb=1" class="img-fluid" alt="..." />

                                    </NavLink>
                                </div>




                                <div className='col-md-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fddnbd.com%2Fwp-content%2Fuploads%2F2020%2F08%2FPayment-Flow-Chart-1-for-ISP-823x551.jpeg&f=1&nofb=1" class="img-fluid" alt="..." />

                                    </NavLink>
                                </div>





                                <div className='col-md-12' style={{ textAlign: "center" }}>
                                    <br></br>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpayment.surecash.net%2Fwp-content%2Fuploads%2F2020%2F09%2FGBMC-Payment-Process-Banner-1024x725.png&f=1&nofb=1" class="img-fluid" alt="..." />

                                    </NavLink>
                                </div>



















                        </div>
                    </div>










                </div>
            </div>


        );
    }
}



export default Payments;
