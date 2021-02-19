import React, { Component } from "react";
import {
  CardElement,
  injectStripe,
  Elements,
  StripeProvider
} from "react-stripe-elements";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Item,
  Label,
  Message,
  Select,
  Radio

} from "semantic-ui-react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { authAxios } from "../utils";
import {
  checkoutURL,
  orderSummaryURL,
  addCouponURL,
  addressListURL
} from "../constants";
import { endpoint } from "../constants";

class CheckoutForm extends Component {
  state = {
    data1: '',
    error: null,
    loading: false,
    formData: "",
    saving: false,
    success: false,
    profileFormData: "",
    activiteProfileFormData: "",
    activiteFormData: "",
    selectedOption: "",
    isLogged: false,



  };

  // componentDidMount() {
  //   this.handleFetchPayments();
  // }



  componentDidMount() {
    const {
      data,
      error,
      loading,
      formData,
      profileFormData,
      selectedOption,
      activiteProfileFormData,
      activiteFormData

    } = this.state;
    this.setState({ loading: true });
    authAxios
      .get(`${endpoint}/shippingaddresslistview/`)

      .then(res => {
        this.setState({ 
          formData: res.data.results, 
          loading: false,
          activiteFormData: res.data.results[0].shopping_fast_name

        
        
        });
        window.scrollTo(0, 0);



      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });




    //  ..............................................................
    authAxios
      .get(`${endpoint}/userprofile/`)

      .then(res => {
        this.setState({
          loading: false,
          profileFormData: res.data.results,
          activiteProfileFormData: res.data.results[0].fast_name
        });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });






  

  }



  onValueChange = (event) => {
    const {
      selectedOption

    } = this.state;
    this.setState({
      selectedOption: event.target.value
    });
  }


  submit = ev => {
    ev.preventDefault();

    this.setState({ loading: true });


    authAxios

      .post(checkoutURL, {
        // stripeToken: result.token.id,
        
      })
      .then(res => {
        this.setState({ loading: false, success: true });
        this.props.history.push('/');
        window.location.reload()

      })
      .catch(err => {
      
      });

    // });

  };





  render() {
    const {
      data,
      error,
      loading,
      formData,
      profileFormData,
      selectedOption,
      activiteProfileFormData,
      activiteFormData

    } = this.state;

    
 
    return (
      <div className='container my-5' >
        <div className='row'>
          {/* .............................. Personal Profile .................................. */}
      {(() => {

            if (activiteProfileFormData == '') {
              return (

                <div className='col-md-4'>
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    &nbsp;

                    Personal Profile
                  </h4>
                  <br></br>

                  <h5>Add your Profile Information</h5> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  <br></br>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to='/userprofileupdate'>
                  
                  <Button
                    loading={loading}
                    // disabled={true}
                    primary
                    style={{ marginTop: "10px" }}
                  >
                    Edit
                  </Button>
                  </NavLink>
                </div>
           )
            }

            else {
              return (


                <>
                  {profileFormData &&
                    profileFormData.map(v => {
                      return (
                        <div className='col-md-4' style={{ background: "#FFFFFF" }}>
                          <h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
              &nbsp;

                Personal Profile
            </h4>
                          <p>
                            <h4>
                              &nbsp;&nbsp;{v.fast_name} {v.last_name}
                            </h4>
                            <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                              </svg>&nbsp;
              {v.address}
                            </p>

                            <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                              </svg>

              &nbsp;
              {v.district} {v.division} {v.zip_code}</p>


                            <p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                              </svg>

              &nbsp;
              (+880){v.phone}</p>
                          </p>





                        </div>

                      );

                    })}
                </>
              )
            }



          })()}



        

     



          {/* .............................. Shipping Address.................................. */}

        


          {(() => {

            if (activiteFormData == '') {
              return (

                <div className='col-md-4'>
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>&nbsp;

                     Shipping Address</h4>
                    <br></br>

                  <h5>Add your shipping Information</h5> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  <br></br>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to='/shippingaddressupdate'>
                    <Button
                      loading={loading}
                      // disabled={true}
                      primary
                      style={{ marginTop: "10px" }}
                    >
                      Edit
                    </Button>
                  </NavLink>
                </div>
              )
            }

            else {
              return (


                <>

          {formData &&
            formData.map(v => {
              return (
                <div className='col-md-4' style={{ background: "#FFFFFF" }}>
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>&nbsp;

                Shipping Address</h4>
                  <p>
                    <h4>

                      &nbsp;&nbsp;{v.shopping_fast_name} {v.shopping_last_name}



                    </h4>
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                      </svg>&nbsp;

              {v.shopping_address}


                    </p>


                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>

              &nbsp;
              {v.shopping_district} {v.shopping_division} , {v.shopping_zip_code}</p>


                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                      </svg>

              &nbsp;
              (+880){v.shopping_phone}</p>
                  </p>
                </div>


              );

            })}

                </>
              )
            }



          })()}

          <div className='col-md-4' style={{ background: "#FFFFFF" }}>
            <br></br>
            <br></br>

            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Cash on delivery"
                  checked={this.state.selectedOption === "Cash on delivery"}
                  onChange={this.onValueChange}
                />
                   &nbsp; Cash on delivery
              </label>
            </div>





            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Payment"
                  checked={this.state.selectedOption === "Payment"}
                  onChange={this.onValueChange}
                />
                    &nbsp; Payment
              </label>
            </div>

            <br></br>


          <>



              {(() => {
                if (activiteFormData.length >1  && activiteProfileFormData.length > 1) {
                  return (
                    <>
               
                      {(() => {
                        if (selectedOption == 'Cash on delivery') {
                          return (
                            <>
                              <Button
                                loading={loading}
                                disabled={loading}
                                primary
                                onClick={this.submit}
                                style={{ marginTop: "10px" }}
                              >
                                Confirm Order
                               </Button>

                            </>
                          )
                        }





                        else if (selectedOption == "Payment") {
                          return (
                            <NavLink to="/payment">
                              <Button
                                loading={loading}
                                disabled={loading}
                                primary
                                style={{ marginTop: "10px" }}
                              >
                                Payment
                  </Button>
                            </NavLink>
                          )
                        }

                        else {
                          return (
                            <Button
                              loading={loading}
                              disabled={true}
                              primary
                              style={{ marginTop: "10px" }}
                            >
                              Choose option
                            </Button>

                          )
                        }
                      })()}



                    </>
                  )
                }



                else{
                  return (
                    <>
                  


                      <Button
                        loading={loading}
                        disabled={true}
                        primary
                        style={{ marginTop: "10px" }}
                      >
                        Add Informetion
                      </Button>

                  










                    </>
                  )
                }











              })()}



















        </>







          </div>

        </div>

      </div>
    );
  }
}

;

export default CheckoutForm;
