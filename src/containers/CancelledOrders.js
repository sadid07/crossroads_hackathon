



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
class CancelledOrders extends React.Component {
    state = {
        data1: '',
        error: null,
        loading: false,
        data: "",
        mess: "",

        formData: {

            orderid: "",


        },
        saving: false,
        success: false


    };






    // componentDidMount() {
    //     this.handleFetchUserProfile();
    // }





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





    handleFetchUserProfile = () => {
        this.setState({ loading: true });
        const { formData } = this.state;
        authAxios
            .post(`${endpoint}/ordertrack/`, { ...formData, })

            .then(res => {
                const { error, formData, success, saving, data1 } = this.state;

                this.setState({
                    data: res.data.data,
                    mess: res.data.mess
                });
                window.scrollTo(0, 0);
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
                console.log(err)
            });
    };


    render() {
        const { error, formData, success, saving, data, mess } = this.state;
        const isAuthenticated = localStorage.getItem('token')
        if (!isAuthenticated) {
            return <Redirect to="/login" />;
        }




        return (

            <div className='container-fluid my-1'>
                <div className='row ml-4'>
                    <div className='col-md-2'>
                        <div class="row" >
                            <div class="col-12">
                                <div class="list-group" id="list-tab" role="tablist"> <br></br>
                                    <NavLink to={"/profile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Profile</NavLink>
                                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Returns</NavLink>
                                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Orders</NavLink>
                                    <NavLink to={"/ordertrack"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Track</NavLink>
                                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Cancelled Orders</NavLink>
                                    {/* <NavLink to={"/logout"} class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="settings">Settings</NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='col-md-9'>

                        <br></br>




                        <Form onSubmit={this.handleFetchUserProfile} success={success} error={error}>
                            <div className='row'>

                                <div className="col-md-6">
                                    <label for="inputEmail4" class="form-label"> Your OrderID</label>
                                    <Form.Input
                                        required
                                        name="orderid"
                                        placeholder="OrderID"
                                        onChange={this.handleChange}
                                        value={formData.orderid}
                                    />
                                    <Form.Button disabled={saving} loading={saving} primary>
                                        Submit
                                    </Form.Button>

                                </div>






                            </div>
                        </Form>

                        {/* ............................................................................................. */}
                        {mess && <h1> {mess}</h1>}

                        {data &&
                            data.map(p => {
                                return (
                                    <Table celled>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>ID</Table.HeaderCell>
                                                <Table.HeaderCell>Name</Table.HeaderCell>
                                                <Table.HeaderCell>Coupon</Table.HeaderCell>
                                                <Table.HeaderCell>Status</Table.HeaderCell>
                                                <Table.HeaderCell>Order ID</Table.HeaderCell>
                                                <Table.HeaderCell>Total</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>


                                            <Table.Row key={p.id}>
                                                <Table.Cell> <NavLink to={(`/orderdetail/${p.id}`)} >{p.id}</NavLink></Table.Cell>
                                                <Table.Cell>
                                                    <NavLink to={(`/single-product/${p.itemId}`)} style={{ color: 'black' }}>
                                                        {p.name.slice(0, 20)}...

                                                    </NavLink>

                                                
                                                </Table.Cell>
                                                {/* <Table.Cell>{p.start_date}</Table.Cell> */}
                                                <Table.Cell>{p.orde}</Table.Cell>
                                                <Table.Cell>{p.status}</Table.Cell>
                                                <Table.Cell>{p.order_code}</Table.Cell>
                                                {/* <Table.Cell>{new Date(p.timestamp).toUTCString()}</Table.Cell> */}
                                                <Table.Cell>{p.received}</Table.Cell>

                                            </Table.Row>

                                        </Table.Body>
                                    </Table>


                                );
                            })}



                    </div>
                </div>











            </div>


        );
    }
}



export default CancelledOrders;
