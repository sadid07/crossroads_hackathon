
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

class AllOrderProducts extends React.Component {
  state = {
    loading: false,
    error: null,
    data: null

  };


  componentDidMount() {
    this.handleFetchItem();

  }

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    authAxios
      .get(`${endpoint}/allorderaroductslistView/`)

      .then(res => {
        this.setState({ data: res.data.results, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };


  Greeting = () => {
    //  var data = $(".show__and__hide").attr('html')
    var data = document.getElementsByClassName("show__and__hide")


  }



  render() {
    const { data } = this.state;
    // console.log(this.props)

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
                    <Table.HeaderCell>Manage</Table.HeaderCell>
                    {/* <Table.HeaderCell>Returns</Table.HeaderCell> */}
                    <Table.HeaderCell>Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>

                  {data &&
                    data.map(p => {
                      return (
                        <>
                          <div className='order__hidden__desktop'>
                            <Table.Row key={p.id}>


                              <Table.Cell style={{ textAlign: "center" }}>{p.id}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>

                                <NavLink to={(`/single-product/${p.itemId}`)} style={{ color: 'black' }}>
                                  {p.name.slice(0, 20)}...

                                                        </NavLink>


                              </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }} >

                                <NavLink to={(`/single-product/${p.itemId}`)} style={{ textDecoration: 'none', color: 'black' }}>

                                  <img src={`${endpointlocahost}${p.imageUrl}/`} style={{ width: "50px", height: "50px" }} class="img-fluid" alt="..." />
                                </NavLink>
                              </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.amount}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.quantity}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.size}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.color} </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.order_code}</Table.Cell>
                              {(() => {
                                if (p.status == 'New') {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>
                                        <NavLink to={(`/ordercanclledstatuschange/${p.id}`)}>
                                          <button type="button" class="btn btn-outline-secondary">Cancelled</button>
                                        </NavLink>
                                      </Table.Cell>

                                    </>
                                  )
                                }
                                else if (p.status == "Delivered") {
                                  return (
                                    <>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>{p.user_returns_status}</NavLink> </Table.Cell> */}
                                      <Table.Cell style={{ textAlign: "center" }}><NavLink to={(`/orderreturnstatuschange/${p.id}`)}>
                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                      </NavLink> </Table.Cell>
                                    </>

                                  )
                                }
                                else if (p.status == "Completed") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to= {(`/orderreturnstatuschange/${p.id}`)}>
                                                                    <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }


                                else if (p.status == "Cencelled") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>
                                                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }

                                else if (p.status == "Return") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>
                                                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }


                              })()}


                              <Table.Cell style={{ textAlign: "center" }}>2020-12-10</Table.Cell>
                              {this.Greeting()}



                            </Table.Row>
                          </div>





                        </>








                      );
                    })}
                </Table.Body>
              </Table>

              {/* ...................................Phone Order .......................................................... */}

              <h4 >OrderDetail</h4>
              <Table celled>

                <Table.Body>

                  {data &&
                    data.map(p => {
                      return (
                        <>
                          <div className='order__hidden__desktop'>
                            <Table.Row key={p.id}>


                              <Table.Cell style={{ textAlign: "center" }}>{p.id}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>

                                <NavLink to={(`/single-product/${p.itemId}`)} style={{ color: 'black' }}>
                                  {p.name.slice(0, 20)}...

                                                        </NavLink>


                              </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }} >

                                <NavLink to={(`/single-product/${p.itemId}`)} style={{ textDecoration: 'none', color: 'black' }}>

                                  <img src={`${endpointlocahost}${p.imageUrl}/`} style={{ width: "50px", height: "50px" }} class="img-fluid" alt="..." />
                                </NavLink>
                              </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.amount}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.quantity}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.size}</Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.color} </Table.Cell>
                              <Table.Cell style={{ textAlign: "center" }}>{p.order_code}</Table.Cell>
                              {(() => {
                                if (p.status == 'New') {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>
                                        <NavLink to={(`/ordercanclledstatuschange/${p.id}`)}>
                                          <button type="button" class="btn btn-outline-secondary">Cancelled</button>
                                        </NavLink>
                                      </Table.Cell>

                                    </>
                                  )
                                }
                                else if (p.status == "Delivered") {
                                  return (
                                    <>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>{p.user_returns_status}</NavLink> </Table.Cell> */}
                                      <Table.Cell style={{ textAlign: "center" }}><NavLink to={(`/orderreturnstatuschange/${p.id}`)}>
                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                      </NavLink> </Table.Cell>
                                    </>

                                  )
                                }
                                else if (p.status == "Completed") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to= {(`/orderreturnstatuschange/${p.id}`)}>
                                                                    <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }


                                else if (p.status == "Cencelled") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>
                                                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }

                                else if (p.status == "Return") {
                                  return (
                                    <>
                                      <Table.Cell style={{ textAlign: "center" }}>{p.status}</Table.Cell>
                                      {/* <Table.Cell style={{ textAlign: "center" }}><NavLink to={"#"}>
                                                                        <button type="button" class="btn btn-outline-secondary">Returns</button>
                                                                    </NavLink> </Table.Cell> */}
                                    </>

                                  )
                                }


                              })()}


                              <Table.Cell style={{ textAlign: "center" }}>2020-12-10</Table.Cell>
                              {this.Greeting()}



                            </Table.Row>
                          </div>





                        </>








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
  )(AllOrderProducts)
);
