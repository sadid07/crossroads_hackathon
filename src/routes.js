import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Skills from "./containers/Skills";
import Payments from "./containers/Payments";
import Checkout from "./containers/Checkout";
// import Skills from "./containers/Skills";
// import Skills from "./containers/Skills";
// import Skills from "./containers/Skills";
import UserProfileUpdate from "./containers/UserProfileUpdate"


const BaseRouter = () => (
  <Hoc>

    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/payments" component={Payments} />
    <Route exact path="/checkout" component={Checkout} />
    <Route path="/userprofileupdate" component={UserProfileUpdate} />
    {/* <Route path="/skills" component={Skills} /> */}
   
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
