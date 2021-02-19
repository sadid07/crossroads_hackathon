import axios from "axios";
import * as actionTypes from "./actionTypes";
import { endpoint, endpointauth } from "../../constants";
import { NavLink, Redirect } from "react-router-dom";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };

};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
 
  
  return {
    type: actionTypes.AUTH_LOGOUT
    
  };



};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(`${endpointauth}/auth/login/`, {
        email: email,
        password: password
      })
      .then(res => {
        const token = res.data.tokens.access;
        // console.log((res));
        // console.log((token));
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
        // setInterval(function () {
          window.location.reload();
        // }, 1000);
      })
      .catch(err => {
        dispatch(authFail(err));
        // console.log(err.response)
        var data = err.response.data
        if (((Object.values(data).length) == 1)) {
          dispatch(authFail(err.response.data));
        } else {
          console.log('is not empty ')
        }

      });
  };
};

export const authSignup = (username, email, password, password2,props) => {

  return dispatch => {
    dispatch(authStart());
    axios
      .post(`${endpointauth}/auth/register/`, {
        username: username,
        email: email,
        password: password,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        dispatch(checkAuthTimeout(3600));
          window.location.href = "/login"

      })
      .catch(err => {
        dispatch(authFail(err.response));
        // console.log(err.response)
        var data = err.response.data
        if (((Object.values(data).length)== 1)) {
          dispatch(authFail(err.response.data));
        } else {
          console.log('is not empty ')
        }
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
