import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect, Link } from "react-router-dom";
import { authLogin } from "../store/actions/auth";
import "./Login.css"
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import Zoom from 'react-reveal/Zoom';

// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import './Login.css'

// import * as actionTypes from "./actionTypes";
import { authSuccess, authFail, checkAuthTimeout } from '../store/actions/auth'
import { endpoint, endpointlocahost, endpointlocahostsocilauth } from "../constants";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    token: "",
    isLogged: false,

    formData: {
      email: "",


    },
  };



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);

  };

  responseGoogle = (response) => {
    this.setState({ token: response.tokenObj.id_token, loading: false });
    const { token } = this.state;
    axios
      .post(`${endpointlocahost}/social_auth/google/`, {
        auth_token: token,

      })

      .then(res => {
        const token = res.data.tokens.access;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);

        setInterval(function () {
          window.location.reload();
        }, 1000);
      })
      .catch(err => {
        console.log(err)

      });


  }





  responseFacebook = (response) => {
    console.log(response,'.................');


    this.setState({ token: response.accessToken, loading: false });
    const { token } = this.state;
    axios

      .post(`${endpointlocahost}/social_auth/facebook/`, {
        auth_token: token,

      })
      .then(res => {
        const token = res.data.tokens.access;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        setInterval(function () {
          window.location.reload();
        }, 1000);


      })
      .catch(err => {


      });




  }


  //  refreshPage =() =>{
  //   window.location.reload();
  // }

  render() {
    window.scrollTo(0, 0);
    const { error, loading, token } = this.props;
    const { email, password } = this.state;
    if (Object.values(this.props).length > 1) {

      if ((this.props.error) == null) {
        if (!this.state.isLogged) {

        }
      }
      else {
     
        var d = this.props.error
        var err_password_match_err = this.props.error.data

        // ...................... error_messes_password error messes.......................

        if (d == null) {
        }
        else {
          var err_messes = this.props.error.detail
          

          document.getElementById("error_messes").innerHTML = "";
       

          // ...................... email error messes.......................

          if (err_messes == null) {
            document.getElementById("error_messes").innerHTML = "";

          }

          else {

            document.getElementById("error_messes").innerHTML = err_messes;

          }
       

        }



      }

    }




    if (token) {
      return <Redirect to="/" />;
    }




    return (
      <>




        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
           
          <Grid.Column style={{ maxWidth: 450 }}>
          {/* <Zoom left> */}
            {/* {error && <p>{this.props.error.message}</p>} */}
            <h6 className='error_messes' id="error_messes"></h6>


            <React.Fragment >
              <Form size="large" onSubmit={this.handleSubmit}>



                <Segment stacked style={{ borderRadius: "18px" }}>

                  <br></br>
                  <h4 style={{ textAlign: "center" }}>Log-in to your account</h4>
                  <br></br>




                  <Form.Input
                    onChange={this.handleChange}
                    value={email}
                    name="email"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="email"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    fluid
                    value={password}
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />

                  <Button
                    color="teal"
                    fluid
                    size="large"
                    loading={loading}
                    disabled={loading}
                    style={{ backgroundColor: "#FF039A"}}
                  >
                    Login
                </Button>
                  <br></br>









                </Segment>
              </Form>
              <Message>
                New to us? <NavLink to="/signup">Sign Up</NavLink>





     
     
         
        
      
              </Message>
            </React.Fragment>
            {/* </Zoom> */}
          </Grid.Column>
          
        </Grid>





      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(authLogin(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
