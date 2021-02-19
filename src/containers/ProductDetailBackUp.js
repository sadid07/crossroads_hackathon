import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
    Button,
    Card,
    Container,
    Dimmer,
    Form,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Loader,
    Message,
    Segment,
    Select,
    Divider,
    Radio
} from "semantic-ui-react";
import { productDetailURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

class ProductDetail extends React.Component {
    state = {
        loading: false,
        error: null,
        formVisible: false,
        data: [],
        formData: {},
        radio_name: null
    };

    componentDidMount() {
        this.handleFetchItem();
    }

    handleToggleForm = () => {
        const { formVisible } = this.state;
        this.setState({
            formVisible: !formVisible
        });
    };

    handleFetchItem = () => {
        const {
            match: { params }
        } = this.props;
        this.setState({ loading: true });
        axios
            .get(productDetailURL(params.productID))
            .then(res => {
                console.log(res.data)
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
    };

    handleFormatData = formData => {
        // convert {colour: 1, size: 2} to [1,2] - they're all variations
        return Object.keys(formData).map(key => {
            return formData[key];
        });
    };

    handleAddToCart = slug => {
        this.setState({ loading: true });
        const { formData } = this.state;
        const variations = this.handleFormatData(formData);
        authAxios
            .post(addToCartURL, { slug, variations })
            .then(res => {
                console.log(res);
                this.props.refreshCart();
                this.setState({ loading: false });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
                console.log(err.response.data);
            });
    };


    handleChange = (e, { name, value }) => {
        const { formData } = this.state;
        const { radio_name } = this.state;
        const updatedFormData = {
            ...formData,
            [name]: value
        };

        this.setState({ formData: updatedFormData });
        this.setState({ radio_name: value })
        console.log(typeof (value));

    };

    render() {
        const { data, error, formData, formVisible, loading } = this.state;
        const item = data;
        // console.log('formData', this.name);
        // console.log("name", this.radio_name);
        console.log(typeof (this.state.radio_name));


        return (
            <Container>
                {error && (
                    <Message
                        error
                        header="There was some errors with your submission"
                        content={JSON.stringify(error)}
                    />
                )}

                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Card
                                fluid
                                image={item.image}
                                header={item.title}
                                meta={
                                    <React.Fragment>
                                        {item.category}
                                        {item.discount_price && (
                                            <Label
                                                color={
                                                    item.label === "primary"
                                                        ? "blue"
                                                        : item.label === "secondary"
                                                            ? "green"
                                                            : "olive"
                                                }
                                            >
                                                {item.label}
                                            </Label>
                                        )}
                                    </React.Fragment>
                                }
                                description={item.description}
                                extra={
                                    <React.Fragment>
                                        <Button
                                            fluid
                                            color="yellow"
                                            floated="right"
                                            icon
                                            labelPosition="right"
                                            onClick={this.handleToggleForm}
                                        >
                                            Add to cart
                      <Icon name="cart plus" />
                                        </Button>
                                    </React.Fragment>
                                }
                            />
                            {formVisible && (
                                <React.Fragment>
                                    <Divider />
                                    <Form onSubmit={() => this.handleAddToCart(item.slug)}>
                                        {data.variations.map(v => {
                                            const name = v.title.toLowerCase();
                                            console.log(name, '.................')
                                            return (
                                                <Form.Field key={v.id}>
                                                    <Select
                                                        name={name}
                                                        onChange={this.handleChange}
                                                        placeholder={`Select a ${name}`}
                                                        fluid
                                                        // selection
                                                        // options={v.title} 
                                                        options={data.variations.map(item => {
                                                            return {
                                                                key: item.id,
                                                                text: item.title,
                                                                value: item.id
                                                            };
                                                        })}

                                                        value={formData[name]}
                                                    />
                                                </Form.Field>
                                            );
                                        })}
                                        <Form.Button primary>Add</Form.Button>
                                    </Form>
                                </React.Fragment>
                            )}
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h2">Try different variations</Header>
                            {/* <Header as="h2">{data.variations}</Header> */}
                            {data.variations &&
                                data.variations.map(v => {
                                    return (
                                        <React.Fragment key={v.id}>
                                            <Header as="h3">{v.title}</Header>
                                            <Item.Group divided>
                                                <Item.Image
                                                    size="tiny"
                                                    src={`http://127.0.0.1:8000${v.image}`}
                                                />
                                            </Item.Group>
                                            {/* <Select
                         
                          onChange={this.handleChange}
                          placeholder={`Select a ${v.title}`}
                          fluid
                          options={data.variations.map(item => {
                            return {
                              key: item.id,
                              text: item.title,
                              value: item.id
                            };
                          })}
                        /> */}

                                            <Radio
                                                label={v.title}
                                                name={v.title}
                                                value={v.id}
                                                checked={this.state.radio_name === v.id}
                                                onChange={this.handleChange}

                                            />




                                        </React.Fragment>

                                    );
                                })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>








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
