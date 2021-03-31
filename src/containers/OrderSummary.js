import React from "react";
import {
  Container,
  Dimmer,
  Header,
  Icon,
  Image,
  Label,
  Loader,
  Table,
  Button,
  Message,
  Segment,
  Item
} from "semantic-ui-react";
import { connect } from "react-redux";
import { authAxios } from "../utils";
import {
  addToCartURL,
  orderSummaryURL,
  orderItemDeleteURL,
  orderItemUpdateQuantityURL
} from "../constants";
import { endpoint, endpointlocahost } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { withRouter, Link, NavLink, Redirect} from "react-router-dom";

class OrderSummary extends React.Component {
  state = {
    data: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.handleFetchOrder();
    window.scrollTo(0, 0);

  }



  handleFetchOrder = () => {
    this.setState({ loading: true });
    authAxios
      .get(orderSummaryURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
        window.scrollTo(0, 0);


      })
      .catch(err => {

        // if (err.response.status === 404) {
        //   this.setState({
        //     error: "You currently do not have an order",
        //     loading: false
        //   });
        // } else {
        //   this.setState({ error: err, loading: false });
        // }
      });
  };

  renderVariations = orderItem => {
    let text = "";
    orderItem.item_variations.forEach(iv => {
      text += `${iv.variation}: ${iv.value}, `;
    });
    return text;
  };

  handleFormatData = itemVariations => {
    // convert [{id: 1},{id: 2}] to [1,2] - they're all variations
    return Object.keys(itemVariations).map(key => {
      return itemVariations[key].id;
    });
  };

  handleAddToCart = (slug, itemVariations) => {
    this.setState({ loading: true });
    const variations = this.handleFormatData(itemVariations);
    authAxios
      .post(addToCartURL, { slug, variations })
      .then(res => {
        this.handleFetchOrder();
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleRemoveQuantityFromCart = slug => {
    authAxios
      .post(orderItemUpdateQuantityURL, { slug })
      .then(res => {
        this.handleFetchOrder();
        this.props.refreshCart();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleRemoveItem = itemID => {
    authAxios
      .delete(orderItemDeleteURL(itemID))
      .then(res => {
        this.handleFetchOrder();
        this.props.refreshCart();
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    const { data, error, loading } = this.state;
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    
    return (
  <>
   
    <Container >
      <div className='order__hidden__desktop'  style = {{textAlign:"center"}}>
        <h5>Order Summary</h5>
        {error && (
          <Message
            error
            header="There was an error"
            content={JSON.stringify(error)}
          />
        )}

        {data && (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell> Name</Table.HeaderCell>
                <Table.HeaderCell> Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Total item price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.order_items.map((orderItem, i) => {
                return (
                  <Table.Row key={orderItem.id}>

                    <Table.Cell>
                      <NavLink to={(`/single-product/${orderItem.item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>

                          <img style={{ width: 70, height: 70 }} src={`${endpointlocahost}${orderItem.item.image}`} class="rounded mx-auto d-block" alt="..."></img>
                      </NavLink>

                    </Table.Cell>

                    <Table.Cell>
                      <NavLink to={(`/single-product/${orderItem.item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>

                        {orderItem.item.title.slice(0, 90)}... {" "}
                      {this.renderVariations(orderItem)}
                       </NavLink>
                    </Table.Cell>
                   
                    <Table.Cell>${orderItem.item.price}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Icon
                        name="minus"
                        style={{ float: "left", cursor: "pointer" }}
                        onClick={() =>
                          this.handleRemoveQuantityFromCart(orderItem.item.slug)
                        }
                      />
                      {orderItem.quantity}
                      <Icon
                        name="plus"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() =>
                          this.handleAddToCart(
                            orderItem.item.slug,
                            orderItem.item_variations
                          )
                        }
                      />
                    </Table.Cell>
                  
                    <Table.Cell>
                      {orderItem.item.discount_price && (
                        <Label color="green" ribbon>
                          ON DISCOUNT
                        </Label>
                      )}
                      ${orderItem.final_price}
                      <Icon
                        name="trash"
                        color="red"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() => this.handleRemoveItem(orderItem.id)}
                      />
                    </Table.Cell>



                  </Table.Row>
                );
              })}
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell textAlign="right" colSpan="2">
                  Order Total: ${data.total}
                </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="5">
                  <Link to="/checkout">
                    <Button floated="right" color="yellow">
                      Order Now
                    </Button>
                  </Link>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
      </div>

    </Container>
      
    
    <Container>
      <div className='order__hidden__phone'>
        {error && (
          <Message
            error
            header="There was an error"
            content={JSON.stringify(error)}
          />
        )}

        {data && (
          <Table celled>
            <Table.Header>
              <Table.Row>
                    <h5>Order Summary</h5>

              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.order_items.map((orderItem, i) => {
                return (
                  <Table.Row key={orderItem.id}>

                    <Table.Cell>
                      <NavLink to={(`/single-product/${orderItem.item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>

                          <img style={{ width: 70, height: 70 }} src={`${endpointlocahost}${orderItem.item.image}`} class="rounded mx-auto d-block" alt="..."></img>
                      </NavLink>

                    </Table.Cell>

                    <Table.Cell>
                      <NavLink to={(`/single-product/${orderItem.item.id}`)} style={{ textDecoration: 'none', color: 'black' }}>

                        {orderItem.item.title.slice(0, 70)}... {" "}
                      {this.renderVariations(orderItem)}
                       </NavLink>
                    </Table.Cell>
                   
                    <Table.Cell><b>Price :  ৳</b>{orderItem.item.price}</Table.Cell>
                    
                    <Table.Cell>

                      <b> Total item price : ৳</b>{orderItem.final_price}
                      <Icon
                        name="trash"
                        color="red"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() => this.handleRemoveItem(orderItem.id)}
                      />
                    </Table.Cell>

                    
                    
                    
                    <Table.Cell textAlign="center">
                      <Icon
                        name="minus"
                        style={{ float: "left", cursor: "pointer" }}
                        onClick={() =>
                          this.handleRemoveQuantityFromCart(orderItem.item.slug)
                        }
                      />
                      {orderItem.quantity}
                      <Icon
                        name="plus"
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={() =>
                          this.handleAddToCart(
                            orderItem.item.slug,
                            orderItem.item_variations
                          )
                        }
                      />
                    </Table.Cell>
                  
                  


                  </Table.Row>
                );
              })}
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell textAlign="right" colSpan="2">
                  Order Total: ${data.total}
                </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="5">
                  <Link to="/checkout">
                    <Button floated="right" color="yellow">
                      Order Now
                    </Button>
                  </Link>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
          </div>
    </Container>
    

</>






    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};





export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderSummary)
);





// export default connect(mapStateToProps)(OrderSummary);
