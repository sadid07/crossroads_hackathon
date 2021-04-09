import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Skills from "./containers/Skills";


const BaseRouter = () => (
  <Hoc>

    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/skills" component={Skills} />
   
    <Route exact path="/" component={HomepageLayout} />
  </Hoc>
);

export default BaseRouter;
