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
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    data :{},
    is_problem :"",
    isLogged: false

  };



  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 ,is_problem ,data} = this.state;
    this.props.signup(username, email, password, password2,this.props);


  
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password, password2 ,data} = this.state;
    const { error, loading, token } = this.props;

   


    if (Object.values(this.props).length > 1){
      
      if ((this.props.error) ==null){
        if (!this.state.isLogged) {
         

        }
 
       
      }
      else{
      //  if (!this.state.isLogged) {
      //     this.setState({
      //       isLogged: true,
      //       data: this.props.error
      //     });
      //   }
        // console.log(data.data, 'data......')
        // console.log(this.props.error.data.errors, 'propesssssssssss')

        var d = this.props.error.errors
        var err_password_match_err = this.props.error.data

// ...................... error_messes_password error messes.......................

        if (err_password_match_err == null){
          document.getElementById("error_messes_password").innerHTML = "";
        }
        else{
          document.getElementById("error_messes_password").innerHTML = err_password_match_err.Message;
        }

        if (d == null){
        }
        else{
          var err_email = this.props.error.errors.email
          var err_password = this.props.error.errors.password
          var err_username = this.props.error.errors.username

          document.getElementById("error_messes_email").innerHTML = "";
          document.getElementById("error_messes_password").innerHTML = "";
          document.getElementById("error_messes_username").innerHTML = "";

// ...................... email error messes.......................

          if (err_email == null) {
            document.getElementById("error_messes_email").innerHTML = "";

          }

          else {

            document.getElementById("error_messes_email").innerHTML = err_email;

          }
        // ...................... password error messes.......................

        if (err_password == null) {
          document.getElementById("error_messes_password").innerHTML = "";

        }

        else {

          document.getElementById("error_messes_password").innerHTML = err_password;

        }
        // ...................... Username error messes.......................

          if (err_username == null) {
            document.getElementById("error_messes_username").innerHTML = "";

        }

        else {

            document.getElementById("error_messes_username").innerHTML = err_username;

        }


      }



      }
      
    }

    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>

          {/* {error && <p>{this.props.error.errors}</p>} */}
          <h6 className='error_messes_email' id= "error_messes_email"></h6>
          <h6 className='error_messes_email' id= "error_messes_password"></h6>
          <h6 className='error_messes_username' id= "error_messes_username"></h6>

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked style={{ borderRadius: "18px" }}>
                <br></br>
                <h4 style={{ textAlign: "center" }}>Signup to your account</h4>
                <br></br>


                <Form.Input
                  onChange={this.handleChange}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
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
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm password"
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
                  Signup
                </Button>
                <br></br>
                <br></br>
                <br></br>
              

              </Segment>
            </Form>
            <Message>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </Message>
          </React.Fragment>
        </Grid.Column>
      </Grid>
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
    signup: (username, email, password, password2) =>
      dispatch(authSignup(username, email, password, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
