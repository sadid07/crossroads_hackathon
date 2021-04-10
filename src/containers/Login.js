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








    return (
      <>




        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
           
          <Grid.Column style={{ maxWidth: 450 }}>
          <Zoom left>
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
                  >
                    Login
                </Button>
                  <br></br>






                  <GoogleLogin
                    clientId="356944659457-nm7vn4p2jtmcvd20gsqqgiep04qaq6rt.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />


                  <FacebookLogin
                    textButton={" \u00a0 \u00a0 Login"}
                    // size='small'
                    // for test
                    // local host 
                    appId="152971560061948"


                    // local host it is working
                    // appId="566800850960501"


                    // orbitplug
                    // appId="781826136014066"

                    // for production
                    // appId="779646426301443"

                    autoLoad={false}
                    scope="email"
                    // fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon={<svg style={{ color: '#1771E6' }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>}

                  >


                  </FacebookLogin>

                </Segment>
              </Form>
              <Message>
                New to us? <NavLink to="/signup">Sign Up</NavLink>





     
     
         
        
      
              </Message>
            </React.Fragment>
            </Zoom>
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
