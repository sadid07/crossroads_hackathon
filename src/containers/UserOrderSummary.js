



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

// import { NavLink } from "react-router-dom";
const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";


// Order
class UserOrderSummary extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.handleFetchPayments();
    }

    handleFetchPayments = () => {
        this.setState({ loading: true });
        authAxios
            .get(`${endpoint}/order/`)

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

            <div className='container-fluid' style={{ background: '#FFFFFF' }}>
                <div className='row ml-1 mr-1'>
                    <div className='col-md-2'>
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



                    <div className='col-md-10'>

                        <h4 > My Order Summary</h4>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Name</Table.HeaderCell> */}
                                    <Table.HeaderCell>Coupon</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                    <Table.HeaderCell>Order ID</Table.HeaderCell>
                                    {/* <Table.HeaderCell>Returns</Table.HeaderCell> */}
                                    {/* <Table.HeaderCell>Cancelled</Table.HeaderCell> */}
                                    <Table.HeaderCell>Total</Table.HeaderCell>
                                    <Table.HeaderCell>Details</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>

                                {data &&
                                    data.map(p => {
                                        return (
                                            <Table.Row key={p.id}>
                                                <Table.Cell> <NavLink to={(`/orderdetail/${p.id}`)} >{p.id}</NavLink></Table.Cell>

                                                {/* <Table.Cell>{p.name}</Table.Cell> */}
                                                {/* <Table.Cell>{p.start_date}</Table.Cell> */}
                                                <Table.Cell>{p.orde}</Table.Cell>
                                                <Table.Cell>{p.status}</Table.Cell>
                                                <Table.Cell>{p.order_code}</Table.Cell>
                                                {/* <Table.Cell>{new Date(p.timestamp).toUTCString()}</Table.Cell> */}
                                                <Table.Cell>{p.returns_status}</Table.Cell>
                                                {/* <Table.Cell> <NavLink to={(`/ordercancellerandreturns/${p.id}`)} >{p.cancelled_status}</NavLink></Table.Cell> */}
                                                {/* <Table.Cell>{p.received}</Table.Cell> */}
                                                <Table.Cell> <NavLink to={(`/orderdetail/${p.id}`)} >Details</NavLink></Table.Cell>

                                            </Table.Row>
                                        );
                                    })}
                            </Table.Body>
                        </Table>

                    </div>
                </div>
            </div>


        );
    }
}



export default UserOrderSummary;
