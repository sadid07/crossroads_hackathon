
import PropTypes from "prop-types";
import React, { Component } from "react";
import { endpoint, endpointauth } from "../constants";

function AllImages({ image }) {
  

    return (

        <div  >
            <ul>
                <li> <img src={`${endpointauth}${image}`} className="small_img" alt="" /></li>
            </ul>
        </div>
    );
}

export default AllImages;
