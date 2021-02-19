







class Addresses extends React.Component {


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


    render() {
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


};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Addresses);
