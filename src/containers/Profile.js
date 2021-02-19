import React from "react";
import { connect } from "react-redux";
import { Redirect,NavLink } from "react-router-dom";
// import Order from "./Order";
import PaymentHistory from "./PaymentHistory"
import AddressForm from "./AddressForm"
import UserProfile from "./UserProfile"
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
  Table
} from "semantic-ui-react";

import {
  countryListURL,
  addressListURL,
  addressCreateURL,
  addressUpdateURL,
  addressDeleteURL,
  userIDURL,
  endpoint

} from "../constants";
import { authAxios } from "../utils";

const UPDATE_FORM = "UPDATE_FORM";
const CREATE_FORM = "CREATE_FORM";

// Order
class Order extends React.Component {
  state = {
    payments: []
  };

  componentDidMount() {
    this.handleFetchPayments();
    window.scrollTo(0, 0);

  }

  handleFetchPayments = () => {
    this.setState({ loading: true });
    authAxios
      .get(`${endpoint}/order`)
      .then(res => {
        this.setState({
          loading: false,
          payments: res.data.results
        });

      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { payments } = this.state;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Coupon</Table.HeaderCell>
            <Table.HeaderCell>Received</Table.HeaderCell>
            <Table.HeaderCell>Order ID</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {payments.map(p => {
            return (
              <Table.Row key={p.id}>
                <NavLink to={(`/orderdetail/${p.id}`)}><Table.Cell>{p.id}</Table.Cell></NavLink>
                {/* to= {(`/products/${item.id}`)} */}

                {/* <Table.Cell>{p.id}</Table.Cell> */}
                <Table.Cell>${p.total}</Table.Cell>
                {/* <Table.Cell>{p.start_date}</Table.Cell> */}
                <Table.Cell>{p.coupon}</Table.Cell>
                <Table.Cell>{p.received}</Table.Cell>
                <Table.Cell>{p.order_code}</Table.Cell>
                <Table.Cell>{new Date(p.timestamp).toUTCString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}



class Profile extends React.Component {
  state = {
    activeItem: "billingAddress",
    addresses: [],
    countries: [],
    userID: null,
    selectedAddress: null
  };

  componentDidMount() {
    this.handleFetchAddresses();
    this.handleFetchCountries();
    this.handleFetchUserID();
    this.LeftSlider()
  }

  handleItemClick = name => {
    this.setState({ activeItem: name }, () => {
      this.handleFetchAddresses();
    });
  };

  handleGetActiveItem = () => {
    const { activeItem } = this.state;
    if (activeItem === "billingAddress") {
      return "Billing Address";
    } else if (activeItem === "shippingAddress") {
      return "Shipping Address";
    }
    return "Payment History";
  };

  handleFormatCountries = countries => {
    const keys = Object.keys(countries);
    return keys.map(k => {
      return {
        key: k,
        text: countries[k],
        value: k
      };
    });
  };

  handleDeleteAddress = addressID => {
    authAxios
      .delete(addressDeleteURL(addressID))
      .then(res => {
        this.handleCallback();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleSelectAddress = address => {
    this.setState({ selectedAddress: address });
  };

  handleFetchUserID = () => {
    authAxios
      .get(userIDURL)
      .then(res => {
        this.setState({ userID: res.data.userID });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleFetchCountries = () => {
    authAxios
      .get(countryListURL)
      .then(res => {
        this.setState({ countries: this.handleFormatCountries(res.data) });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleFetchAddresses = () => {
    this.setState({ loading: true });
    const { activeItem } = this.state;
    authAxios
      .get(addressListURL(activeItem === "billingAddress" ? "B" : "S"))
      .then(res => {
        this.setState({ addresses: res.data.results, loading: false });

      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleCallback = () => {
    this.handleFetchAddresses();
    this.setState({ selectedAddress: null });
  };


  renderAddresses = () => {
    const {
      activeItem,
      addresses,
      countries,
      selectedAddress,
      userID
    } = this.state;


    return (
      <React.Fragment>
        <Card.Group>
          {addresses.map(a => {
            return (
              <Card key={a.id}>
                <Card.Content>
                  {a.default && (
                    <Label as="a" color="blue" ribbon="right">
                      Default
                    </Label>
                  )}
                  <Card.Header>
                    {a.street_address}, {a.apartment_address}
                  </Card.Header>
                  <Card.Meta>{a.country}</Card.Meta>
                  <Card.Description>{a.zip}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    color="yellow"
                    onClick={() => this.handleSelectAddress(a)}
                  >
                    Update
                  </Button>
                  <Button
                    color="red"
                    onClick={() => this.handleDeleteAddress(a.id)}
                  >
                    Delete
                  </Button>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
        {addresses.length > 0 ? <Divider /> : null}
        {selectedAddress === null ? (
          <AddressForm
            activeItem={activeItem}
            countries={countries}
            formType={CREATE_FORM}
            userID={userID}
            callback={this.handleCallback}
          />
        ) : null}
        {selectedAddress && (
          <AddressForm
            activeItem={activeItem}
            userID={userID}
            countries={countries}
            address={selectedAddress}
            formType={UPDATE_FORM}
            callback={this.handleCallback}
          />
        )}
      </React.Fragment>
    );
  };


  LeftSlider = () => {
    const { activeItem } = this.state;
    console.log(activeItem)
    if (activeItem === "paymentHistory") {
      return <PaymentHistory></PaymentHistory>
    }
    else if (activeItem === "order") {
      return <Order></Order>
    }
    // else if (activeItem === "paymentHistory") {
    //   return <PaymentHistory></PaymentHistory>
    // }
    else {
      this.renderAddresses()
    }
  }



  render() {
    const { activeItem, error, loading } = this.state;
    const { isAuthenticated } = this.props;
    console.log(this.props)




    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className='container'>
        <div className='row ml-1 mr-1'>

  
          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={"/order"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style ={{width:"66px",height:"50px",display:"inline-block"}} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Box._CB485927553_.png" class="rounded float-start" alt="..."/>
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{display:'inline-block'}}> Your Orders</h5>
                    <p> Track,return,or buy things again again</p>
                  </div>
                  <p></p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </NavLink>
            </div>
          </div>
           
          

          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={"/loginandsecurity"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/sign-in-lock._CB485931485_.png" class="rounded float-start" alt="..." />
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{ display: 'inline-block' }}> Login & security </h5>
                    <p> Edit login, name, and mobile number,password reset and update etc. </p>
                  </div>
                  <p></p>
                  <br></br>
                 
                </div>
              </NavLink>
            </div>
          </div>

          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={"/payments"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Payments._CB485926332_.png" class="rounded float-start" alt="..." />
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{ display: 'inline-block' }}> Your Payments </h5>
                    <p> Manage payment methods and settings, view balances and offers</p>
                  </div>
                  <p></p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </NavLink>
            </div>
          </div>



          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={'/yourprofile'} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F587%2F247%2Foriginal%2Fvector-cool-emoji-icon.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{ display: 'inline-block' }}> Your Profile</h5>
                    <p>Comments,favorits,browsing hostory,edit profile ...</p>
                  </div>
                  <p></p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </NavLink>
            </div>
          </div>






          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={"/orbitplugguideline"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"  role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nabdsys.com%2Fblogs%2Fwp-content%2Fuploads%2F2015%2F11%2FiStock_000034862400Large-2.jpg&f=1&nofb=1" class="rounded float-start" alt="..." />
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{ display: 'inline-block' }}> OrbitPlug Guidelines</h5>
                    <p>Orders,payments,return,terms and condition,aboutUs,contactUs</p>
                  </div>
                  <p></p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </NavLink>
            </div>
          </div>






          <div className='col-md-4'>
            <br></br>
            <div class="list-group" id="list-tab" role="tablist">
              <NavLink to={"/youcantryforsell"} class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
                <div className='row'>
                  <div className="col-md-3">
                    <img style={{ width: "66px", height: "50px", display: "inline-block" }} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/ya/images/Box._CB485927553_.png" class="rounded float-start" alt="..." />
                  </div>
                  <div className='col-md-9'>
                    <h5 style={{ display: 'inline-block' }}> Your Can Try for sell </h5>
                    <p> Rc,Handcraft,art,etc</p>
                  </div>
                  <p></p>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </NavLink>
            </div>
          </div>


  
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Profile);
