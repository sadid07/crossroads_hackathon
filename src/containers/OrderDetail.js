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
import { productDetailURL, addToCartURL, OrderDetailURL} from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import "./ProductDetail.css"
import $ from "jquery";
import CKEditor from "react-ckeditor-component";

import { endpointlocahost } from "../constants";

class ProductDetail extends React.Component {
  state = {
    loading: false,
    error: null,
    data :null
 
  };


  componentDidMount() {
    this.handleFetchItem();
    window.scrollTo(0, 0);


  }

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    console.log(this.props)
    this.setState({ loading: true });
    axios
      .get(OrderDetailURL(params.orderdetailID))
      .then(res => {
        console.log('data1', res.data.orderproduct)
        this.setState({ data: res.data.orderproduct, loading: false });
        window.scrollTo(0, 0);

      })
      .catch(err => {
        this.setState({ error: err, loading: false });
        console.log(err)
      });
  };





  render() {
    const { data } = this.state;

    const isAuthenticated = localStorage.getItem('token')
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }


    return (
      <>

        <div className='container-fluid'>
          <div className='row ml-1 mr-1'>
            <div className='col-md-2'>
            <br></br>
              <div class="row">
                <div class="col-12">
                  <div class="list-group" id="list-tab" role="tablist"> <br></br>
                    <NavLink to={"/profile"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">Profile</NavLink>
                    <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Messages</NavLink>
                    <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" role="tab" aria-controls="messages">Order</NavLink>
                    {/* <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="settings">My Favorits</NavLink> */}
                    {/* <NavLink to={"#"} class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="settings">My Comments</NavLink> */}
                    <NavLink to={"/logout"} class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="settings">Settings</NavLink>
                    <NavLink to={"/logout"} class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" role="tab" aria-controls="settings">LogOut</NavLink>
                  </div>
                </div>
              </div>

            </div>

            <div className='col-md-10'>

              <h4 >OrderDetail</h4>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Size</Table.HeaderCell>
                    <Table.HeaderCell>Color</Table.HeaderCell>
                    <Table.HeaderCell>Order ID</Table.HeaderCell>
                    <Table.HeaderCell>Cancelled</Table.HeaderCell>
                    <Table.HeaderCell>Returns</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>

                  {data &&
                    data.map(p => {
                      return (
                        <Table.Row key={p.id}>
                          <Table.Cell style={{ textAlign: "center" }}>{p.id}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.name.slice(0, 20)}...</Table.Cell>
                          <Table.Cell style={{ textAlign: "center"}} ><img src={`${endpointlocahost}${p.imageUrl}/`} style={{width:"45px" ,height:"45px"}} class="img-fluid" alt="..."/></Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.amount}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.quantity}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.size}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.color}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.order_code}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>{p.user_cancelled_status}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}> {p.user_returns_status}</Table.Cell>
                          <Table.Cell style={{ textAlign: "center" }}>2020-12-10</Table.Cell>
                        </Table.Row>
                      );
                    })}
                </Table.Body>
              </Table>

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
  )(ProductDetail)
);
