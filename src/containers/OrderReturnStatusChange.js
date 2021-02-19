import React, { Component, onMouseOver } from 'react'
import { NavLink, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
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
    Item
} from "semantic-ui-react";
import { productDetailURL, addToCartURL, OrderDetailURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./ProductDetail.css"
import $ from "jquery";
import CKEditor from "react-ckeditor-component";

import { endpointlocahost, endpoint } from "../constants";

class OrderReturnStatusChange extends React.Component {
    state = {
        loading: false,
        error: null,
        data: '',
        active: true,


        formData: {
            user_cancelled_status: "",
            user_returns_status: "",
            returns_reason_sms: '',
        },
    };


    componentDidMount() {
        this.handleFetchItem();
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


        if (typeof (formData.returns_reason_sms) == "undefined") {
            this.setState({

                active: true

            });
        }
        else {

            if ((formData.returns_reason_sms.length) > 1) {
                this.setState({
                    active: false
                });
            }
            else {
                this.setState({
                    active: true
                });

            }
        }



    };

    handleFetchItem = () => {
        const {
            match: { params }
        } = this.props;

        this.setState({ loading: true });
        axios
            // .get(OrderDetailURL(params.ordercancellerandreturnsID))
            .get(`${endpoint}/ordercancelledandreturnsdetail/${params.orderreturnstatuschangeID}/`)

            .then(res => {

                this.setState({ formData: res.data, loading: false });
                window.scrollTo(0, 0);

            })
            .catch(err => {
                this.setState({ error: err, loading: false });

            });
    };


    handleFetchChangeApply = () => {
        const { data, formData } = this.state;

        const {
            match: { params }
        } = this.props;


        // this.setState({ loading: true });
        axios
            .put(`${endpoint}/ordercancelledandreturns/${params.orderreturnstatuschangeID}/`, { ...formData })
            .then(res => {

                this.setState({ data: res.data, loading: false });
                document.getElementById("alert-success").style.display = 'inline'
                window.scrollTo(0, 0);


            })
            .catch(err => {
                this.setState({ error: err, loading: false });

            });

        setTimeout(function () {
            document.getElementById("alert-success").style.display = 'none'
            window.location.href = "/allorderproducts"


        }, 1500);


    };



    render() {
        const { data, formData ,active} = this.state;
        var item = formData;
        const isAuthenticated = localStorage.getItem('token')
        if (!isAuthenticated) {
            return <Redirect to="/login" />;
        }

        return (
            <>

                <div className='container-fluid' >
                    <div className='row  home ml-1 mr-1' style={{ background: '#FFFFFF' }}>
                        <div className='col-md-3'>
                            <br></br>
                            <div class="row">
                                <div class="col-12">
                                    <div class="list-group" id="list-tab" role="tablist"> <br></br>
                                        <NavLink to={"/allorderproducts"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">All Order Products </NavLink>
                                        <NavLink to={"/allcompletesorderproducts"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Complete Orders</NavLink>

                                        <NavLink to={"/allcencelledorderproductslist"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Cancelled Product List</NavLink>
                                        <NavLink to={"/allneworderproductslist"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">New Orders</NavLink>
                                        <NavLink to={"/ordertrack"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Track</NavLink>

                                        <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Order</NavLink>
                                        <NavLink to={"/userordersummary"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Orders Summary</NavLink>
                                        <NavLink to={"/allreturnsorderproductslist"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Returns Product List</NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-9 order__hidden__desktop'>

                            <h4 >OrderDetail</h4>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Image</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Cancelled</Table.HeaderCell>
                                        <Table.HeaderCell>Order ID</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>


                                    <Table.Row key={item.id}>
                                        <Table.Cell style={{ textAlign: "center" }} >
                                        

                                            <NavLink to={(`/single-product/${item.itemId}`)} style={{ textDecoration: 'none', color: 'black' }}>

                                                <img src={`${endpointlocahost}${item.imageUrl}/`} style={{ width: "50px", height: "50px" }} class="img-fluid" alt="..." />
                                            </NavLink>
                                        
                                        </Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }}>{item.status}</Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }}>

                                            <select
                                                class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
                                                value={item.user_returns_status}
                                                name="user_returns_status"
                                                onChange={this.handleChange}
                                            >
                                                <option value='Defective' > Defective</option>
                                                <option value='Defective' > Not as advertised</option>
                                                <option value='Missing accessories' > Missing accessories</option>
                                                <option value='Missing freebies' > Missing freebies </option>
                                                <option value='Wrong/ fakeitem' > Wrong / fake item</option>
                                                <option value='Does not fit ' > Does not fit </option>
                                                <option value='Damaged' > Damaged </option>
                                                <option value='Change of mind ' > Change of mind </option>
                                                <option value='Wrong size / color / etc'>Wrong size/color/etc </option>
                                                <option value='' hidden> Open this select men</option>

                                            </select>


                                        </Table.Cell>

                                        <Table.Cell style={{ textAlign: "center" }}>{item.order_code}</Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                            {/* <div class="mb-3">
                                <h3 for="exampleFormControlTextarea1" class="form-label" required>Additional Information (mandatory)</h3>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="returns_reason_sms"
                                    onChange={this.handleChange}


                                ></textarea>
                            </div> */}
                            <br></br>
                            <h3 for="exampleFormControlTextarea1" class="form-label" required>Additional Information (mandatory)</h3>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}
                                
                                    name="returns_reason_sms"
                                    onChange={this.handleChange}
                                

                                ></textarea>
                            </div>


                            <br></br>


                            <Button
                                // loading={formData.cancelled_reason_sms}
                                style={{ marginTop: "10px", padding: "8px 31px", margin: "10px 4px", cursor: "pointer", textTransform: "uppercase", textAlign: "center", position: "relative", backgroundColor: "#D0611E" }}
                                onClick={this.handleFetchChangeApply}
                                disabled={active}

                            >
                                Submit
                               </Button>
                            <div id='alert-success' class="alert alert-success" role="alert">
                                Successfully  Added to Cart &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                                </svg>
                            </div>





                        </div>

{/* .............................. for Phone...................................... */}



                        <div className='col-md-9 order__hidden__phone'>

                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <h4 >Order Returns</h4>

                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>


                                    <Table.Row key={item.id}>
                                        <Table.Cell style={{ textAlign: "center" }} >
                                        

                                            <NavLink to={(`/single-product/${item.itemId}`)} style={{ textDecoration: 'none', color: 'black' }}>

                                                <img src={`${endpointlocahost}${item.imageUrl}/`} style={{ width: "90px", height: "90px" }} class="img-fluid" alt="..." />
                                            </NavLink>
                                        
                                        </Table.Cell>
                                        <Table.Cell > Status : {item.status}</Table.Cell>
                                        <Table.Cell style={{ textAlign: "center" }}>

                                            <select
                                                class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" 
                                                value={item.user_returns_status}
                                                name="user_returns_status"
                                                onChange={this.handleChange}
                                            >
                                                <option value='Defective' > Defective</option>
                                                <option value='Defective' > Not as advertised</option>
                                                <option value='Missing accessories' > Missing accessories</option>
                                                <option value='Missing freebies' > Missing freebies </option>
                                                <option value='Wrong/ fakeitem' > Wrong / fake item</option>
                                                <option value='Does not fit ' > Does not fit </option>
                                                <option value='Damaged' > Damaged </option>
                                                <option value='Change of mind ' > Change of mind </option>
                                                <option value='Wrong size / color / etc'>Wrong size/color/etc </option>
                                                <option value='' hidden> Open this select men</option>
                                            </select>

                                        </Table.Cell>

                                        <Table.Cell > Order ID : {item.order_code}</Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                           
                            <br></br>
                            <h3 for="exampleFormControlTextarea1" class="form-label" required>Additional Information (mandatory)</h3>

                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}
                                
                                    name="returns_reason_sms"
                                    onChange={this.handleChange}
                                

                                ></textarea>
                            </div>


                            <br></br>


                            <Button
                                // loading={formData.cancelled_reason_sms}
                                style={{ marginTop: "10px", padding: "8px 31px", margin: "10px 4px", cursor: "pointer", textTransform: "uppercase", textAlign: "center", position: "relative", backgroundColor: "#D0611E" }}
                                onClick={this.handleFetchChangeApply}
                                disabled={active}

                            >
                                Submit
                               </Button>
                            <div id='alert-success' class="alert alert-success" role="alert">
                                Successfully  Added to Cart &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </>

        );
    }



}



const mapDispatchToProps = dispatch => {
    return {
        refreshCart: () => dispatch(fetchCart())
    };
};

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(OrderReturnStatusChange)
);
